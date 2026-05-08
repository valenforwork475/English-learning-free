const UNLOCK_ALL_LEVELS = false; // เปิดสวิตช์นี้เป็น true เพื่อปลดล็อกทุกด่านให้เทสได้ทันที

const SUPABASE_URL = 'https://gmlfvejipuaxobclitqr.supabase.co';
const SUPABASE_KEY = 'sb_publishable_E3OGBazNKKWJ7QoqIZTQSQ_jNr_0Fjl';
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

const app = {
    currentView: 'dashboard',
    currentCardIndex: 0,
    isFlipped: false,
    currentCategory: 'toeic',
    currentLevel: 1,
    vocabList: [],
    learnedWords: new Set(),
    quizList: [],
    currentQuizIndex: 0,
    quizScore: 0,
    unlockedLevels: {
        grammar: 1,
        toeic_listening: 1, toeic_reading: 1, toeic_speaking: 1,
        toefl_listening: 1, toefl_reading: 1, toefl_speaking: 1
    },

    async init() {
        this.setupAuth();
        this.setupNavigation();
        this.setupPWA();
        
        try {
            const { data: { session } } = await db.auth.getSession();
            
            const sidebar = document.querySelector('.sidebar');
            if (!session) {
                this.switchView('login');
                if(sidebar) {
                    sidebar.classList.remove('sidebar-initial-hide');
                    sidebar.style.display = 'none';
                }
            } else {
                const username = session.user.user_metadata?.username || session.user.email?.split('@')[0] || 'ผู้เรียน';
                this._currentUsername = username;

                if(sidebar) {
                    sidebar.classList.remove('sidebar-initial-hide');
                    sidebar.style.display = 'flex';
                }
                await this.loadProgress();
                this.vocabList = vocabData.filter(w => w.category === 'toeic_listening' && w.level === 1);
                this.updateStats();
                this.loadFlashcard(false);
                this.updateGreeting(username);
                
                // เริ่ม Presence และดึงสถิติ (ทำแบบ silent ไม่ error)
                try { this.setupPresence(username); } catch(e) { console.warn('Presence error:', e); }
                try { this.fetchUserStats(); } catch(e) { console.warn('Stats error:', e); }

                if (document.getElementById('login-view')?.classList.contains('active')) {
                    this.switchView('dashboard');
                }
            }
        } catch (err) {
            // Error เงียบๆ ไม่ต้อง alert → กลับไปหน้า Login
            console.error("Auth init error:", err);
            this.switchView('login');
            const sidebar = document.querySelector('.sidebar');
            if(sidebar) sidebar.style.display = 'none';
        }
    },

    setupAuth() {
        const loginForm = document.getElementById('login-form');
        const registerForm = document.getElementById('register-form');

        if (loginForm) {
            loginForm.onsubmit = async (e) => {
                e.preventDefault();
                const username = document.getElementById('login-username').value.trim().toLowerCase();
                const pass = document.getElementById('login-password').value.trim();
                const error = document.getElementById('login-error');
                const btn = document.getElementById('login-btn');
                
                btn.textContent = 'กำลังเข้าสู่ระบบ...';
                btn.disabled = true;
                
                // แปลง Username เป็น Email ปลอมสำหรับส่งให้ Supabase
                const fakeEmail = `${username}@eng.com`;
                
                const { data, error: err } = await db.auth.signInWithPassword({
                    email: fakeEmail,
                    password: pass,
                });
                
                btn.textContent = 'เข้าสู่ระบบ';
                btn.disabled = false;
                
                if (err) {
                    error.textContent = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
                    error.style.display = 'block';
                } else {
                    error.style.display = 'none';
                    loginForm.reset();
                    document.querySelector('.sidebar').style.display = 'flex';
                    this.init();
                    this.switchView('dashboard');
                }
            };
        }

        if (registerForm) {
            registerForm.onsubmit = async (e) => {
                e.preventDefault();
                const username = document.getElementById('register-username').value.trim().toLowerCase();
                const pass = document.getElementById('register-password').value.trim();
                const error = document.getElementById('register-error');
                const btn = document.getElementById('register-btn');
                
                btn.textContent = 'กำลังสร้างบัญชี...';
                btn.disabled = true;
                
                // แปลง Username เป็น Email ปลอมสำหรับส่งให้ Supabase
                const fakeEmail = `${username}@eng.com`;
                
                const { data, error: err } = await db.auth.signUp({
                    email: fakeEmail,
                    password: pass,
                    options: {
                        data: {
                            username: username,
                            unlockedLevels: this.unlockedLevels,
                            learnedWords: Array.from(this.learnedWords)
                        }
                    }
                });
                
                btn.textContent = 'สร้างบัญชี';
                btn.disabled = false;
                
                if (err) {
                    error.textContent = err.message || 'เกิดข้อผิดพลาดในการสมัคร (รหัสผ่านอาจสั้นเกินไป)';
                    error.style.display = 'block';
                    return;
                }
                
                error.style.display = 'none';
                registerForm.reset();
                
                // สมัครสำเร็จ -> กลับไปหน้าล็อกอิน
                error.textContent = '✅ สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบด้วยชื่อผู้ใช้งานของคุณ';
                error.style.display = 'block';
                error.style.color = '#22c55e';
                
                setTimeout(() => {
                    error.style.display = 'none';
                    error.style.color = '';
                    this.switchView('login');
                }, 2000);
            };
        }
    },

    async logout() {
        await db.auth.signOut();
        document.querySelector('.sidebar').style.display = 'none';
        this.switchView('login');
    },

    updateGreeting(username) {
        const greetingText = document.getElementById('greeting-text');
        const userNameSpan = document.querySelector('.user-name');
        if (greetingText) {
            greetingText.innerHTML = `สวัสดีคุณ, ${username}! 👋`;
        }
        if (userNameSpan) {
            userNameSpan.textContent = username;
        }
    },

    async fetchUserStats() {
        // เฉพาะแอดมิน valen เท่านั้น
        if (this._currentUsername !== 'valen') return;
        try {
            const { count, error } = await db
                .from('profiles')
                .select('*', { count: 'exact', head: true });
            const el = document.getElementById('admin-total-count');
            if (el) el.textContent = `${count || 0} คน`;
        } catch(e) { /* ตารางยังไม่มี */ }
    },

    setupPresence(username) {
        const isAdmin = username === 'valen';
        const channel = db.channel('online-users');

        channel.on('presence', { event: 'sync' }, () => {
            const state = channel.presenceState();
            const users = [];
            Object.values(state).forEach(presences => {
                presences.forEach(p => { if (p.username) users.push(p.username); });
            });

            if (isAdmin) {
                const panel = document.getElementById('admin-panel');
                const countEl = document.getElementById('admin-online-count');
                const listEl = document.getElementById('admin-online-list');
                if (panel) panel.style.display = 'block';
                if (countEl) countEl.textContent = `${users.length} คน`;
                if (listEl) {
                    listEl.innerHTML = users.length
                        ? users.map(u => `<div class="online-user-chip"><span class="stat-dot online"></span>${u}</div>`).join('')
                        : '<span style="opacity:0.5;font-size:0.85rem;">ยังไม่มีผู้ใช้งานออนไลน์</span>';
                }
            }
        });

        channel.subscribe(async (status) => {
            if (status === 'SUBSCRIBED') {
                await channel.track({ username, online_at: new Date().toISOString() });
            }
        });
    },

    setupPWA() {
        let deferredPrompt;
        const installBtn = document.getElementById('install-btn');
        
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
        });

        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test( userAgent );
        };
        const isInStandaloneMode = () => ('standalone' in window.navigator) || window.matchMedia('(display-mode: standalone)').matches;

        if (installBtn) {
            if (!isInStandaloneMode()) {
                installBtn.style.display = 'inline-flex';
            } else {
                installBtn.style.display = 'none';
            }

            if (isIos() && !isInStandaloneMode()) {
                installBtn.innerHTML = '<i class="fa-brands fa-apple"></i> วิธีติดตั้งบน iPhone';
            }
            
            installBtn.onclick = async () => {
                if (deferredPrompt) {
                    deferredPrompt.prompt();
                    const { outcome } = await deferredPrompt.userChoice;
                    console.log(`User response: ${outcome}`);
                    deferredPrompt = null;
                    installBtn.style.display = 'none';
                } else {
                    const modal = document.getElementById('custom-install-modal');
                    const icon = document.getElementById('install-modal-icon');
                    const msg = document.getElementById('install-modal-message');
                    
                    if (isIos()) {
                        icon.innerHTML = '<i class="fa-brands fa-apple"></i>';
                        msg.innerHTML = "<strong>วิธีติดตั้งบน iPhone:</strong><br><br>1. กดปุ่ม Share (ไอคอนสี่เหลี่ยมมีลูกศรชี้ขึ้น) ที่แถบด้านล่างของจอ<br><br>2. เลื่อนหาและกดคำว่า <strong>'เพิ่มไปยังหน้าจอโฮม'</strong> (Add to Home Screen)";
                    } else {
                        icon.innerHTML = '<i class="fa-brands fa-android"></i>';
                        msg.innerHTML = "<strong>วิธีติดตั้งบน Android:</strong><br><br>1. กดที่เมนูตั้งค่า (จุด 3 จุด มุมขวาบนของเบราว์เซอร์)<br><br>2. เลือกคำว่า <strong>'เพิ่มลงในหน้าจอหลัก'</strong> หรือ <strong>'ติดตั้งแอป'</strong>";
                    }
                    modal.classList.add('active');
                }
            };
        }
    },

    async loadProgress() {
        const { data: { user } } = await db.auth.getUser();
        if (user && user.user_metadata) {
            if (user.user_metadata.unlockedLevels) {
                try { 
                    this.unlockedLevels = { ...this.unlockedLevels, ...user.user_metadata.unlockedLevels }; 
                    // ตรวจสอบว่าถ้า grammar เป็น undefined ให้ตั้งเป็น 1
                    if (this.unlockedLevels.grammar === undefined) this.unlockedLevels.grammar = 1;
                } catch (e) {}
            }
            if (user.user_metadata.learnedWords) {
                try { this.learnedWords = new Set(user.user_metadata.learnedWords); } catch (e) {}
            }
        }
    },

    async saveProgress() {
        this.updateStats();
        
        const { data: { user } } = await db.auth.getUser();
        if (user) {
            await db.auth.updateUser({
                data: { 
                    unlockedLevels: this.unlockedLevels,
                    learnedWords: Array.from(this.learnedWords)
                }
            });
        }
    },

    setupNavigation() {
        const navItems = document.querySelectorAll('.nav-links li');
        navItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const view = item.getAttribute('data-view');
                if (view) {
                    this.switchView(view);
                    navItems.forEach(n => n.classList.remove('active'));
                    item.classList.add('active');
                }
            });
        });
    },

    showLevels(trackId) {
        this.currentCategory = trackId;
        const trackData = categoryData[trackId];
        document.getElementById('levels-track-title').textContent = trackData ? trackData.name : trackId.toUpperCase();
        
        const container = document.getElementById('levels-container');
        container.innerHTML = '';
        
        const levels = levelsInfo[trackId] || [];
        const unlockedMax = UNLOCK_ALL_LEVELS ? 999 : this.unlockedLevels[trackId];
        
        levels.forEach(lvl => {
            const isUnlocked = lvl.level <= unlockedMax;
            const isCompleted = lvl.level < unlockedMax;
            
            const card = document.createElement('div');
            card.className = `level-card ${!isUnlocked ? 'locked' : ''} ${isCompleted ? 'completed' : ''}`;
            
            let iconHtml = '<i class="fa-solid fa-play"></i>';
            if (!isUnlocked) iconHtml = '<i class="fa-solid fa-lock"></i>';
            else if (isCompleted) iconHtml = '<i class="fa-solid fa-check"></i>';
            
            card.innerHTML = `
                <div class="level-info">
                    <h3>${lvl.name}</h3>
                    <p>${lvl.desc}</p>
                </div>
                <div class="level-status">
                    ${iconHtml}
                </div>
            `;
            
            if (isUnlocked) {
                card.onclick = () => this.startCategory(trackId, lvl.level);
            }
            
            container.appendChild(card);
        });
        
        this.switchView('levels');
    },

    startCategory(trackId, level) {
        this.currentCategory = trackId;
        this.currentLevel = level;
        
        if (trackId === 'grammar') {
            this.switchView('grammar');
            grammarEngine.render(level);
        } else {
            // Go straight to the quiz (บทเรียนทดสอบ) without passing through flashcards
            this.startQuiz();
        }
    },

    switchView(viewId) {
        if (viewId === 'progress') {
            alert('ฟีเจอร์นี้กำลังอยู่ในช่วงพัฒนาครับ 😊');
            return;
        }

        document.querySelectorAll('.view-section').forEach(sec => {
            sec.classList.remove('active');
        });
        
        const targetView = document.getElementById(`${viewId}-view`);
        if (targetView) {
            targetView.classList.add('active');
            this.currentView = viewId;
        }

        if (viewId === 'dashboard') {
            this.updateStats();
            document.querySelectorAll('.nav-links li').forEach(n => n.classList.remove('active'));
            document.querySelector('[data-view="dashboard"]').classList.add('active');
        }

        // Render grammar lessons when entering grammar view
        if (viewId === 'grammar') {
            grammarEngine.render();
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    updateStats() {
        const trackId = this.currentCategory || 'toeic_listening';
        const trackData = categoryData[trackId];
        
        const catWords = vocabData.filter(w => w.category === trackId);
        const catTotal = catWords.length;
        const catLearned = Array.from(this.learnedWords).filter(id => {
            const word = vocabData.find(w => w.id === id);
            return word && word.category === trackId;
        }).length;
        const percent = catTotal > 0 ? (catLearned / catTotal) * 100 : 0;
        
        const continueCardTitle = document.querySelector('.continue-card h3');
        if (continueCardTitle && trackData) {
            continueCardTitle.textContent = `หมวด ${trackData.name}`;
        }
        
        const continueCardOnClick = document.querySelector('.continue-card');
        if (continueCardOnClick) {
            continueCardOnClick.onclick = () => this.showLevels(trackId);
        }
        
        const continueProgress = document.getElementById('continue-progress');
        if (continueProgress) {
            continueProgress.style.width = `${percent}%`;
        }
        
        const continueDesc = document.querySelector('.continue-card p');
        if (continueDesc) {
            continueDesc.textContent = `เรียนไปแล้ว ${catLearned}/${catTotal} คำศัพท์`;
        }
        
        const statValue = document.querySelector('.stats-card .stat-value');
        if (statValue) {
            statValue.textContent = this.learnedWords.size;
        }
        
        const dailyGoal = 20;
        const learnedToday = Math.min(this.learnedWords.size, dailyGoal);
        const goalPercent = (learnedToday / dailyGoal) * 100;
        const circle = document.querySelector('.progress-circle');
        if (circle) {
            circle.style.setProperty('--progress', goalPercent);
            const progressText = circle.querySelector('.progress-text');
            if (progressText) {
                progressText.innerHTML = `${learnedToday}/${dailyGoal}<br><small>คำ</small>`;
            }
            
            const desc = document.querySelector('.progress-desc');
            if (desc) {
                desc.textContent = learnedToday >= dailyGoal ? 'เป้าหมายสำเร็จแล้ว ยอดเยี่ยมมาก!' : `เหลืออีก ${dailyGoal - learnedToday} คำสำหรับวันนี้!`;
            }
        }
    },

    loadFlashcard(autoPlay = true) {
        if (!this.vocabList || this.vocabList.length === 0) return;
        
        const card = document.getElementById('flashcard');
        const wordData = this.vocabList[this.currentCardIndex];
        
        if (this.isFlipped) {
            card.classList.remove('flipped');
            this.isFlipped = false;
        }

        setTimeout(() => {
            document.querySelector('.fc-type').textContent = wordData.type;
            document.getElementById('fc-word-en').textContent = wordData.en;
            document.getElementById('fc-word-th').textContent = wordData.th;
            
            const phoneticEl = document.getElementById('fc-phonetic');
            if (phoneticEl) phoneticEl.textContent = `[ ${wordData.phonetic} ]`;
            
            document.getElementById('fc-example').textContent = wordData.example_en;
            document.getElementById('fc-example-th').textContent = wordData.example_th;
            
            document.getElementById('fc-current').textContent = this.currentCardIndex + 1;
            document.getElementById('fc-total').textContent = this.vocabList.length;
            
            // Auto play sound when card loads
            if (autoPlay && this.currentView === 'flashcards') {
                this.playSound();
            }
        }, 150);
    },

    flipCard() {
        const card = document.getElementById('flashcard');
        this.isFlipped = !this.isFlipped;
        if (this.isFlipped) {
            card.classList.add('flipped');
        } else {
            card.classList.remove('flipped');
        }
    },

    nextCard() {
        if (this.currentCardIndex < this.vocabList.length - 1) {
            this.currentCardIndex++;
            this.loadFlashcard();
        } else {
            document.getElementById('modal-title').textContent = 'ยินดีด้วย!';
            document.getElementById('modal-primary-btn').style.display = 'inline-flex';
            document.getElementById('modal-primary-btn').textContent = 'ทำด่านทดสอบ ⚔️';
            document.getElementById('modal-primary-btn').onclick = () => this.startQuizFromModal();
            this.showCompletionModal('คุณจำคำศัพท์ครบด่านนี้แล้ว!\nพร้อมลุยด่านทดสอบเพื่อปลดล็อกด่านต่อไปหรือยัง?');
            this.currentCardIndex = 0;
        }
    },

    prevCard() {
        if (this.currentCardIndex > 0) {
            this.currentCardIndex--;
            this.loadFlashcard();
        }
    },

    playSound(event = null) {
        if (event) {
            event.stopPropagation();
        }
        const word = this.vocabList[this.currentCardIndex].en;
        
        if ('speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(word);
            utterance.lang = 'en-US';
            utterance.rate = 0.85;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;
            
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.name.includes('Female'));
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            if (event) alert('เบราว์เซอร์ของคุณไม่รองรับระบบเสียงอ่านครับ');
        }
    },

    playFeedbackSound(isCorrect) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (!AudioContext) return;
        
        try {
            const ctx = new AudioContext();
            const osc = ctx.createOscillator();
            const gainNode = ctx.createGain();
            
            osc.connect(gainNode);
            gainNode.connect(ctx.destination);
            
            if (isCorrect) {
                // Bright 'Ding-ding' chord
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
                osc.frequency.setValueAtTime(1046.50, ctx.currentTime + 0.1); // C6
                gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
                gainNode.gain.setValueAtTime(0.5, ctx.currentTime + 0.1);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.4);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.4);
            } else {
                // Low buzz
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(150, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.3);
                gainNode.gain.setValueAtTime(0.5, ctx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.3);
                osc.start(ctx.currentTime);
                osc.stop(ctx.currentTime + 0.3);
            }
        } catch(e) {
            console.error("Audio error", e);
        }
    },

    markWord(status) {
        if (status === 'easy') {
            this.learnedWords.add(this.vocabList[this.currentCardIndex].id);
        } else if (status === 'hard') {
            this.vocabList.push(this.vocabList[this.currentCardIndex]);
        }
        
        this.saveProgress();
        
        setTimeout(() => {
            this.nextCard();
        }, 300);
    },

    showCompletionModal(message) {
        const msgEl = document.getElementById('modal-message');
        if (msgEl) msgEl.textContent = message;
        
        const modal = document.getElementById('completion-modal');
        if (modal) modal.classList.add('active');
    },

    closeModal() {
        const modal = document.getElementById('completion-modal');
        if (modal) modal.classList.remove('active');
    },

    // --- Speech Recognition Logic ---
    startSpeaking() {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        const btn = document.getElementById('btn-speak');
        const feedback = document.getElementById('speaking-feedback');
        const timerEl = document.getElementById('speaking-timer');

        // ตรวจสอบว่าเบราว์เซอร์รองรับหรือไม่
        if (!SpeechRecognition) {
            // iOS Safari และ Firefox ไม่รองรับ → ใช้วิธีเฉลยเอง
            if (feedback) {
                feedback.innerHTML = `
                    <div style="background:#fef3c7;border:1px solid #f59e0b;border-radius:12px;padding:14px;font-size:0.9rem;color:#92400e;line-height:1.6;">
                        📵 เบราว์เซอร์ของคุณ<strong>ไม่รองรับการพูด</strong><br>
                        กรุณาใช้ <strong>Chrome หรือ Edge</strong><br>
                        หรือกด <strong>"เฉลยคำตอบ"</strong> เพื่อดูคำตอบ
                    </div>`;
            }
            if (timerEl) timerEl.textContent = '';
            if (this._speakingTimer) {
                clearInterval(this._speakingTimer);
                this._speakingTimer = null;
            }
            return;
        }

        // หยุด timer ทันทีที่ผู้เรียนเริ่มพูด
        if (this._speakingTimer) {
            clearInterval(this._speakingTimer);
            this._speakingTimer = null;
        }

        if (timerEl) {
            timerEl.textContent = '🎤 กำลังฟัง...';
            timerEl.style.color = 'var(--accent-blue)';
        }

        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 3;

        btn.style.transform = 'scale(1.1)';
        btn.style.backgroundColor = 'var(--accent-red)';
        if (feedback) {
            feedback.textContent = '🎤 กำลังฟัง... พูดได้เลยครับ';
            feedback.style.color = 'var(--accent-blue)';
        }

        // *** สำคัญมาก: บังคับให้ Android/PWA แสดง popup ขอสิทธิ์ไมโครโฟนก่อน ***
        // SpeechRecognition.start() อย่างเดียวไม่ trigger dialog บน Android PWA
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ audio: true })
                .then((stream) => {
                    // ได้รับ Permission แล้ว → ปิด stream ทิ้ง แล้วเริ่ม recognition
                    stream.getTracks().forEach(track => track.stop());
                    try {
                        recognition.start();
                    } catch(e) {
                        btn.style.transform = 'scale(1)';
                        btn.style.backgroundColor = 'var(--primary)';
                        if (feedback) feedback.textContent = 'กดปุ่มไมโครโฟนเพื่อเริ่มพูด';
                    }
                })
                .catch((err) => {
                    // ผู้ใช้กด "ปฏิเสธ" Permission
                    btn.style.transform = 'scale(1)';
                    btn.style.backgroundColor = 'var(--primary)';
                    if (timerEl) timerEl.textContent = '';
                    if (this._speakingTimer) {
                        clearInterval(this._speakingTimer);
                        this._speakingTimer = null;
                    }
                    if (feedback) {
                        feedback.innerHTML = `
                            <div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:12px;padding:14px;font-size:0.9rem;color:#991b1b;line-height:1.8;">
                                🚫 <strong>ไม่ได้รับอนุญาตให้ใช้ไมโครโฟน</strong><br>
                                กรุณาทำตามขั้นตอนนี้:<br>
                                1. กดปุ่ม <strong>⋮</strong> มุมขวาบนของ Chrome<br>
                                2. เลือก <strong>การตั้งค่า → สิทธิ์ของเว็บไซต์</strong><br>
                                3. เปิด <strong>ไมโครโฟน</strong> ให้เว็บนี้<br>
                                หรือกด <strong>"เฉลยคำตอบ"</strong> เพื่อข้ามข้อนี้
                            </div>`;
                    }
                });
        } else {
            // เบราว์เซอร์เก่า → ลอง start ตรงเลย
            try {
                recognition.start();
            } catch(e) {
                btn.style.transform = 'scale(1)';
                btn.style.backgroundColor = 'var(--primary)';
                if (feedback) feedback.textContent = 'กดปุ่มไมโครโฟนเพื่อเริ่มพูด';
            }
        }

        recognition.onresult = (event) => {
            // ลอง match จากทุก alternatives
            let speechResult = '';
            for (let i = 0; i < event.results[0].length; i++) {
                speechResult = event.results[0][i].transcript.toLowerCase().trim();
                const questionData = this.quizList[this.currentQuizIndex];
                const targetWord = questionData.answerText.toLowerCase().trim();
                if (speechResult.includes(targetWord) || targetWord.includes(speechResult)) break;
            }

            const questionData = this.quizList[this.currentQuizIndex];
            const targetWord = questionData.answerText.toLowerCase().trim();
            const quizCard = document.querySelector('.quiz-card');
            if (quizCard) {
                quizCard.classList.remove('pop-effect', 'shake-effect');
                void quizCard.offsetWidth;
            }

            if (speechResult.includes(targetWord) || targetWord.includes(speechResult)) {
                if (feedback) {
                    feedback.textContent = `✅ ยอดเยี่ยม! ได้ยิน: "${event.results[0][0].transcript}"`;
                    feedback.style.color = 'var(--accent-green)';
                }
                btn.style.backgroundColor = 'var(--accent-green)';
                this.quizScore++;
                if (quizCard) quizCard.classList.add('pop-effect');
                this.playFeedbackSound(true);
                setTimeout(() => { this.nextQuizQuestion(); }, 2000);
            } else {
                if (feedback) {
                    feedback.textContent = `❌ ได้ยินว่า: "${event.results[0][0].transcript}" — ลองอีกครั้ง`;
                    feedback.style.color = 'var(--accent-red)';
                }
                btn.style.backgroundColor = 'var(--primary)';
                btn.style.transform = 'scale(1)';
                if (quizCard) quizCard.classList.add('shake-effect');
                this.playFeedbackSound(false);
                // เริ่มจับเวลาใหม่ 10 วิ หลังพูดผิด
                this.startSpeakingCountdown();
            }
        };

        recognition.onspeechend = () => {
            recognition.stop();
            btn.style.transform = 'scale(1)';
            if (btn.style.backgroundColor === 'var(--accent-red)') {
                btn.style.backgroundColor = 'var(--primary)';
            }
        };

        recognition.onerror = (event) => {
            btn.style.transform = 'scale(1)';
            btn.style.backgroundColor = 'var(--primary)';
            
            const errorMessages = {
                'not-allowed': '🚫 ไม่ได้รับอนุญาตให้ใช้ไมโครโฟน\nกรุณาไปที่การตั้งค่าเบราว์เซอร์ และอนุญาตการใช้ไมโครโฟนสำหรับเว็บนี้',
                'no-speech': '🔇 ไม่ได้ยินเสียง กรุณาลองพูดใหม่',
                'audio-capture': '🎙️ ไม่พบไมโครโฟน กรุณาตรวจสอบอุปกรณ์',
                'network': '🌐 เกิดข้อผิดพลาดด้านเครือข่าย กรุณาลองใหม่',
                'aborted': null, // ผู้ใช้กดหยุดเอง ไม่ต้องแจ้ง
            };

            const msg = errorMessages[event.error];
            if (msg && feedback) {
                feedback.innerHTML = `<div style="background:#fee2e2;border:1px solid #fca5a5;border-radius:12px;padding:12px;font-size:0.9rem;color:#991b1b;line-height:1.6;">${msg}</div>`;
                feedback.style.color = 'var(--text-main)';
            }

            if (event.error !== 'aborted') {
                // เริ่มนับถอยใหม่หลัง error
                this.startSpeakingCountdown();
            }
        };
    },

    // เปิดเฉลยคำตอบเมื่อหมดเวลา
    revealSpeakingAnswer() {
        if (this._speakingTimer) {
            clearInterval(this._speakingTimer);
            this._speakingTimer = null;
        }
        const questionData = this.quizList[this.currentQuizIndex];
        const feedback = document.getElementById('speaking-feedback');
        const timerEl = document.getElementById('speaking-timer');
        const btn = document.getElementById('btn-speak');
        const revealBtn = document.getElementById('btn-reveal');

        if (timerEl) timerEl.textContent = '';
        if (btn) btn.disabled = true;
        if (revealBtn) revealBtn.style.display = 'none';

        if (feedback) {
            feedback.innerHTML = `⏰ หมดเวลา! คำตอบคือ: <strong style="color:var(--accent-orange);font-size:1.3rem;">${questionData.answerText}</strong>`;
            feedback.style.color = 'var(--text-main)';
        }

        this.playFeedbackSound(false);

        setTimeout(() => {
            if (btn) btn.disabled = false;
            this.nextQuizQuestion();
        }, 3000);
    },

    // เริ่มนับถอยหลัง
    startSpeakingCountdown() {
        if (this._speakingTimer) clearInterval(this._speakingTimer);
        let timeLeft = 10;
        const timerEl = document.getElementById('speaking-timer');
        if (timerEl) {
            timerEl.textContent = `⏱ ${timeLeft}วินาที`;
            timerEl.style.color = 'var(--accent-blue)';
        }

        this._speakingTimer = setInterval(() => {
            timeLeft--;
            if (timerEl) {
                timerEl.textContent = `⏱ ${timeLeft}วินาที`;
                timerEl.style.color = timeLeft <= 3 ? 'var(--accent-red)' : (timeLeft <= 6 ? 'var(--accent-orange)' : 'var(--accent-blue)');
            }
            if (timeLeft <= 0) {
                clearInterval(this._speakingTimer);
                this._speakingTimer = null;
                this.revealSpeakingAnswer();
            }
        }, 1000);
    },

    // --- Quiz Logic ---
    startQuizFromModal() {
        this.closeModal();
        this.startQuiz();
    },

    startQuiz() {
        if (!quizData || !quizData[this.currentCategory] || !quizData[this.currentCategory][this.currentLevel]) {
            alert('ไม่พบข้อสอบสำหรับด่านนี้');
            return;
        }
        
        this.quizList = [...quizData[this.currentCategory][this.currentLevel]];
        this.quizList.sort(() => Math.random() - 0.5); // shuffle questions

        // *** สร้าง options ใหม่แบบ dynamic ไม่ซ้ำกันตลอดทั้งชุดแบบทดสอบ ***
        this._generateDynamicOptions();
        
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        
        const lvlInfo = levelsInfo[this.currentCategory].find(l => l.level === this.currentLevel);
        document.getElementById('quiz-track-title').textContent = lvlInfo ? lvlInfo.name : 'แบบทดสอบ';
        
        this.switchView('quizzes');
        
        document.querySelectorAll('.nav-links li').forEach(n => n.classList.remove('active'));
        document.querySelector('[data-view="quizzes"]').classList.add('active');
        
        this.loadQuizQuestion();
    },

    _generateDynamicOptions() {
        // ลบ _alt และ garbage suffix ออกจากคำ
        const cleanWord = (w) => w ? w.replace(/_alt$/i, '').replace(/_\w+$/i, '').trim() : '';

        // รวบรวม correct answer ของทุกข้อในบทเรียนนี้ก่อน
        const getCorrect = (q) => {
            let raw = '';
            if (q.answerText) raw = q.answerText;
            else if (q.audioText) raw = q.audioText;
            else if (q.options && q.answer !== undefined) raw = q.options[q.answer];
            return cleanWord(raw) || null;
        };

        // สร้าง wordPool จากคำตอบที่ถูกของทุก level ในหมวดนี้
        let wordPool = [];
        const categoryQuizData = quizData[this.currentCategory];
        if (categoryQuizData) {
            Object.values(categoryQuizData).forEach(levelArr => {
                levelArr.forEach(q => {
                    const c = getCorrect(q);
                    if (c && !wordPool.includes(c)) wordPool.push(c);
                });
            });
        }
        // ถ้า pool น้อยกว่า 10 คำ เพิ่มจาก vocabData
        if (wordPool.length < 10) {
            vocabData.forEach(v => {
                // ใช้ field 'en' (vocabData ใช้ 'en' ไม่ใช่ 'english')
                // กรอง: ห้ามมี _alt, ห้ามว่าง, ห้ามซ้ำ
                const word = v.en || v.english || '';
                if (word && !word.includes('_') && !wordPool.includes(word)) {
                    wordPool.push(word);
                }
            });
        }

        // track ตัวเลือกผิดที่ใช้ไปแล้ว (ห้ามซ้ำข้ามข้อ)
        const usedWrongAnswers = new Set();

        this.quizList.forEach(q => {
            if (q.type === 'speaking') return;

            const correct = getCorrect(q);
            if (!correct) return;

            // หาตัวเลือกผิดที่ยังไม่เคยใช้
            let available = wordPool.filter(w => w !== correct && !usedWrongAnswers.has(w));

            // ถ้าของที่ไม่เคยใช้หมดแล้ว → ล้าง set แล้วสุ่มใหม่ทั้งหมด
            if (available.length < 3) {
                usedWrongAnswers.clear();
                available = wordPool.filter(w => w !== correct);
            }

            // สุ่ม 3 คำผิด
            available.sort(() => Math.random() - 0.5);
            const wrongAnswers = available.slice(0, 3);
            wrongAnswers.forEach(w => usedWrongAnswers.add(w));

            // สุ่มตำแหน่งคำตอบที่ถูก
            const correctPos = Math.floor(Math.random() * 4);
            const newOptions = [...wrongAnswers];
            newOptions.splice(correctPos, 0, correct);

            q.options = newOptions;
            q.answer = correctPos;
            // เก็บ answerText ไว้ให้ฟีเจอร์อื่นใช้ด้วย
            q.answerText = correct;
        });
    },

    loadQuizQuestion() {
        const questionData = this.quizList[this.currentQuizIndex];
        
        const qText = document.getElementById('quiz-question');
        const audioContainer = document.getElementById('quiz-audio-container');
        const optionsContainer = document.getElementById('quiz-options');
        const speakingContainer = document.getElementById('quiz-speaking-container');
        
        if (questionData.type === 'listening') {
            qText.style.display = 'none';
            audioContainer.style.display = 'block';
            speakingContainer.style.display = 'none';
            optionsContainer.style.display = 'flex';
        } else if (questionData.type === 'speaking') {
            qText.style.display = 'block';
            qText.textContent = questionData.question;
            audioContainer.style.display = 'none';
            optionsContainer.style.display = 'none';
            speakingContainer.style.display = 'block';
            
            // Reset speaking UI
            const btn = document.getElementById('btn-speak');
            const feedback = document.getElementById('speaking-feedback');
            const timerEl = document.getElementById('speaking-timer');
            const revealBtn = document.getElementById('btn-reveal');
            if (btn) {
                btn.style.transform = 'scale(1)';
                btn.style.backgroundColor = 'var(--primary)';
                btn.disabled = false;
            }
            if (feedback) {
                feedback.textContent = 'กดปุ่มไมโครโฟนเพื่อเริ่มพูด';
                feedback.style.color = 'var(--text-main)';
            }
            if (timerEl) timerEl.textContent = '';
            if (revealBtn) revealBtn.style.display = 'inline-flex';

            // เริ่มนับถอย 10 วินาที
            this.startSpeakingCountdown();
        } else {
            qText.style.display = 'block';
            qText.textContent = questionData.question;
            audioContainer.style.display = 'none';
            speakingContainer.style.display = 'none';
            optionsContainer.style.display = 'flex';
        }
        
        optionsContainer.innerHTML = '';
        
        if (questionData.type !== 'speaking') {
            questionData.options.forEach((opt, index) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option';
                btn.textContent = `${String.fromCharCode(65 + index)}. ${opt}`;
                btn.onclick = () => this.selectQuizAnswer(index, btn);
                optionsContainer.appendChild(btn);
            });
        }
        
        document.getElementById('quiz-current').textContent = this.currentQuizIndex + 1;
        document.getElementById('quiz-total').textContent = this.quizList.length;
    },

    selectQuizAnswer(selectedIndex, btnElement) {
        const optionsContainer = document.getElementById('quiz-options');
        const allBtns = optionsContainer.querySelectorAll('.quiz-option');
        allBtns.forEach(b => b.style.pointerEvents = 'none');
        
        const questionData = this.quizList[this.currentQuizIndex];
        const quizCard = document.querySelector('.quiz-card');
        quizCard.classList.remove('pop-effect', 'shake-effect');
        void quizCard.offsetWidth; // trigger reflow
        
        if (selectedIndex === questionData.answer) {
            btnElement.classList.add('correct');
            quizCard.classList.add('pop-effect');
            this.playFeedbackSound(true);
            this.quizScore++;
        } else {
            btnElement.classList.add('wrong');
            quizCard.classList.add('shake-effect');
            this.playFeedbackSound(false);
            allBtns[questionData.answer].classList.add('correct');
        }
        
        setTimeout(() => {
            this.nextQuizQuestion();
        }, 1500);
    },

    playQuizAudio() {
        const questionData = this.quizList[this.currentQuizIndex];
        if (questionData && questionData.audioText && 'speechSynthesis' in window) {
            const utterance = new SpeechSynthesisUtterance(questionData.audioText);
            utterance.lang = 'en-US';
            utterance.rate = 0.85;
            utterance.pitch = 1.1;
            utterance.volume = 1.0;
            
            const voices = window.speechSynthesis.getVoices();
            const preferredVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.name.includes('Female'));
            if (preferredVoice) {
                utterance.voice = preferredVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        } else {
            alert('เบราว์เซอร์ของคุณไม่รองรับระบบเสียงอ่านครับ');
        }
    },

    nextQuizQuestion() {
        if (this.currentQuizIndex < this.quizList.length - 1) {
            this.currentQuizIndex++;
            this.loadQuizQuestion();
        } else {
            // End of Quiz
            const isPassed = this.quizScore === this.quizList.length; // 100% required
            
            const primaryBtn = document.getElementById('modal-primary-btn');
            primaryBtn.style.display = 'inline-flex';
            
            if (isPassed) {
                document.getElementById('modal-title').textContent = 'สอบผ่าน! 🏆';
                document.getElementById('modal-message').textContent = `ยอดเยี่ยมมาก! คุณทำคะแนนได้ 100% เต็ม\nปลดล็อกด่านต่อไปเรียบร้อยแล้ว!`;
                primaryBtn.textContent = 'ไปเลือกด่านต่อไป';
                primaryBtn.onclick = () => {
                    this.closeModal();
                    this.showLevels(this.currentCategory);
                };
                
                // Mark all words in this level as learned since they passed the quiz
                if (vocabData) {
                    const allWordsInCategory = vocabData.filter(w => w.category === this.currentCategory && w.level === this.currentLevel);
                    allWordsInCategory.forEach(w => this.learnedWords.add(w.id));
                    this.saveProgress();
                }
                
                // Unlock next level if this is the highest unlocked
                if (this.currentLevel === this.unlockedLevels[this.currentCategory]) {
                    this.unlockedLevels[this.currentCategory]++;
                }
                this.saveProgress();
            } else {
                document.getElementById('modal-title').textContent = 'สอบไม่ผ่าน 😢';
                document.getElementById('modal-message').textContent = `คุณทำได้ ${this.quizScore} / ${this.quizList.length} คะแนน\nต้องทำคะแนนให้ได้ 100% เพื่อผ่านด่านครับ`;
                primaryBtn.textContent = 'สอบใหม่อีกครั้ง';
                primaryBtn.onclick = () => this.startQuizFromModal();
            }
            
            const modal = document.getElementById('completion-modal');
            if (modal) modal.classList.add('active');
        }
    }
};

// ========================
// GRAMMAR DATA: Verb to Be
// ========================
const grammarLessons = [
    {
        id: 'verb-to-be-intro',
        title: 'Verb to Be คืออะไร?',
        icon: '📖',
        color: '#6366f1',
        colorLight: 'rgba(99,102,241,0.1)',
        theory: `<strong>Verb to Be</strong> คือ กริยาช่วยพื้นฐานที่สุดในภาษาอังกฤษ<br>
        มี 3 รูปแบบ ได้แก่ <span class="gram-tag am">am</span> <span class="gram-tag is">is</span> <span class="gram-tag are">are</span>`,
        rules: [
            { subject: 'I', verb: 'am', example: 'I am a student.', th: 'ฉันเป็นนักเรียน' },
            { subject: 'He / She / It', verb: 'is', example: 'She is happy.', th: 'เธอมีความสุข' },
            { subject: 'You / We / They', verb: 'are', example: 'They are friends.', th: 'พวกเขาเป็นเพื่อนกัน' },
        ],
        exercises: [
            { q: 'I ___ a teacher.', options: ['am', 'is', 'are'], answer: 0 },
            { q: 'She ___ beautiful.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'We ___ happy today.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'He ___ my brother.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'You ___ my friend.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'It ___ a cute dog.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'They ___ at the mall.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'I ___ very hungry.', options: ['am', 'is', 'are'], answer: 0 },
            { q: 'The car ___ fast.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'My friends ___ nice.', options: ['am', 'is', 'are'], answer: 2 },
        ]
    },
    {
        id: 'verb-to-be-negative',
        title: 'ประโยคปฏิเสธ (Negative)',
        icon: '🚫',
        color: '#ef4444',
        colorLight: 'rgba(239,68,68,0.1)',
        theory: `เพิ่ม <strong>not</strong> หลัง Verb to Be ทันที<br>
        <span class="gram-tag am">am not</span> &nbsp; <span class="gram-tag is">is not = isn't</span> &nbsp; <span class="gram-tag are">are not = aren't</span>`,
        rules: [
            { subject: 'I', verb: 'am not', example: 'I am not tired.', th: 'ฉันไม่เหนื่อย' },
            { subject: 'He / She / It', verb: "isn't", example: "He isn't here.", th: 'เขาไม่ได้อยู่ที่นี่' },
            { subject: 'You / We / They', verb: "aren't", example: "They aren't ready.", th: 'พวกเขายังไม่พร้อม' },
        ],
        exercises: [
            { q: 'I ___ angry.', options: ['am not', "isn't", "aren't"], answer: 0 },
            { q: 'It ___ cold today.', options: ['am not', "isn't", "aren't"], answer: 1 },
            { q: 'They ___ at school.', options: ['am not', "isn't", "aren't"], answer: 2 },
            { q: 'She ___ my sister.', options: ['am not', "isn't", "aren't"], answer: 1 },
            { q: 'We ___ late.', options: ['am not', "isn't", "aren't"], answer: 2 },
            { q: 'He ___ a doctor.', options: ['am not', "isn't", "aren't"], answer: 1 },
            { q: 'You ___ wrong.', options: ['am not', "isn't", "aren't"], answer: 2 },
            { q: 'I ___ tired yet.', options: ['am not', "isn't", "aren't"], answer: 0 },
            { q: 'The book ___ interesting.', options: ['am not', "isn't", "aren't"], answer: 1 },
            { q: 'The dogs ___ hungry.', options: ['am not', "isn't", "aren't"], answer: 2 },
        ]
    },
    {
        id: 'verb-to-be-question',
        title: 'ประโยคคำถาม (Question)',
        icon: '❓',
        color: '#f59e0b',
        colorLight: 'rgba(245,158,11,0.1)',
        theory: `สลับตำแหน่ง <strong>Verb to Be</strong> มาไว้หน้าประโยค แล้วใส่ <strong>?</strong><br>
        <em>She is happy. → Is she happy?</em>`,
        rules: [
            { subject: 'Am I ...?', verb: '', example: 'Am I late?', th: 'ฉันสายไหม?' },
            { subject: 'Is he/she/it ...?', verb: '', example: 'Is he your teacher?', th: 'เขาเป็นครูของคุณไหม?' },
            { subject: 'Are you/we/they ...?', verb: '', example: 'Are you okay?', th: 'คุณโอเคไหม?' },
        ],
        exercises: [
            { q: '___ she your friend?', options: ['Am', 'Is', 'Are'], answer: 1 },
            { q: '___ they at home?', options: ['Am', 'Is', 'Are'], answer: 2 },
            { q: '___ I right?', options: ['Am', 'Is', 'Are'], answer: 0 },
            { q: '___ it raining?', options: ['Am', 'Is', 'Are'], answer: 1 },
            { q: '___ you ready?', options: ['Am', 'Is', 'Are'], answer: 2 },
            { q: '___ he a good player?', options: ['Am', 'Is', 'Are'], answer: 1 },
            { q: '___ we going now?', options: ['Am', 'Is', 'Are'], answer: 2 },
            { q: '___ I the winner?', options: ['Am', 'Is', 'Are'], answer: 0 },
            { q: '___ the food spicy?', options: ['Am', 'Is', 'Are'], answer: 1 },
            { q: '___ the keys on the table?', options: ['Am', 'Is', 'Are'], answer: 2 },
        ]
    },
    {
        id: 'there-is-are',
        title: 'There is / There are',
        icon: '📍',
        color: '#22c55e',
        colorLight: 'rgba(34,197,94,0.1)',
        theory: `ใช้บอกว่า <strong>"มี..."</strong> อยู่ที่ไหนสักที่<br>
        <span class="gram-tag is">There is</span> → สิ่งของ <strong>1 ชิ้น</strong> (เอกพจน์)<br>
        <span class="gram-tag are">There are</span> → สิ่งของ <strong>หลายชิ้น</strong> (พหูพจน์)`,
        rules: [
            { subject: 'There is', verb: '(เอกพจน์)', example: 'There is a cat on the sofa.', th: 'มีแมวตัวหนึ่งบนโซฟา' },
            { subject: 'There are', verb: '(พหูพจน์)', example: 'There are three books on the table.', th: 'มีหนังสือสามเล่มบนโต๊ะ' },
            { subject: 'Is there ...?', verb: '(คำถาม)', example: 'Is there a hospital near here?', th: 'มีโรงพยาบาลใกล้ๆ ที่นี่ไหม?' },
            { subject: 'Are there ...?', verb: '(คำถาม)', example: 'Are there any seats left?', th: 'ยังมีที่นั่งเหลือไหม?' },
        ],
        exercises: [
            { q: '___ a dog in the garden.', options: ['There is', 'There are', 'Is there'], answer: 0 },
            { q: '___ many students in the class.', options: ['There is', 'There are', 'Are there'], answer: 1 },
            { q: '___ a bank near here?', options: ['Is there', 'There is', 'There are'], answer: 0 },
            { q: '___ any problems?', options: ['There are', 'Are there', 'Is there'], answer: 1 },
            { q: '___ an apple on the table.', options: ['There are', 'Are there', 'There is'], answer: 2 },
            { q: '___ three cars outside.', options: ['There is', 'There are', 'Is there'], answer: 1 },
            { q: '___ someone at the door.', options: ['There is', 'There are', 'Are there'], answer: 0 },
            { q: '___ any sugar in the coffee?', options: ['Is there', 'Are there', 'There is'], answer: 0 },
            { q: '___ enough chairs for everyone?', options: ['Is there', 'Are there', 'There are'], answer: 1 },
            { q: '___ no time left.', options: ['There is', 'There are', 'Are there'], answer: 0 },
        ]
    },
    {
        id: 'verb-to-be-past',
        title: 'อดีตกาล: was / were',
        icon: '⏰',
        color: '#8b5cf6',
        colorLight: 'rgba(139,92,246,0.1)',
        theory: `<strong>Verb to Be</strong> ในอดีต ใช้ <span class="gram-tag am">was</span> และ <span class="gram-tag are">were</span><br>
        <em>(ใช้เมื่อพูดถึงเรื่องที่เกิดขึ้นแล้วในอดีต)</em>`,
        rules: [
            { subject: 'I / He / She / It', verb: 'was', example: 'I was at school yesterday.', th: 'ฉันอยู่ที่โรงเรียนเมื่อวาน' },
            { subject: 'You / We / They', verb: 'were', example: 'They were happy last year.', th: 'พวกเขามีความสุขเมื่อปีที่แล้ว' },
        ],
        exercises: [
            { q: 'She ___ sick last week.', options: ['was', 'were', 'is'], answer: 0 },
            { q: 'We ___ at the park yesterday.', options: ['was', 'were', 'are'], answer: 1 },
            { q: 'He ___ very young then.', options: ['was', 'were', 'is'], answer: 0 },
            { q: 'They ___ excited about the trip.', options: ['was', 'were', 'are'], answer: 1 },
            { q: 'I ___ tired after the game.', options: ['was', 'were', 'am'], answer: 0 },
            { q: 'It ___ a beautiful day yesterday.', options: ['was', 'were', 'are'], answer: 0 },
            { q: 'You ___ late for the meeting.', options: ['was', 'were', 'is'], answer: 1 },
            { q: 'The movie ___ very boring.', options: ['was', 'were', 'am'], answer: 0 },
            { q: 'My parents ___ angry with me.', options: ['was', 'were', 'is'], answer: 1 },
            { q: 'I ___ happy to see him.', options: ['was', 'were', 'are'], answer: 0 },
        ]
    },
    {
        id: 'verb-to-be-past-neg',
        title: 'อดีตกาลปฏิเสธ (Past Negative)',
        icon: '🙅',
        color: '#f43f5e',
        colorLight: 'rgba(244,63,94,0.1)',
        theory: `เติม <strong>not</strong> หลัง was / were เพื่อทำเป็นปฏิเสธในอดีต<br>
        <span class="gram-tag am">was not = wasn't</span> &nbsp; <span class="gram-tag are">were not = weren't</span>`,
        rules: [
            { subject: 'I / He / She / It', verb: "wasn't", example: "I wasn't late.", th: 'ฉันไม่ได้มาสาย' },
            { subject: 'You / We / They', verb: "weren't", example: "They weren't here.", th: 'พวกเขาไม่ได้อยู่ที่นี่' },
        ],
        exercises: [
            { q: 'I ___ at home yesterday.', options: ["wasn't", "weren't", "isn't"], answer: 0 },
            { q: 'They ___ ready for the test.', options: ["wasn't", "weren't", "aren't"], answer: 1 },
            { q: 'It ___ a good movie.', options: ["wasn't", "weren't", "isn't"], answer: 0 },
            { q: 'We ___ happy with the result.', options: ["wasn't", "weren't", "aren't"], answer: 1 },
            { q: 'She ___ at the party.', options: ["wasn't", "weren't", "isn't"], answer: 0 },
            { q: 'The stores ___ open.', options: ["wasn't", "weren't", "aren't"], answer: 1 },
            { q: 'You ___ very polite.', options: ["wasn't", "weren't", "isn't"], answer: 1 },
            { q: 'My dog ___ outside.', options: ["wasn't", "weren't", "aren't"], answer: 0 },
            { q: 'The questions ___ easy.', options: ["wasn't", "weren't", "aren't"], answer: 1 },
            { q: 'He ___ an actor before.', options: ["wasn't", "weren't", "isn't"], answer: 0 },
        ]
    },
    {
        id: 'verb-to-be-past-question',
        title: 'อดีตกาลคำถาม (Past Question)',
        icon: '🤔',
        color: '#eab308',
        colorLight: 'rgba(234,179,8,0.1)',
        theory: `เอา <strong>Was</strong> หรือ <strong>Were</strong> ขึ้นต้นประโยคเพื่อตั้งคำถามในอดีต<br>
        <em>They were tired. → Were they tired?</em>`,
        rules: [
            { subject: 'Was I / he / she / it...?', verb: '', example: 'Was she sick?', th: 'เธอป่วยเหรอ?' },
            { subject: 'Were you / we / they...?', verb: '', example: 'Were you busy?', th: 'คุณยุ่งอยู่เหรอ?' },
        ],
        exercises: [
            { q: '___ he your classmate?', options: ['Was', 'Were', 'Is'], answer: 0 },
            { q: '___ they at the beach?', options: ['Was', 'Were', 'Are'], answer: 1 },
            { q: '___ I loud?', options: ['Was', 'Were', 'Am'], answer: 0 },
            { q: '___ we lost?', options: ['Was', 'Were', 'Are'], answer: 1 },
            { q: '___ it a fun game?', options: ['Was', 'Were', 'Is'], answer: 0 },
            { q: '___ the windows closed?', options: ['Was', 'Were', 'Are'], answer: 1 },
            { q: '___ you surprised?', options: ['Was', 'Were', 'Are'], answer: 1 },
            { q: '___ the teacher angry?', options: ['Was', 'Were', 'Is'], answer: 0 },
            { q: '___ the cats hungry?', options: ['Was', 'Were', 'Are'], answer: 1 },
            { q: '___ she a good singer?', options: ['Was', 'Were', 'Is'], answer: 0 },
        ]
    },
    {
        id: 'there-was-were',
        title: 'เคยมี... (There was/were)',
        icon: '🕰️',
        color: '#10b981',
        colorLight: 'rgba(16,185,129,0.1)',
        theory: `ใช้บอกว่า <strong>"เคยมี..."</strong> ในอดีต (ตอนนี้ไม่มีแล้ว)<br>
        <span class="gram-tag is">There was</span> → สิ่งของ 1 ชิ้น<br>
        <span class="gram-tag are">There were</span> → สิ่งของหลายชิ้น`,
        rules: [
            { subject: 'There was', verb: '(เอกพจน์)', example: 'There was a big tree here.', th: 'เคยมีต้นไม้ใหญ่อยู่ตรงนี้' },
            { subject: 'There were', verb: '(พหูพจน์)', example: 'There were many people.', th: 'เคยมีผู้คนมากมาย' },
        ],
        exercises: [
            { q: '___ a problem yesterday.', options: ['There was', 'There were', 'There is'], answer: 0 },
            { q: '___ five books on the desk.', options: ['There was', 'There were', 'There are'], answer: 1 },
            { q: '___ any calls for me?', options: ['Was there', 'Were there', 'Is there'], answer: 1 }, // Were there any calls
            { q: '___ only one piece of cake left.', options: ['There was', 'There were', 'There is'], answer: 0 },
            { q: '___ no computers in 1900.', options: ['There was', 'There were', 'There are'], answer: 1 },
            { q: '___ a loud noise last night.', options: ['There was', 'There were', 'There is'], answer: 0 },
            { q: '___ a lot of mistakes in the test.', options: ['There was', 'There were', 'There are'], answer: 1 },
            { q: '___ time to finish?', options: ['Was there', 'Were there', 'Is there'], answer: 0 }, // Was there time
            { q: '___ many choices.', options: ['There wasn\'t', 'There weren\'t', 'There isn\'t'], answer: 1 }, // There weren't many choices
            { q: '___ an accident on the road.', options: ['There was', 'There were', 'There is'], answer: 0 },
        ]
    },
    {
        id: 'future-will-be',
        title: 'อนาคตกาล: will be',
        icon: '🚀',
        color: '#0ea5e9',
        colorLight: 'rgba(14,165,233,0.1)',
        theory: `เมื่อพูดถึงอนาคต (จะเป็น, จะอยู่) ใช้ <strong>will be</strong> ได้กับทุกประธานเลย!<br>
        <em>I will be... / You will be... / It will be...</em>`,
        rules: [
            { subject: 'ทุกประธาน', verb: 'will be', example: 'I will be there.', th: 'ฉันจะไปอยู่ที่นั่น' },
            { subject: 'ปฏิเสธ', verb: 'won\'t be', example: 'It won\'t be easy.', th: 'มันจะไม่ง่ายหรอก' },
        ],
        exercises: [
            { q: 'He ___ a doctor soon.', options: ['will be', 'is', 'was'], answer: 0 },
            { q: 'We ___ late if we don\'t hurry.', options: ['will be', 'are', 'were'], answer: 0 },
            { q: 'The test ___ very hard.', options: ['will be', 'is', 'was'], answer: 0 },
            { q: 'I ___ at home tomorrow.', options: ['will be', 'am', 'was'], answer: 0 },
            { q: 'They ___ happy to see you.', options: ['will be', 'are', 'were'], answer: 0 },
            { q: 'It ___ rainy next week.', options: ['will be', 'is', 'was'], answer: 0 },
            { q: 'She ___ perfectly fine.', options: ['will be', 'is', 'was'], answer: 0 },
            { q: 'I promise I ___ late.', options: ['won\'t be', 'am not', 'wasn\'t'], answer: 0 },
            { q: 'There ___ a meeting tomorrow.', options: ['will be', 'is', 'was'], answer: 0 },
            { q: '___ you be available?', options: ['Will', 'Are', 'Were'], answer: 0 },
        ]
    },
    {
        id: 'present-continuous',
        title: 'กำลังทำ (Be + V.ing)',
        icon: '🏃',
        color: '#ec4899',
        colorLight: 'rgba(236,72,153,0.1)',
        theory: `ใช้บอกว่า <strong>"กำลังทำอะไรอยู่"</strong> ตอนนี้<br>
        โครงสร้าง: <strong>Verb to Be (am/is/are) + กริยาเติม ing</strong>`,
        rules: [
            { subject: 'I', verb: 'am + V.ing', example: 'I am reading.', th: 'ฉันกำลังอ่าน' },
            { subject: 'He/She/It', verb: 'is + V.ing', example: 'She is sleeping.', th: 'เธอกำลังนอนหลับ' },
            { subject: 'You/We/They', verb: 'are + V.ing', example: 'We are eating.', th: 'พวกเรากำลังกิน' },
        ],
        exercises: [
            { q: 'I ___ studying right now.', options: ['am', 'is', 'are'], answer: 0 },
            { q: 'They ___ playing football.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'She ___ watching TV.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'We ___ listening to music.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'The dog ___ barking.', options: ['am', 'is', 'are'], answer: 1 },
            { q: 'You ___ speaking too fast.', options: ['am', 'is', 'are'], answer: 2 },
            { q: 'He ___ not working today.', options: ['am', 'is', 'are'], answer: 1 },
            { q: '___ they coming to the party?', options: ['Am', 'Is', 'Are'], answer: 2 },
            { q: 'I ___ driving to work.', options: ['am', 'is', 'are'], answer: 0 },
            { q: 'It ___ raining heavily.', options: ['am', 'is', 'are'], answer: 1 },
        ]
    }
];

// Grammar Engine
const grammarEngine = {
    scores: {}, // { lessonId: { correct, total } }

    render(level) {
        const container = document.getElementById('grammar-container');
        if (!container) return;
        
        // ถ้ามีการส่ง level เข้ามา ให้ดึงเฉพาะบทเรียนนั้น ถ้าไม่มี (เช่น re-render ตอนตอบถูก) ให้ใช้ level ปัจจุบัน
        if (level !== undefined) {
            this.currentRenderLevel = level;
        }
        
        const lessonIndex = (this.currentRenderLevel || 1) - 1;
        const lesson = grammarLessons[lessonIndex];
        
        if (!lesson) {
            container.innerHTML = '<p style="text-align:center;">ไม่พบบทเรียนนี้</p>';
            return;
        }

        const score = this.scores[lesson.id];
        const scoreBadge = score
            ? `<span class="gram-score-badge" style="background:${score.correct === score.total ? '#22c55e' : '#f59e0b'}">${score.correct}/${score.total}</span>`
            : '';
            
        container.innerHTML = `
        <div style="margin-bottom: 20px;">
            <button class="secondary-btn" onclick="app.showLevels('grammar')">
                <i class="fa-solid fa-arrow-left"></i> กลับไปหน้าเลือกระดับ
            </button>
        </div>
        <div class="gram-lesson-card" id="card-${lesson.id}" style="border-left: 4px solid ${lesson.color};">
            <div class="gram-card-header" onclick="grammarEngine.toggle('${lesson.id}')">
                <span class="gram-icon">${lesson.icon}</span>
                <div class="gram-card-title">
                    <h3>${lesson.title}</h3>
                    <small style="color:var(--text-muted)">${lesson.exercises.length} แบบฝึกหัด</small>
                </div>
                ${scoreBadge}
                <i class="fa-solid fa-chevron-up gram-chevron" id="chev-${lesson.id}"></i>
            </div>
            <div class="gram-card-body" id="body-${lesson.id}" style="display:block;">
                <!-- Theory -->
                <div class="gram-theory" style="background:${lesson.colorLight}; border-left: 3px solid ${lesson.color};">
                    ${lesson.theory}
                </div>
                <!-- Rules Table -->
                <div class="gram-rules-table">
                    <div class="gram-rules-header">
                        <span>ประธาน</span><span>Verb to Be</span><span>ตัวอย่าง</span>
                    </div>
                    ${lesson.rules.map(r => `
                        <div class="gram-rule-row">
                            <span class="gram-subject">${r.subject}</span>
                            <span class="gram-verb" style="color:${lesson.color}">${r.verb}</span>
                            <span class="gram-example">
                                <em>${r.example}</em>
                                <small>${r.th}</small>
                            </span>
                        </div>
                    `).join('')}
                </div>
                <!-- Exercises -->
                <div class="gram-exercise-section">
                    <h4>✏️ แบบฝึกหัด</h4>
                    ${lesson.exercises.map((ex, qi) => `
                        <div class="gram-ex-item" id="ex-${lesson.id}-${qi}">
                            <p class="gram-ex-question">${qi+1}. ${ex.q}</p>
                            <div class="gram-ex-options">
                                ${ex.options.map((opt, oi) => `
                                    <button class="gram-opt-btn" 
                                        id="opt-${lesson.id}-${qi}-${oi}"
                                        onclick="grammarEngine.answer('${lesson.id}', ${qi}, ${oi}, ${ex.answer})">
                                        ${opt}
                                    </button>
                                `).join('')}
                            </div>
                            <div class="gram-ex-feedback" id="fb-${lesson.id}-${qi}"></div>
                        </div>
                    `).join('')}
                    <div class="gram-ex-result" id="result-${lesson.id}" style="display:none;"></div>
                </div>
            </div>
        </div>`;
    },

    toggle(id) {
        const body = document.getElementById(`body-${id}`);
        const chev = document.getElementById(`chev-${id}`);
        if (!body) return;
        const isOpen = body.style.display !== 'none';
        body.style.display = isOpen ? 'none' : 'block';
        if (chev) chev.style.transform = isOpen ? '' : 'rotate(180deg)';
    },

    answer(lessonId, qIndex, selectedOpt, correctOpt) {
        const lesson = grammarLessons.find(l => l.id === lessonId);
        const ex = lesson.exercises[qIndex];
        const allOpts = document.querySelectorAll(`[id^="opt-${lessonId}-${qIndex}-"]`);
        const fbEl = document.getElementById(`fb-${lessonId}-${qIndex}`);

        // Disable all options for this question
        allOpts.forEach(btn => btn.disabled = true);

        if (selectedOpt === correctOpt) {
            document.getElementById(`opt-${lessonId}-${qIndex}-${selectedOpt}`).classList.add('gram-correct');
            if (fbEl) { fbEl.textContent = '✅ ถูกต้อง!'; fbEl.className = 'gram-ex-feedback gram-fb-correct'; }
        } else {
            document.getElementById(`opt-${lessonId}-${qIndex}-${selectedOpt}`).classList.add('gram-wrong');
            document.getElementById(`opt-${lessonId}-${qIndex}-${correctOpt}`).classList.add('gram-correct');
            if (fbEl) {
                fbEl.innerHTML = `❌ ผิด! คำตอบที่ถูก: <strong>${ex.options[correctOpt]}</strong>`;
                fbEl.className = 'gram-ex-feedback gram-fb-wrong';
            }
        }

        // Check if all exercises done
        const allDone = lesson.exercises.every((_, qi) => {
            const opts = document.querySelectorAll(`[id^="opt-${lessonId}-${qi}-"]`);
            return opts.length > 0 && opts[0].disabled;
        });

        if (allDone) {
            // Count correct answers
            let correct = 0;
            lesson.exercises.forEach((ex2, qi) => {
                const correctBtn = document.getElementById(`opt-${lessonId}-${qi}-${ex2.answer}`);
                if (correctBtn && correctBtn.classList.contains('gram-correct')) correct++;
            });
            this.scores[lessonId] = { correct, total: lesson.exercises.length };
            const resultEl = document.getElementById(`result-${lessonId}`);
            if (resultEl) {
                const isPerfect = correct === lesson.exercises.length;
                resultEl.style.display = 'block';
                resultEl.innerHTML = `
                    <div class="gram-final-result ${isPerfect ? 'perfect' : 'partial'}">
                        ${isPerfect ? '🏆 ยอดเยี่ยม! ได้คะแนนเต็ม!' : `📝 ทำได้ ${correct}/${lesson.exercises.length} ข้อ`}
                        ${!isPerfect ? '<br><small>ลองทำอีกครั้งเพื่อให้ได้คะแนนเต็มนะครับ!</small>' : ''}
                    </div>`;
                
                // Re-render score badge
                this.render();
                
                // Handle level completion logic
                if (isPerfect) {
                    const currentLvl = this.currentRenderLevel;
                    const maxLvl = levelsInfo['grammar'].length;
                    
                    // Unlock next level
                    if (currentLvl === app.unlockedLevels['grammar'] && currentLvl < maxLvl) {
                        app.unlockedLevels['grammar']++;
                        app.saveProgress();
                    }

                    // Show success modal
                    setTimeout(() => {
                        const modal = document.getElementById('completion-modal');
                        const modalTitle = document.getElementById('modal-title');
                        const modalMessage = document.getElementById('modal-message');
                        const primaryBtn = document.getElementById('modal-primary-btn');

                        modalTitle.textContent = 'ยอดเยี่ยม! 🎉';
                        if (currentLvl < maxLvl) {
                            modalMessage.textContent = `คุณทำคะแนนเต็ม 100%\nปลดล็อกด่านที่ ${currentLvl + 1} แล้ว!`;
                        } else {
                            modalMessage.textContent = `คุณทำคะแนนเต็ม 100%\nคุณเรียนจบทุกด่านของแกรมม่าหมวดนี้แล้ว!`;
                        }
                        
                        primaryBtn.textContent = 'ไปหน้ารวมด่าน';
                        primaryBtn.onclick = () => {
                            app.closeModal();
                            app.showLevels('grammar');
                        };

                        if (modal) modal.classList.add('active');
                    }, 800);
                }
            }
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
