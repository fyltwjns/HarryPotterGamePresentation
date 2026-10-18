// Harry Potter: Game of Knowledge - Master Game Engine
const QUESTIONS_DATA = [
  {
    number: 1,
    question: 'Question 1: Which word matches the definition "referring to the ancient past, especially the period before the Middle Ages"?',
    options: {
      A: "A. Medieval",
      B: "B. Antiquity",
      C: "C. Quasi-",
      D: "D. Underbelly"
    },
    correct: "B",
    correctText: "B. Antiquity",
    rewardType: "supplies"
  },
  {
    number: 2,
    question: 'Question 2: "Many quasi-legendary katana were created by the hand of many famous Japanese swordsmiths." What does the prefix "Quasi-" mean?',
    options: {
      A: "A. Related to the Middle Ages",
      B: "B. Used to show that something is almost, but not completely, the thing described",
      C: "C. A wise saying",
      D: "D. The weakest or most unpleasant part of something"
    },
    correct: "B",
    correctText: "B. Used to show that something is almost, but not completely, the thing described",
    rewardType: "friend"
  },
  {
    number: 3,
    question: 'Question 3: Which term defines "the weakest or most unpleasant part of something"?',
    options: {
      A: "A. Underbelly",
      B: "B. Filament",
      C: "C. Almanac",
      D: "D. Caravanserai"
    },
    correct: "A",
    correctText: "A. Underbelly",
    rewardType: "letter"
  },
  {
    number: 4,
    question: 'Question 4: Which word corresponds to "related to the Middle Ages (= the period in European history from about AD 600 to AD 1500)"?',
    options: {
      A: "A. Antiquity",
      B: "B. Enamored",
      C: "C. Medieval",
      D: "D. Quasi-"
    },
    correct: "C",
    correctText: "C. Medieval",
    rewardType: "duel"
  },
  {
    number: 5,
    question: 'Question 5: "The adage \'Time is money\' teaches us to value our time." What is the exact meaning of the word "Adage"?',
    options: {
      A: "A. A thin thread or fibre of natural or artificial material",
      B: "B. A wise saying",
      C: "C. An annual publication providing various information",
      D: "D. Marked by a great liking or admiration"
    },
    correct: "B",
    correctText: "B. A wise saying",
    rewardType: "cards1"
  },
  {
    number: 6,
    question: 'Question 6: Which term describes someone or something "marked by a great liking or admiration for something"?',
    options: {
      A: "A. Enamored",
      B: "B. Filament",
      C: "C. Medieval",
      D: "D. Antiquity"
    },
    correct: "A",
    correctText: "A. Enamored",
    rewardType: "duelRival"
  },
  {
    number: 7,
    question: 'Question 7: Which publication is defined as "an annual publication that provides a variety of information, typically related to weather forecasts, astronomical data, holidays, notable events..."?',
    options: {
      A: "A. Caravanserai",
      B: "B. Adage",
      C: "C. Almanac",
      D: "D. Filament"
    },
    correct: "C",
    correctText: "C. Almanac",
    rewardType: "voldemort"
  },
  {
    number: 8,
    question: 'Question 8: "The filament inside the old light bulb burned out, leaving the room in darkness." What does the word "Filament" mean?',
    options: {
      A: "A. The weakest or most unpleasant part of something",
      B: "B. A thin thread or fibre of natural or artificial material",
      C: "C. An inn with a central courtyard in the desert",
      D: "D. A wise saying"
    },
    correct: "B",
    correctText: "B. A thin thread or fibre of natural or artificial material",
    rewardType: "classes"
  },
  {
    number: 9,
    question: 'Question 9: Which of the following words means "to suppose that something is true without having evidence to confirm it"?',
    options: {
      A: "A. Deduce",
      B: "B. Surmise",
      C: "C. Assert",
      D: "D. Verify"
    },
    correct: "B",
    correctText: "B. Surmise",
    rewardType: "owl"
  },
  {
    number: 10,
    question: 'Question 10: When you want to describe a status that is "almost, but not completely official", what prefix should you use?',
    isOpenEnded: true,
    options: {
      A: "A. Quasi-",
      B: "B. Semi-",
      C: "C. Pseudo-",
      D: "D. Sub-"
    },
    correct: "A",
    correctText: "Quasi-",
    rewardType: "cards2"
  },
  {
    number: 11,
    question: 'Question 11: Which word matches the definition "wealthy or prosperous"?',
    options: {
      A: "A. Asphalt",
      B: "B. Affluent",
      C: "C. Apocryphal",
      D: "D. Genocide"
    },
    correct: "B",
    correctText: "B. Affluent",
    rewardType: "bowls"
  },
  {
    number: 12,
    question: 'Question 12: "The workers are laying a new layer of asphalt on the playground." What does the word "Asphalt" mean?',
    options: {
      A: "A. A dark, sticky substance, often mixed with small stones or sand, that forms a strong surface when hard",
      B: "B. A place where different cultures, ideas or traditions are mixed together",
      C: "C. The crime of intentionally destroying part or all of a national or ethnic group",
      D: "D. A journey or travel of a religious nature to a sacred destination"
    },
    correct: "A",
    correctText: "A. A dark, sticky substance, often mixed with small stones or sand, that forms a strong surface when hard",
    rewardType: "hippogriff"
  },
  {
    number: 13,
    question: 'Question 13: Which term defines "of doubtful authenticity, although widely circulated as being true"?',
    options: {
      A: "A. Pilgrimage",
      B: "B. Melting pot",
      C: "C. Apocryphal",
      D: "D. Affluent"
    },
    correct: "C",
    correctText: "C. Apocryphal",
    rewardType: "snitch"
  },
  {
    number: 14,
    question: 'Question 14: Which word refers to "the crime of intentionally destroying part or all of a national, ethnic, racial, or religious group"?',
    options: {
      A: "A. Genocide",
      B: "B. Asphalt",
      C: "C. Apocryphal",
      D: "D. Melting pot"
    },
    correct: "A",
    correctText: "A. Genocide",
    rewardType: "sortingHats"
  },
  {
    number: 15,
    question: 'Question 15: Which term describes "a place where different cultures, ideas or traditions are mixed together"?',
    options: {
      A: "A. Pilgrimage",
      B: "B. Melting pot",
      C: "C. Affluent",
      D: "D. Asphalt"
    },
    correct: "B",
    correctText: "B. Melting pot",
    rewardType: "patronus"
  }
];

class HogwartsGame {
  constructor() {
    this.currentScreen = 'title';
    this.currentQuestionIdx = 0;
    this.completedQuestions = new Set();
    this.scores = { A: 0, B: 0 };
    this.activeTeam = 'A'; // 'A' or 'B'
    this.answeredCorrectly = false;

    this.initElements();
    this.bindEvents();
    this.updateScoreboard();
    this.renderQuestionGrid();
  }

  initElements() {
    this.screens = {
      title: document.getElementById('screen-title'),
      letter: document.getElementById('screen-letter'),
      rules: document.getElementById('screen-rules'),
      grid: document.getElementById('screen-grid'),
      question: document.getElementById('screen-question'),
      reward: document.getElementById('screen-reward')
    };

    this.scoreAEl = document.getElementById('score-team-a');
    this.scoreBEl = document.getElementById('score-team-b');
    this.turnBadgeEl = document.getElementById('current-turn-badge');
    this.globalScoreboard = document.getElementById('global-scoreboard');
  }

  bindEvents() {
    // Screen navigation
    document.getElementById('btn-start-game').addEventListener('click', () => {
      window.soundEngine.playWandSpell();
      this.switchScreen('letter');
    });

    document.getElementById('btn-letter-continue').addEventListener('click', () => {
      window.soundEngine.playClick();
      this.switchScreen('rules');
    });

    document.getElementById('btn-rules-start').addEventListener('click', () => {
      window.soundEngine.playWandSpell();
      this.switchScreen('grid');
    });

    // Score adjustments
    document.getElementById('btn-add-a').addEventListener('click', () => this.adjustScore('A', 1));
    document.getElementById('btn-sub-a').addEventListener('click', () => this.adjustScore('A', -1));
    document.getElementById('btn-add-b').addEventListener('click', () => this.adjustScore('B', 1));
    document.getElementById('btn-sub-b').addEventListener('click', () => this.adjustScore('B', -1));

    document.getElementById('btn-toggle-turn').addEventListener('click', () => {
      this.toggleTurn();
    });

    // Fullscreen & sound toggles
    document.getElementById('btn-fullscreen').addEventListener('click', () => this.toggleFullscreen());
    document.getElementById('btn-sound-toggle').addEventListener('click', (e) => {
      const isMuted = window.soundEngine.toggleMute();
      e.target.innerHTML = isMuted ? '🔇' : '🔊';
    });

    // Question navigation buttons
    document.getElementById('btn-q-red').addEventListener('click', () => {
      window.soundEngine.playClick();
      this.switchScreen('grid');
    });

    document.getElementById('btn-q-green').addEventListener('click', () => {
      this.openRewardScreen();
    });

    // Open-ended reveal button (for Q10)
    document.getElementById('btn-reveal-answer').addEventListener('click', () => {
      this.handleCorrectAnswer();
    });
  }

  switchScreen(screenName) {
    Object.keys(this.screens).forEach(key => {
      this.screens[key].classList.remove('active');
    });
    this.screens[screenName].classList.add('active');
    this.currentScreen = screenName;

    // Show or hide global scoreboard
    if (screenName === 'title' || screenName === 'letter' || screenName === 'rules') {
      this.globalScoreboard.classList.add('hidden');
    } else {
      this.globalScoreboard.classList.remove('hidden');
    }
  }

  toggleTurn() {
    this.activeTeam = this.activeTeam === 'A' ? 'B' : 'A';
    this.updateScoreboard();
    window.soundEngine.playClick();
  }

  adjustScore(team, amount) {
    this.scores[team] = Math.max(0, this.scores[team] + amount);
    this.updateScoreboard();
    if (amount > 0) window.soundEngine.playCorrect();
    else window.soundEngine.playWrong();
  }

  updateScoreboard() {
    this.scoreAEl.textContent = this.scores.A;
    this.scoreBEl.textContent = this.scores.B;
    this.turnBadgeEl.textContent = `TEAM ${this.activeTeam}'S TURN`;
    this.turnBadgeEl.className = `turn-badge team-${this.activeTeam.toLowerCase()}`;
  }

  toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => alert(err.message));
    } else {
      if (document.exitFullscreen) document.exitFullscreen();
    }
  }

  renderQuestionGrid() {
    const gridContainer = document.getElementById('grid-buttons-overlay');
    gridContainer.innerHTML = '';

    // Positions for 15 question numbers based on Hogwarts Houses in Slide 4
    const positions = [
      { num: 1, x: 7.2, y: 15.0 },
      { num: 2, x: 17.5, y: 15.0 },
      { num: 3, x: 7.2, y: 39.5 },
      { num: 4, x: 17.5, y: 39.5 },

      { num: 5, x: 77.2, y: 15.0 },
      { num: 6, x: 88.5, y: 15.0 },
      { num: 7, x: 77.2, y: 39.5 },
      { num: 8, x: 88.5, y: 39.5 },

      { num: 9, x: 7.5, y: 69.5 },
      { num: 10, x: 18.5, y: 69.5 },
      { num: 11, x: 7.5, y: 88.0 },
      { num: 12, x: 18.5, y: 88.0 },

      { num: 13, x: 77.0, y: 68.0 },
      { num: 14, x: 88.5, y: 68.0 },
      { num: 15, x: 77.0, y: 88.0 }
    ];

    positions.forEach(p => {
      const btn = document.createElement('button');
      btn.className = 'grid-number-btn';
      btn.textContent = p.num;
      btn.style.left = `${p.x}%`;
      btn.style.top = `${p.y}%`;

      if (this.completedQuestions.has(p.num)) {
        btn.classList.add('completed');
      }

      btn.addEventListener('click', () => {
        this.openQuestion(p.num - 1);
      });

      gridContainer.appendChild(btn);
    });
  }

  openQuestion(qIdx) {
    this.currentQuestionIdx = qIdx;
    const qData = QUESTIONS_DATA[qIdx];
    this.answeredCorrectly = false;

    // Reset UI
    document.getElementById('q-title-header').textContent = `Question ${qData.number}`;
    document.getElementById('q-text-content').textContent = qData.question;
    
    const bannerEl = document.getElementById('q-correct-banner');
    bannerEl.textContent = qData.correctText;
    bannerEl.classList.remove('show');

    const greenBtn = document.getElementById('btn-q-green');
    greenBtn.classList.remove('glow', 'enabled');

    const optionsContainer = document.getElementById('q-options-container');
    const openEndedContainer = document.getElementById('q-openended-container');
    optionsContainer.innerHTML = '';

    if (qData.isOpenEnded) {
      optionsContainer.style.display = 'none';
      openEndedContainer.style.display = 'flex';
    } else {
      optionsContainer.style.display = 'grid';
      openEndedContainer.style.display = 'none';

      ['A', 'B', 'C', 'D'].forEach(letter => {
        if (!qData.options[letter]) return;
        const optBtn = document.createElement('button');
        optBtn.className = 'option-btn';
        optBtn.textContent = qData.options[letter];

        optBtn.addEventListener('click', () => {
          if (this.answeredCorrectly) return;
          this.handleAnswerChoice(optBtn, letter, qData.correct);
        });

        optionsContainer.appendChild(optBtn);
      });
    }

    this.switchScreen('question');
    window.soundEngine.playWandSpell();
  }

  handleAnswerChoice(btn, chosenLetter, correctLetter) {
    if (chosenLetter === correctLetter) {
      btn.classList.add('correct');
      this.handleCorrectAnswer();
    } else {
      btn.classList.add('wrong');
      window.soundEngine.playWrong();
      
      // Penalty animation
      btn.classList.add('shake-anim');
      setTimeout(() => btn.classList.remove('shake-anim'), 600);

      this.showToast('Incorrect answer! Beware of penalties or losing your turn!', 'error');
    }
  }

  handleCorrectAnswer() {
    this.answeredCorrectly = true;
    window.soundEngine.playCorrect();

    // Show correct answer banner (Slide in from bottom)
    const bannerEl = document.getElementById('q-correct-banner');
    bannerEl.classList.add('show');

    // Glow green button
    const greenBtn = document.getElementById('btn-q-green');
    greenBtn.classList.add('glow', 'enabled');

    this.triggerMagicSparks();
    this.showToast('Brilliant! Click the green wax seal on the right to claim your reward!', 'success');
  }

  openRewardScreen() {
    if (!this.answeredCorrectly) {
      const confirmOpen = confirm("Answer has not been confirmed! Do you still want to enter the reward room?");
      if (!confirmOpen) return;
    }

    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    this.completedQuestions.add(qData.number);
    this.renderQuestionGrid();

    window.soundEngine.playWandSpell();
    this.loadMinigame(qData.number, qData.rewardType);
    this.switchScreen('reward');
  }

  returnToGridFromReward() {
    window.soundEngine.playClick();
    this.toggleTurn(); // Switch turn to next team
    this.switchScreen('grid');
  }

  showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `magic-toast toast-${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.classList.add('show'), 10);
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 2800);
  }

  triggerMagicSparks() {
    for (let i = 0; i < 25; i++) {
      const spark = document.createElement('div');
      spark.className = 'magic-spark';
      spark.style.left = `${Math.random() * 80 + 10}%`;
      spark.style.top = `${Math.random() * 60 + 20}%`;
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1200);
    }
  }

  // ==================== 15 MINIGAMES IMPLEMENTATION (100% ENGLISH) ====================
  loadMinigame(questionNum, type) {
    const container = document.getElementById('reward-minigame-container');
    container.innerHTML = '';

    // Header & Crest return button
    const topBar = document.createElement('div');
    topBar.className = 'reward-header-bar';
    topBar.innerHTML = `
      <div class="reward-title-group">
        <span class="reward-badge">QUESTION ${questionNum} REWARD</span>
        <h2 id="reward-main-title" class="reward-title">Hogwarts Mystery Reward</h2>
      </div>
      <button class="btn-crest-return" title="Return to 15 questions board">
        <img src="assets/image31.png" alt="Return">
        <span>RETURN TO BOARD</span>
      </button>
    `;
    container.appendChild(topBar);

    topBar.querySelector('.btn-crest-return').addEventListener('click', () => {
      this.returnToGridFromReward();
    });

    // Content area
    const playArea = document.createElement('div');
    playArea.className = 'reward-play-area';
    container.appendChild(playArea);

    switch (type) {
      case 'supplies':
        this.renderSuppliesMinigame(playArea);
        break;
      case 'friend':
        this.renderFriendMinigame(playArea);
        break;
      case 'letter':
        this.renderLetterMinigame(playArea);
        break;
      case 'duel':
        this.renderDuelMinigame(playArea);
        break;
      case 'cards1':
      case 'cards2':
        this.renderCardsMinigame(playArea, type === 'cards2');
        break;
      case 'duelRival':
        this.renderDuelRivalMinigame(playArea);
        break;
      case 'voldemort':
        this.renderVoldemortMinigame(playArea);
        break;
      case 'classes':
        this.renderClassesMinigame(playArea);
        break;
      case 'owl':
        this.renderOwlMinigame(playArea);
        break;
      case 'bowls':
        this.renderBowlsMinigame(playArea);
        break;
      case 'hippogriff':
        this.renderHippogriffMinigame(playArea);
        break;
      case 'snitch':
        this.renderSnitchWheelMinigame(playArea);
        break;
      case 'sortingHats':
        this.renderSortingHatsMinigame(playArea);
        break;
      case 'patronus':
        this.renderPatronusMinigame(playArea);
        break;
      default:
        this.renderFriendMinigame(playArea);
    }
  }

  // 1. Buy some school supplies (Slide 20)
  renderSuppliesMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Buy some school supplies (1 of each)…";
    container.innerHTML = `
      <div class="supplies-game">
        <p class="game-instruction">Choose 1 item from each category: Ties - Wands - Books!</p>
        <div class="supplies-row">
          <div class="supply-card" data-pts="1"><img src="assets/image22.png"><span>Gryffindor Tie</span></div>
          <div class="supply-card" data-pts="2"><img src="assets/image20.png"><span>Slytherin Tie</span></div>
          <div class="supply-card" data-pts="-1" data-dark="true"><img src="assets/image18.png"><span>Ravenclaw Tie</span></div>
          <div class="supply-card" data-pts="2"><img src="assets/image17.png"><span>Hufflepuff Tie</span></div>
        </div>
        <div class="supplies-row">
          <div class="supply-card" data-pts="1"><img src="assets/image26.png"><span>Elder Wand</span></div>
          <div class="supply-card" data-pts="2"><img src="assets/image25.png"><span>Phoenix Feather Wand</span></div>
          <div class="supply-card" data-pts="1"><img src="assets/image24.png"><span>Oak Wood Wand</span></div>
          <div class="supply-card" data-pts="-1" data-dark="true"><img src="assets/image23.png"><span>Dark Wand</span></div>
        </div>
        <div class="supplies-row">
          <div class="supply-card" data-pts="2"><img src="assets/image16.png"><span>Advanced Potion Making</span></div>
          <div class="supply-card" data-pts="1"><img src="assets/image15.png"><span>Defense Against Dark Arts</span></div>
          <div class="supply-card" data-pts="2"><img src="assets/image14.png"><span>Quidditch Through the Ages</span></div>
          <div class="supply-card" data-pts="1"><img src="assets/image13.png"><span>Fantastic Beasts</span></div>
        </div>
      </div>
    `;

    container.querySelectorAll('.supply-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('revealed')) return;
        const pts = parseInt(card.dataset.pts);
        const isDark = card.dataset.dark === "true";
        card.classList.add('revealed');

        if (isDark) {
          card.innerHTML += `<div class="reveal-badge dark"><img src="assets/image27.png" style="width:40px"><br>Dark Mark! -1 pt</div>`;
          this.adjustScore(this.activeTeam, -1);
          window.soundEngine.playBomb();
        } else {
          card.innerHTML += `<div class="reveal-badge">+${pts} Point${pts > 1 ? 's' : ''}</div>`;
          this.adjustScore(this.activeTeam, pts);
          window.soundEngine.playCorrect();
        }
      });
    });
  }

  // 2. Choose your best friend (Slide 21)
  renderFriendMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your best friend…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="3" data-name="Harry Potter">
          <img src="assets/image34.png" alt="Harry">
          <h3>Harry Potter</h3>
          <div class="reveal-cover">Choose Harry</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Hermione Granger">
          <img src="assets/image35.png" alt="Hermione">
          <h3>Hermione Granger</h3>
          <div class="reveal-cover">Choose Hermione</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Ron Weasley">
          <img src="assets/image33.png" alt="Ron">
          <h3>Ron Weasley</h3>
          <div class="reveal-cover">Choose Ron</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playFanfare();
      });
    });
  }

  // 3. Hogwarts Letter (Slide 22, 23, 24)
  renderLetterMinigame(container) {
    document.getElementById('reward-main-title').textContent = "You finally get your letter from Hogwarts!";
    container.innerHTML = `
      <div class="letter-reveal-game">
        <div class="letter-box">
          <img src="assets/image39.gif" class="gif-banner" alt="Hogwarts Letters">
          <p class="game-instruction">Thousands of letters are filling the room! Open your letter:</p>
          <button id="btn-open-hogwarts-letter" class="magic-action-btn">OPEN HOGWARTS LETTER</button>
        </div>
        <div id="letter-outcome" class="outcome-box hidden"></div>
      </div>
    `;

    const btn = container.querySelector('#btn-open-hogwarts-letter');
    const outcome = container.querySelector('#letter-outcome');

    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      const isLucky = Math.random() > 0.35;
      outcome.classList.remove('hidden');

      if (isLucky) {
        outcome.innerHTML = `
          <img src="assets/image42.gif" class="gif-banner">
          <h2 class="outcome-title win">Welcome to Hogwarts!</h2>
          <p class="outcome-desc">Congratulations, you have been officially accepted into Hogwarts!</p>
          <div class="pts-award">+3 POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, 3);
        window.soundEngine.playFanfare();
      } else {
        outcome.innerHTML = `
          <img src="assets/image44.gif" class="gif-banner">
          <h2 class="outcome-title lose">You were caught by the Dursleys!</h2>
          <p class="outcome-desc">Uncle Vernon confiscated your letter and locked you under the stairs!</p>
          <div class="pts-award penalty">-1 POINT PENALTY FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, -1);
        window.soundEngine.playBomb();
      }
    });
  }

  // 4. Choose someone to duel (Slide 25)
  renderDuelMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose someone to duel…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="3" data-name="Draco Malfoy">
          <img src="assets/image46.png" alt="Malfoy">
          <h3>Draco Malfoy</h3>
          <div class="reveal-cover">Duel Draco</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Vincent Crabbe">
          <img src="assets/image47.png" alt="Crabbe">
          <h3>Vincent Crabbe</h3>
          <div class="reveal-cover">Duel Crabbe</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Gregory Goyle">
          <img src="assets/image48.png" alt="Goyle">
          <h3>Gregory Goyle</h3>
          <div class="reveal-cover">Duel Goyle</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS VICTORY!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playCorrect();
      });
    });
  }

  // 5. Test your luck! (Slide 26 & 35)
  renderCardsMinigame(container, isRound2 = false) {
    document.getElementById('reward-main-title').textContent = isRound2 ? "Test your luck! (Round 2)" : "Test your luck!";
    let currentPoints = 1;
    let gameOver = false;

    container.innerHTML = `
      <div class="cards-luck-game">
        <p class="game-instruction">Keep the card you have or draw more for more points. But beware: if you find a bomb the game is over and you lose all your points!</p>
        <div class="card-display">
          <div class="crest-card active-card">
            <img src="assets/image50.jpg" alt="Hogwarts Card">
            <div id="card-status-text" class="card-pts-overlay">+1 POINT</div>
          </div>
        </div>
        <div class="luck-controls">
          <button id="btn-draw-more" class="magic-action-btn">DRAW MORE (+POINTS)</button>
          <button id="btn-keep-pts" class="magic-action-btn keep">KEEP POINTS & STOP</button>
        </div>
      </div>
    `;

    const statusText = container.querySelector('#card-status-text');
    const drawBtn = container.querySelector('#btn-draw-more');
    const keepBtn = container.querySelector('#btn-keep-pts');

    drawBtn.addEventListener('click', () => {
      if (gameOver) return;
      window.soundEngine.playClick();
      const isBomb = Math.random() < 0.35;
      if (isBomb) {
        gameOver = true;
        statusText.innerHTML = `<span style="color:#ff3333">💣 BOMB!</span><br><small>You lost all points!</small>`;
        window.soundEngine.playBomb();
        drawBtn.disabled = true;
        keepBtn.disabled = true;
      } else {
        currentPoints += Math.floor(Math.random() * 2) + 1;
        statusText.innerHTML = `+${currentPoints} POINTS!`;
        window.soundEngine.playCorrect();
      }
    });

    keepBtn.addEventListener('click', () => {
      if (gameOver) return;
      gameOver = true;
      drawBtn.disabled = true;
      keepBtn.disabled = true;
      statusText.innerHTML = `COLLECTED +${currentPoints} POINTS!`;
      this.adjustScore(this.activeTeam, currentPoints);
      window.soundEngine.playFanfare();
    });
  }

  // 6. Duel with rival (Slide 27, 28, 29)
  renderDuelRivalMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Your rival challenges you to a duel.";
    container.innerHTML = `
      <div class="duel-interactive-game">
        <img src="assets/image60.gif" class="gif-banner" alt="Duel Challenge">
        <p class="game-instruction">Your rival raises their wand! Cast EXPELLIARMUS now!</p>
        <button id="btn-cast-duel" class="magic-action-btn pulse">⚡ CAST EXPELLIARMUS! ⚡</button>
        <div id="duel-result" class="outcome-box hidden"></div>
      </div>
    `;

    const btn = container.querySelector('#btn-cast-duel');
    const resultBox = container.querySelector('#duel-result');

    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      resultBox.classList.remove('hidden');
      const win = Math.random() > 0.4;

      if (win) {
        resultBox.innerHTML = `
          <img src="assets/image63.gif" class="gif-banner">
          <h2 class="outcome-title win">You won!</h2>
          <p class="outcome-desc">You successfully disarmed your opponent!</p>
          <div class="pts-award">+3 POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, 3);
        window.soundEngine.playFanfare();
      } else {
        resultBox.innerHTML = `
          <img src="assets/image61.gif" class="gif-banner">
          <h2 class="outcome-title lose">You lost!</h2>
          <p class="outcome-desc">You were hit by a stunning spell!</p>
          <div class="pts-award penalty">-1 POINT FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, -1);
        window.soundEngine.playBomb();
      }
    });
  }

  // 7. Voldemort attacks! (Slide 30, 31, 32)
  renderVoldemortMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Voldemort attacks!";
    container.innerHTML = `
      <div class="duel-interactive-game">
        <img src="assets/image64.gif" class="gif-banner" alt="Voldemort Attacks">
        <p class="game-instruction">Lord Voldemort has appeared! Join forces to cast your Patronus!</p>
        <button id="btn-fight-voldemort" class="magic-action-btn pulse">🔥 EXPECTO PATRONUM! 🔥</button>
        <div id="voldemort-result" class="outcome-box hidden"></div>
      </div>
    `;

    const btn = container.querySelector('#btn-fight-voldemort');
    const resultBox = container.querySelector('#voldemort-result');

    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      resultBox.classList.remove('hidden');
      const win = Math.random() > 0.35;

      if (win) {
        resultBox.innerHTML = `
          <img src="assets/image65.gif" class="gif-banner">
          <h2 class="outcome-title win">You won!</h2>
          <p class="outcome-desc">A surge of silver light repelled the Dark Lord!</p>
          <div class="pts-award">+5 MASSIVE POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, 5);
        window.soundEngine.playFanfare();
      } else {
        resultBox.innerHTML = `
          <img src="assets/image66.gif" class="gif-banner">
          <h2 class="outcome-title lose">You lost!</h2>
          <p class="outcome-desc">The dark forces proved overwhelming!</p>
          <div class="pts-award penalty">-2 POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, -2);
        window.soundEngine.playBomb();
      }
    });
  }

  // 8. Choose 3 classes to take (Slide 33)
  renderClassesMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose 3 classes to take…";
    let pickedCount = 0;
    const classes = [
      { name: "Potions", pts: 1, img: "assets/image70.png" },
      { name: "Defense Against Dark Arts", pts: 2, img: "assets/image71.png" },
      { name: "Transfiguration", pts: 2, img: "assets/image72.png" },
      { name: "Herbology", pts: 1, img: "assets/image73.png" },
      { name: "Care of Magical Creatures", pts: 2, img: "assets/image74.png" },
      { name: "Charms", pts: 1, img: "assets/image69.png" }
    ];

    container.innerHTML = `
      <div class="classes-game">
        <p class="game-instruction">Choose 3 classes to earn cumulative points: <span id="classes-counter">0/3</span></p>
        <div class="classes-grid">
          ${classes.map(c => `
            <div class="class-card" data-pts="${c.pts}">
              <img src="${c.img}" alt="${c.name}">
              <h4>${c.name}</h4>
              <div class="class-pts-badge">Select</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const counter = container.querySelector('#classes-counter');
    container.querySelectorAll('.class-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked') || pickedCount >= 3) return;
        pickedCount++;
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        card.querySelector('.class-pts-badge').textContent = `+${pts} PT${pts > 1 ? 'S' : ''}`;
        counter.textContent = `${pickedCount}/3`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playCorrect();

        if (pickedCount === 3) {
          window.soundEngine.playFanfare();
        }
      });
    });
  }

  // 9. Choose your pet owl (Slide 34)
  renderOwlMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your pet owl…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="3" data-name="Hedwig">
          <img src="assets/image78.png" alt="Hedwig">
          <h3>Hedwig (Snowy Owl)</h3>
          <div class="reveal-cover">Choose Hedwig</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Errol">
          <img src="assets/image77.png" alt="Errol">
          <h3>Errol (Old Owl)</h3>
          <div class="reveal-cover">Choose Errol</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Pigwidgeon">
          <img src="assets/image79.png" alt="Pigwidgeon">
          <h3>Pigwidgeon (Tiny Owl)</h3>
          <div class="reveal-cover">Choose Pig</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS REWARD!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playCorrect();
      });
    });
  }

  // 11. Cast Wingardium Leviosa on 3 bowls (Slide 36)
  renderBowlsMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Cast Wingardium Leviosa on 3 bowls to reveal your points…";
    let pickedCount = 0;
    const bowlPoints = [1, 2, 3, 1, 2, -1, 3, 2, 1, 2, 3, -1];

    container.innerHTML = `
      <div class="bowls-game">
        <p class="game-instruction">Cast Wingardium Leviosa on 3 bowls to levitate them and reveal your points: <span id="bowls-counter">0/3</span></p>
        <div class="bowls-grid">
          ${bowlPoints.map((pts, idx) => `
            <div class="bowl-card" data-pts="${pts}">
              <div class="bowl-number">${idx + 1}</div>
              <div class="bowl-icon">🥣</div>
              <div class="bowl-reveal">?</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const counter = container.querySelector('#bowls-counter');
    container.querySelectorAll('.bowl-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('levitated') || pickedCount >= 3) return;
        pickedCount++;
        card.classList.add('levitated');
        const pts = parseInt(card.dataset.pts);
        counter.textContent = `${pickedCount}/3`;

        if (pts < 0) {
          card.querySelector('.bowl-reveal').innerHTML = `💣<br>Bomb! -1 pt`;
          card.classList.add('bomb');
          this.adjustScore(this.activeTeam, -1);
          window.soundEngine.playBomb();
        } else {
          card.querySelector('.bowl-reveal').innerHTML = `✨<br>+${pts} pt${pts > 1 ? 's' : ''}`;
          this.adjustScore(this.activeTeam, pts);
          window.soundEngine.playCorrect();
        }

        if (pickedCount === 3) {
          window.soundEngine.playFanfare();
        }
      });
    });
  }

  // 12. Hippogriff in the forest (Slide 37, 38, 39)
  renderHippogriffMinigame(container) {
    document.getElementById('reward-main-title').textContent = "You find a hippogriff in the forest.";
    container.innerHTML = `
      <div class="duel-interactive-game">
        <img src="assets/image92.gif" class="gif-banner" alt="Hippogriff in Forest">
        <p class="game-instruction">You encounter Buckbeak the Hippogriff in the Forbidden Forest! Maintain eye contact and bow respectfully:</p>
        <button id="btn-bow-hippogriff" class="magic-action-btn pulse">🙇 BOW TO BUCKBEAK 🙇</button>
        <div id="hippogriff-result" class="outcome-box hidden"></div>
      </div>
    `;

    const btn = container.querySelector('#btn-bow-hippogriff');
    const resultBox = container.querySelector('#hippogriff-result');

    btn.addEventListener('click', () => {
      btn.style.display = 'none';
      resultBox.classList.remove('hidden');
      const isFriend = Math.random() > 0.35;

      if (isFriend) {
        resultBox.innerHTML = `
          <img src="assets/image93.gif" class="gif-banner">
          <h2 class="outcome-title win">It sees you as a friend!</h2>
          <p class="outcome-desc">Buckbeak bowed back and invited you to fly over the castle!</p>
          <div class="pts-award">+3 POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, 3);
        window.soundEngine.playFanfare();
      } else {
        resultBox.innerHTML = `
          <img src="assets/image94.gif" class="gif-banner">
          <h2 class="outcome-title lose">It sees you as an enemy!</h2>
          <p class="outcome-desc">You broke eye contact too soon and Buckbeak grew agitated!</p>
          <div class="pts-award penalty">-2 POINTS FOR TEAM ${this.activeTeam}</div>
        `;
        this.adjustScore(this.activeTeam, -2);
        window.soundEngine.playBomb();
      }
    });
  }

  // 13. Catch the golden snitch for 10pts! (Slide 40)
  renderSnitchWheelMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Catch the golden snitch for 10pts!";
    container.innerHTML = `
      <div class="quidditch-wheel-game">
        <div class="quidditch-stage">
          <img src="assets/image96.png" class="harry-seeker" alt="Harry Seeker">
          <div class="wheel-container">
            <div id="quidditch-wheel" class="quidditch-wheel">
              <img src="assets/image97.png" alt="Wheel Segments">
            </div>
            <div class="wheel-pointer">🔻</div>
          </div>
        </div>
        <div class="wheel-controls">
          <button id="btn-spin-wheel" class="magic-action-btn pulse">SPIN QUIDDITCH WHEEL</button>
          <div id="wheel-result-label" class="wheel-result-text"></div>
        </div>
      </div>
    `;

    const wheel = container.querySelector('#quidditch-wheel');
    const spinBtn = container.querySelector('#btn-spin-wheel');
    const resultLabel = container.querySelector('#wheel-result-label');

    let spinning = false;
    spinBtn.addEventListener('click', () => {
      if (spinning) return;
      spinning = true;
      spinBtn.disabled = true;
      resultLabel.textContent = "Spinning the wheel...";

      const segments = [
        { name: "🏆 GOLDEN SNITCH! +10 POINTS!", pts: 10 },
        { name: "+2 Quidditch Points", pts: 2 },
        { name: "+5 Quidditch Points", pts: 5 },
        { name: "+3 Quidditch Points", pts: 3 },
        { name: "💀 Dark Mark! -2 pts Penalty", pts: -2 },
        { name: "⚡ Lightning Bolt! +1 Point", pts: 1 },
        { name: "+6 Quidditch Points", pts: 6 },
        { name: "+4 Quidditch Points", pts: 4 }
      ];

      let targetSeg = Math.random() < 0.45 ? 0 : Math.floor(Math.random() * 8);
      const segAngle = 360 / 8;
      const targetAngle = 360 * 5 + (360 - (targetSeg * segAngle + segAngle / 2));

      wheel.style.transition = 'transform 4.5s cubic-bezier(0.15, 0.9, 0.2, 1)';
      wheel.style.transform = `rotate(${targetAngle}deg)`;

      let tickCount = 0;
      const tickTimer = setInterval(() => {
        window.soundEngine.playWheelTick();
        tickCount++;
        if (tickCount > 25) clearInterval(tickTimer);
      }, 140);

      setTimeout(() => {
        clearInterval(tickTimer);
        const win = segments[targetSeg];
        resultLabel.innerHTML = `<strong>${win.name}</strong>`;
        this.adjustScore(this.activeTeam, win.pts);
        if (win.pts >= 5) {
          window.soundEngine.playFanfare();
          this.triggerMagicSparks();
        } else if (win.pts < 0) {
          window.soundEngine.playBomb();
        } else {
          window.soundEngine.playCorrect();
        }
      }, 4700);
    });
  }

  // 14. Choose 4 sorting hats! (Slide 41)
  renderSortingHatsMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose 4 sorting hats!";
    let selectedCount = 0;
    
    const hatRewards = [
      4, 1, 2, 3, -1,
      2, 4, 1, 3, 2,
      1, 3, -1, 4, 1,
      3, 2, 4, 1, 3,
      4, 1, 2, -1, 4,
      2, 3, 1, 4, 2
    ];

    container.innerHTML = `
      <div class="sorting-hats-game">
        <p class="game-instruction">The Great Hall has 30 Sorting Hats! Choose 4 hats: <span id="hats-counter">0/4</span></p>
        <div class="hats-grid">
          ${hatRewards.map((pts, idx) => `
            <div class="hat-item" data-pts="${pts}">
              <img src="assets/image103.png" alt="Sorting Hat">
              <div class="hat-pts-overlay">?</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;

    const counter = container.querySelector('#hats-counter');
    container.querySelectorAll('.hat-item').forEach(item => {
      item.addEventListener('click', () => {
        if (item.classList.contains('picked') || selectedCount >= 4) return;
        selectedCount++;
        item.classList.add('picked');
        counter.textContent = `${selectedCount}/4`;
        const pts = parseInt(item.dataset.pts);

        if (pts < 0) {
          item.querySelector('.hat-pts-overlay').innerHTML = `💀<br>Bomb! -1 pt`;
          item.classList.add('bomb');
          this.adjustScore(this.activeTeam, -1);
          window.soundEngine.playBomb();
        } else {
          const houseNames = { 1: "Hufflepuff", 2: "Ravenclaw", 3: "Slytherin", 4: "Gryffindor" };
          item.querySelector('.hat-pts-overlay').innerHTML = `🎩<br>+${pts} pt${pts > 1 ? 's' : ''}<br><small>${houseNames[pts]}</small>`;
          this.adjustScore(this.activeTeam, pts);
          window.soundEngine.playCorrect();
        }

        if (selectedCount === 4) {
          window.soundEngine.playFanfare();
        }
      });
    });
  }

  // 15. Choose your Patronus… (Slide 42)
  renderPatronusMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your Patronus…";
    container.innerHTML = `
      <div class="three-choice-game patronus-theme">
        <div class="choice-card" data-pts="1" data-name="Cat Patronus">
          <img src="assets/image110.png" alt="Cat Patronus">
          <h3>Cat Patronus</h3>
          <div class="reveal-cover">Choose Cat</div>
        </div>
        <div class="choice-card" data-pts="5" data-name="Stag Patronus">
          <img src="assets/image111.png" alt="Stag Patronus">
          <h3>Stag Patronus</h3>
          <div class="reveal-cover">Choose Stag</div>
        </div>
        <div class="choice-card" data-pts="-3" data-name="Wolf Patronus">
          <img src="assets/image112.png" alt="Wolf Patronus">
          <h3>Wolf Patronus</h3>
          <div class="reveal-cover">Choose Wolf</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        
        if (pts < 0) {
          card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text penalty">DEMENTOR AMBUSH!<br>-3 POINTS</span>`;
          this.adjustScore(this.activeTeam, -3);
          window.soundEngine.playBomb();
        } else {
          card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS!</span>`;
          this.adjustScore(this.activeTeam, pts);
          window.soundEngine.playFanfare();
        }
      });
    });
  }
}

// Auto scale letterboxing helper to maintain strict 16:9 1920x1080 resolution
function setupResponsiveScaling() {
  const container = document.getElementById('app-viewport');
  function resize() {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const targetWidth = 1920;
    const targetHeight = 1080;

    const scale = Math.min(windowWidth / targetWidth, windowHeight / targetHeight);
    container.style.transform = `scale(${scale})`;
    container.style.left = `${(windowWidth - targetWidth * scale) / 2}px`;
    container.style.top = `${(windowHeight - targetHeight * scale) / 2}px`;
  }

  window.addEventListener('resize', resize);
  resize();
}

window.addEventListener('DOMContentLoaded', () => {
  setupResponsiveScaling();
  window.game = new HogwartsGame();
});
