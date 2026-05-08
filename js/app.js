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
                try { this.unlockedLevels = user.user_metadata.unlockedLevels; } catch (e) {}
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
        
        // Go straight to the quiz (บทเรียนทดสอบ) without passing through flashcards
        this.startQuiz();
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
        // รวบรวม correct answer ของทุกข้อในบทเรียนนี้ก่อน
        const getCorrect = (q) => {
            if (q.answerText) return q.answerText;           // speaking/reading
            if (q.audioText)  return q.audioText;            // listening
            if (q.options && q.answer !== undefined) return q.options[q.answer]; // fallback
            return null;
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
                if (v.english && !wordPool.includes(v.english)) wordPool.push(v.english);
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

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});
