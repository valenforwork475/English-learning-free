const UNLOCK_ALL_LEVELS = false; // เปิดสวิตช์นี้เป็น true เพื่อปลดล็อกทุกด่านให้เทสได้ทันที

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

    init() {
        this.loadProgress();
        this.vocabList = vocabData.filter(w => w.category === 'toeic_listening' && w.level === 1);
        this.setupNavigation();
        this.setupPWA();
        this.updateStats();
        this.loadFlashcard(false);
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

    loadProgress() {
        const savedLevels = localStorage.getItem('unlockedLevels');
        if (savedLevels) {
            try { this.unlockedLevels = JSON.parse(savedLevels); } catch (e) {}
        }
        const savedWords = localStorage.getItem('learnedWords');
        if (savedWords) {
            try { this.learnedWords = new Set(JSON.parse(savedWords)); } catch (e) {}
        }
    },

    saveProgress() {
        localStorage.setItem('unlockedLevels', JSON.stringify(this.unlockedLevels));
        localStorage.setItem('learnedWords', JSON.stringify([...this.learnedWords]));
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
        if (!SpeechRecognition) {
            alert('เบราว์เซอร์ของคุณไม่รองรับระบบสั่งงานด้วยเสียง (กรุณาใช้ Chrome หรือ Edge)');
            return;
        }

        const btn = document.getElementById('btn-speak');
        const feedback = document.getElementById('speaking-feedback');
        
        const recognition = new SpeechRecognition();
        recognition.lang = 'en-US';
        recognition.interimResults = false;
        recognition.maxAlternatives = 1;

        btn.style.transform = 'scale(1.1)';
        btn.style.backgroundColor = 'var(--accent-red)';
        feedback.textContent = 'กำลังฟัง... (พูดคำศัพท์ได้เลย)';
        feedback.style.color = 'var(--accent-blue)';

        recognition.start();

        recognition.onresult = (event) => {
            const speechResult = event.results[0][0].transcript.toLowerCase().trim();
            const questionData = this.quizList[this.currentQuizIndex];
            const targetWord = questionData.answerText.toLowerCase().trim();

            const quizCard = document.querySelector('.quiz-card');
            quizCard.classList.remove('pop-effect', 'shake-effect');
            void quizCard.offsetWidth; // trigger reflow
            
            // Simple matching check
            if (speechResult.includes(targetWord) || targetWord.includes(speechResult)) {
                feedback.textContent = `ยอดเยี่ยม! คุณพูดว่า: "${event.results[0][0].transcript}"`;
                feedback.style.color = 'var(--accent-green)';
                btn.style.backgroundColor = 'var(--accent-green)';
                this.quizScore++;
                
                quizCard.classList.add('pop-effect');
                this.playFeedbackSound(true);
                
                setTimeout(() => {
                    this.nextQuizQuestion();
                }, 2000);
            } else {
                feedback.textContent = `ระบบได้ยินเป็น: "${event.results[0][0].transcript}" ลองใหม่อีกครั้ง`;
                feedback.style.color = 'var(--accent-red)';
                btn.style.backgroundColor = 'var(--primary)';
                btn.style.transform = 'scale(1)';
                
                quizCard.classList.add('shake-effect');
                this.playFeedbackSound(false);
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
            feedback.textContent = `เกิดข้อผิดพลาด: ${event.error}`;
            feedback.style.color = 'var(--accent-red)';
        };
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
        
        this.currentQuizIndex = 0;
        this.quizScore = 0;
        
        const lvlInfo = levelsInfo[this.currentCategory].find(l => l.level === this.currentLevel);
        document.getElementById('quiz-track-title').textContent = lvlInfo ? lvlInfo.name : 'แบบทดสอบ';
        
        this.switchView('quizzes');
        
        document.querySelectorAll('.nav-links li').forEach(n => n.classList.remove('active'));
        document.querySelector('[data-view="quizzes"]').classList.add('active');
        
        this.loadQuizQuestion();
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
            if (btn) {
                btn.style.transform = 'scale(1)';
                btn.style.backgroundColor = 'var(--primary)';
            }
            if (feedback) {
                feedback.textContent = 'กดปุ่มไมโครโฟนเพื่อเริ่มพูด';
                feedback.style.color = 'var(--text-main)';
            }
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
