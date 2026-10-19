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
    options: {},
    correct: "Quasi-",
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
  },
  {
    number: 16,
    isMysteryGift: true,
    question: "Question 16: Hogwarts Mystery Gift! (+2 Points)",
    options: {},
    correct: "",
    correctText: "Mystery Gift: +2 Points Awarded!",
    rewardType: "mysteryGift"
  }
];

// 4 Rotational A / B Penalty Scenarios (Authentic Slides from PowerPoint)
const PENALTY_AB_SCENARIOS = [
  {
    key: 'letter',
    prompt: "You finally get your letter from Hogwarts!",
    promptGif: "assets/image39.gif",
    safe: {
      gif: "assets/image42.gif",
      title: "Welcome to Hogwarts!",
      desc: "You safely caught your Hogwarts letter! 0 Points Penalty (Escaped unharmed!)."
    },
    penalty: {
      gif: "assets/image44.gif",
      title: "Caught by the Dursleys!",
      desc: "Uncle Vernon intercepted your letter and locked you up! -2 Points Penalty."
    }
  },
  {
    key: 'duel',
    prompt: "Your rival challenges you to a duel.",
    promptGif: "assets/image60.gif",
    safe: {
      gif: "assets/image63.gif",
      title: "You won the duel!",
      desc: "You successfully disarmed your opponent! 0 Points Penalty (Escaped unharmed!)."
    },
    penalty: {
      gif: "assets/image61.gif",
      title: "You lost the duel!",
      desc: "You were hit by a stunning curse! -2 Points Penalty."
    }
  },
  {
    key: 'voldemort',
    prompt: "Voldemort attacks!",
    promptGif: "assets/image64.gif",
    safe: {
      gif: "assets/image65.gif",
      title: "You repelled Voldemort!",
      desc: "A surge of silver Patronus light shielded you! 0 Points Penalty (Escaped unharmed!)."
    },
    penalty: {
      gif: "assets/image66.gif",
      title: "Dark Arts Curse!",
      desc: "The dark forces proved overwhelming! -2 Points Penalty."
    }
  },
  {
    key: 'hippogriff',
    prompt: "You find a hippogriff in the forest.",
    promptGif: "assets/image92.gif",
    safe: {
      gif: "assets/image93.gif",
      title: "It sees you as a friend!",
      desc: "Buckbeak bowed back and welcomed you! 0 Points Penalty (Escaped unharmed!)."
    },
    penalty: {
      gif: "assets/image94.gif",
      title: "It sees you as an enemy!",
      desc: "You broke eye contact and Buckbeak attacked! -2 Points Penalty."
    }
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

    // A/B Penalty Trial state
    this.penaltyScenarioPool = [];
    this.currentABScenario = null;
    this.currentSafeChoice = 'A';
    this.isHandlingPenaltyTrial = false;

    this.initElements();
    this.bindEvents();
    this.bindKeyboardShortcuts();
    this.updateScoreboard();
    this.renderQuestionGrid();
    this.switchScreen('title');
  }

  initElements() {
    this.screens = {
      title: document.getElementById('screen-title'),
      letter: document.getElementById('screen-letter'),
      rules: document.getElementById('screen-rules'),
      grid: document.getElementById('screen-grid'),
      question: document.getElementById('screen-question'),
      reward: document.getElementById('screen-reward'),
      penalty: document.getElementById('screen-penalty'),
      victory: document.getElementById('screen-victory'),
      abPenalty: document.getElementById('screen-ab-penalty'),
      finale: document.getElementById('screen-finale')
    };

    this.scoreAEl = document.getElementById('score-team-a');
    this.scoreBEl = document.getElementById('score-team-b');
    this.turnBadgeEl = document.getElementById('current-turn-badge');
    this.globalScoreboard = document.getElementById('global-scoreboard');
  }

  bindEvents() {
    // Screen navigation - Start Journey
    const startJourney = () => {
      try {
        if (window.soundEngine) {
          window.soundEngine.startBGM();
          window.soundEngine.playWandSpell();
        }
      } catch (err) {
        console.warn('Audio play error:', err);
      }
      this.switchScreen('letter');
    };

    const btnStart = document.getElementById('btn-start-game');
    if (btnStart) {
      btnStart.addEventListener('click', (e) => {
        e.stopPropagation();
        startJourney();
      });
    }

    const screenTitle = document.getElementById('screen-title');
    if (screenTitle) {
      screenTitle.addEventListener('click', () => {
        if (this.currentScreen === 'title') {
          startJourney();
        }
      });
    }

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
      const qData = QUESTIONS_DATA[this.currentQuestionIdx];
      if (qData && (this.answeredCorrectly || this.completedQuestions.has(qData.number))) {
        this.toggleTurn();
      }
      this.switchScreen('grid');
      if (this.completedQuestions.size >= 16) {
        this.showToast('🏆 All 16 questions complete! Preparing House Cup Ceremony...', 'success');
        setTimeout(() => {
          if (this.currentScreen === 'grid') {
            this.openFinaleScreen();
          }
        }, 2200);
      }
    });

    document.getElementById('btn-q-green').addEventListener('click', () => {
      const qData = QUESTIONS_DATA[this.currentQuestionIdx];
      if (this.answeredCorrectly) {
        this.triggerVictorySlide();
      } else if (qData && this.completedQuestions.has(qData.number)) {
        this.showToast('Question was answered incorrectly! No reward chamber.', 'error');
        window.soundEngine.playWrong();
      } else {
        this.openRewardScreen();
      }
    });

    // Open-ended reveal & confirmation buttons (for Q10)
    const btnReveal = document.getElementById('btn-reveal-answer');
    if (btnReveal) {
      btnReveal.addEventListener('click', (e) => {
        e.stopPropagation();
        this.revealOpenEndedAnswer();
      });
    }

    const btnConfirmCorrect = document.getElementById('btn-confirm-correct');
    if (btnConfirmCorrect) {
      btnConfirmCorrect.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleOpenEndedConfirm(true);
      });
    }

    const btnConfirmWrong = document.getElementById('btn-confirm-wrong');
    if (btnConfirmWrong) {
      btnConfirmWrong.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleOpenEndedConfirm(false);
      });
    }

    // Clicking anywhere on question screen for Q10 reveals answer (if not revealed yet)
    document.getElementById('screen-question').addEventListener('click', (e) => {
      const qData = QUESTIONS_DATA[this.currentQuestionIdx];
      if (qData && qData.isOpenEnded && !this.completedQuestions.has(qData.number)) {
        // Avoid clicks on seal buttons or inside review card
        if (!e.target.closest('.seal-container') && !e.target.closest('.openended-review-card')) {
          if (!this.openEndedRevealed) {
            this.revealOpenEndedAnswer();
          }
        }
      }
    });

    // A/B Penalty Trial Choice Buttons
    const btnChoiceA = document.getElementById('btn-ab-choice-a');
    if (btnChoiceA) {
      btnChoiceA.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleABChoice('A');
      });
    }

    const btnChoiceB = document.getElementById('btn-ab-choice-b');
    if (btnChoiceB) {
      btnChoiceB.addEventListener('click', (e) => {
        e.stopPropagation();
        this.handleABChoice('B');
      });
    }

    // Cinema GIF screen click-to-proceed
    const screenPenalty = document.getElementById('screen-penalty');
    if (screenPenalty) {
      screenPenalty.addEventListener('click', () => {
        if (this.currentScreen === 'penalty') {
          if (this.penaltyTimer) clearTimeout(this.penaltyTimer);
          this.openABPenaltyTrial();
        }
      });
    }

    const screenVictory = document.getElementById('screen-victory');
    if (screenVictory) {
      screenVictory.addEventListener('click', () => {
        if (this.currentScreen === 'victory') {
          if (this.victoryTimer) clearTimeout(this.victoryTimer);
          this.openRewardScreen();
        }
      });
    }

    // Reward points announcement popup button
    const btnPopupReturn = document.getElementById('btn-popup-return-now');
    if (btnPopupReturn) {
      btnPopupReturn.addEventListener('click', () => {
        this.closeRewardPopupAndReturn();
      });
    }

    // Grand Finale Ceremony buttons
    const btnEnterFinale = document.getElementById('btn-enter-finale');
    if (btnEnterFinale) {
      btnEnterFinale.addEventListener('click', () => {
        this.openFinaleScreen();
      });
    }

    const btnReplayCeremony = document.getElementById('btn-replay-ceremony');
    if (btnReplayCeremony) {
      btnReplayCeremony.addEventListener('click', () => {
        this.runFinaleCeremony();
      });
    }

    const btnFinaleBoard = document.getElementById('btn-finale-return-board');
    if (btnFinaleBoard) {
      btnFinaleBoard.addEventListener('click', () => {
        window.soundEngine.playClick();
        this.switchScreen('grid');
      });
    }

    const btnFinaleRestart = document.getElementById('btn-finale-restart-game');
    if (btnFinaleRestart) {
      btnFinaleRestart.addEventListener('click', () => {
        this.resetGameConfirm();
      });
    }
  }

  bindKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      // If 5s reward popup is active, dismiss immediately and return to grid
      const popupEl = document.getElementById('reward-points-popup');
      if (popupEl && popupEl.classList.contains('active')) {
        if (e.code === 'Space' || e.code === 'Enter' || e.code === 'Escape' || e.code === 'ArrowRight' || e.code === 'ArrowLeft') {
          e.preventDefault();
          this.closeRewardPopupAndReturn();
          return;
        }
      }

      // Hotkeys for presenter
      if (e.code === 'KeyF') {
        this.toggleFullscreen();
      } else if (e.code === 'KeyM') {
        const isMuted = window.soundEngine.toggleMute();
        document.getElementById('btn-sound-toggle').innerHTML = isMuted ? '🔇' : '🔊';
      } else if (e.code === 'KeyT') {
        this.toggleTurn();
      } else if (e.code === 'KeyC') {
        this.openFinaleScreen();
      } else if (this.currentScreen === 'abPenalty' && (e.code === 'KeyA' || e.code === 'KeyB')) {
        const choice = (e.code === 'KeyA') ? 'A' : 'B';
        this.handleABChoice(choice);
      } else if (this.currentScreen === 'reward' && (e.code === 'KeyA' || e.code === 'KeyB')) {
        const choice = (e.code === 'KeyA') ? 'A' : 'B';
        const targetBtn = document.querySelector(`.reward-play-area .ab-choice-btn[data-choice="${choice}"], .reward-play-area .letter-choice-btn[data-choice="${choice}"]`);
        if (targetBtn && !targetBtn.disabled) {
          targetBtn.click();
        }
      } else if (this.currentScreen === 'question' && (e.code === 'KeyY' || e.code === 'Digit1' || e.code === 'Numpad1')) {
        const qData = QUESTIONS_DATA[this.currentQuestionIdx];
        if (qData && qData.isOpenEnded && this.openEndedRevealed && !this.completedQuestions.has(qData.number)) {
          this.handleOpenEndedConfirm(true);
        }
      } else if (this.currentScreen === 'question' && (e.code === 'KeyN' || e.code === 'Digit2' || e.code === 'Numpad2')) {
        const qData = QUESTIONS_DATA[this.currentQuestionIdx];
        if (qData && qData.isOpenEnded && this.openEndedRevealed && !this.completedQuestions.has(qData.number)) {
          this.handleOpenEndedConfirm(false);
        }
      } else if (e.code === 'Escape' || e.code === 'ArrowLeft') {
        if (this.currentScreen === 'finale') {
          window.soundEngine.playClick();
          this.switchScreen('grid');
          return;
        }
        if (this.currentScreen === 'question' || this.currentScreen === 'reward' || this.currentScreen === 'penalty' || this.currentScreen === 'victory' || this.currentScreen === 'abPenalty') {
          if (this.penaltyTimer) clearTimeout(this.penaltyTimer);
          if (this.victoryTimer) clearTimeout(this.victoryTimer);
          window.soundEngine.playClick();
          if (this.currentScreen === 'abPenalty') {
            this.returnToQuestionAfterPenalty();
            return;
          }
          const qData = QUESTIONS_DATA[this.currentQuestionIdx];
          if (this.currentScreen === 'penalty') {
            if (qData) this.completedQuestions.add(qData.number);
            this.renderQuestionGrid();
            this.toggleTurn();
          } else if (this.currentScreen === 'question') {
            if (qData && (this.answeredCorrectly || this.completedQuestions.has(qData.number))) {
              this.toggleTurn();
            }
          }
          this.switchScreen('grid');
        }
      } else if (e.code === 'Space' || e.code === 'ArrowRight' || e.code === 'Enter') {
        if (this.currentScreen === 'title') {
          window.soundEngine.playWandSpell();
          this.switchScreen('letter');
        } else if (this.currentScreen === 'letter') {
          window.soundEngine.playClick();
          this.switchScreen('rules');
        } else if (this.currentScreen === 'rules') {
          window.soundEngine.playWandSpell();
          this.switchScreen('grid');
        } else if (this.currentScreen === 'penalty') {
          if (this.penaltyTimer) clearTimeout(this.penaltyTimer);
          this.openABPenaltyTrial();
        } else if (this.currentScreen === 'victory') {
          if (this.victoryTimer) clearTimeout(this.victoryTimer);
          this.openRewardScreen();
        } else if (this.currentScreen === 'question') {
          const qData = QUESTIONS_DATA[this.currentQuestionIdx];
          const isCompleted = qData && this.completedQuestions.has(qData.number);
          if (isCompleted && !this.answeredCorrectly) {
            window.soundEngine.playClick();
            this.toggleTurn();
            this.switchScreen('grid');
          } else if (qData && qData.isOpenEnded) {
            if (!this.openEndedRevealed && !isCompleted) {
              this.revealOpenEndedAnswer();
            } else if (this.answeredCorrectly) {
              this.triggerVictorySlide();
            }
          } else if (!this.answeredCorrectly) {
            this.handleCorrectAnswer();
          } else {
            this.triggerVictorySlide();
          }
        }
      }
    });
  }

  switchScreen(screenName) {
    Object.keys(this.screens).forEach(key => {
      this.screens[key].classList.remove('active');
    });
    this.screens[screenName].classList.add('active');
    this.currentScreen = screenName;

    // Show or hide global scoreboard
    const isSortingHats = screenName === 'reward' && document.getElementById('reward-minigame-container')?.classList.contains('sorting-hats-mode');
    if (screenName === 'title' || screenName === 'letter' || screenName === 'rules' || screenName === 'finale' || isSortingHats) {
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

    // Precise relative coordinates for 16 question numbers from original Slide 4
    // Gryffindor: 1, 2, 3, 4
    // Slytherin: 5, 6, 7, 8
    // Hufflepuff: 9, 10, 11, 12
    // Ravenclaw: 13, 14, 15, 16
    const positions = [
      { num: 1, x: 5.6, y: 12.0 },
      { num: 2, x: 16.0, y: 12.0 },
      { num: 3, x: 5.6, y: 32.5 },
      { num: 4, x: 16.0, y: 32.5 },

      { num: 5, x: 76.0, y: 12.0 },
      { num: 6, x: 87.5, y: 12.0 },
      { num: 7, x: 76.0, y: 32.5 },
      { num: 8, x: 87.5, y: 32.5 },

      { num: 9, x: 6.2, y: 62.5 },
      { num: 10, x: 16.0, y: 62.5 },
      { num: 11, x: 4.8, y: 82.5 },
      { num: 12, x: 16.0, y: 82.5 },

      { num: 13, x: 74.5, y: 61.5 },
      { num: 14, x: 86.0, y: 61.5 },
      { num: 15, x: 74.5, y: 82.5 },
      { num: 16, x: 86.5, y: 82.5 }
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
        if (this.completedQuestions.has(p.num)) return;
        if (p.num === 16) {
          this.openMysteryGift();
        } else {
          this.openQuestion(p.num - 1);
        }
      });

      gridContainer.appendChild(btn);
    });

    const finaleBanner = document.getElementById('grid-finale-banner');
    if (finaleBanner) {
      if (this.completedQuestions.size >= 16) {
        finaleBanner.classList.remove('hidden');
      } else {
        finaleBanner.classList.add('hidden');
      }
    }
  }

  openMysteryGift() {
    this.currentQuestionIdx = 15;
    window.soundEngine.playWandSpell();
    this.loadMinigame(16, 'mysteryGift');
    this.switchScreen('reward');
  }

  openQuestion(qIdx) {
    if (qIdx === 15 || QUESTIONS_DATA[qIdx]?.isMysteryGift) {
      this.openMysteryGift();
      return;
    }
    if (this.autoRewardTimer) {
      clearTimeout(this.autoRewardTimer);
      this.autoRewardTimer = null;
    }
    if (this.penaltyTimer) {
      clearTimeout(this.penaltyTimer);
      this.penaltyTimer = null;
    }
    this.currentQuestionIdx = qIdx;
    const qData = QUESTIONS_DATA[qIdx];
    this.answeredCorrectly = false;

    // Reset Question UI
    document.getElementById('q-text-content').textContent = qData.question;
    
    const bannerEl = document.getElementById('q-correct-banner');
    bannerEl.textContent = qData.correctText;
    bannerEl.classList.remove('show');

    const greenBtn = document.getElementById('btn-q-green');
    greenBtn.classList.remove('glow', 'enabled');

    const redBtn = document.getElementById('btn-q-red');
    if (redBtn) redBtn.classList.remove('glow');

    const optionsContainer = document.getElementById('q-options-container');
    const openEndedContainer = document.getElementById('q-openended-container');
    optionsContainer.innerHTML = '';

    if (qData.isOpenEnded) {
      optionsContainer.style.display = 'none';
      openEndedContainer.style.display = 'flex';
      bannerEl.style.display = 'none'; // Don't show bottom banner for open-ended question

      const isCompleted = this.completedQuestions.has(qData.number);
      const revealBtn = document.getElementById('btn-reveal-answer');
      const reviewBox = document.getElementById('q-openended-review-box');
      const confirmSection = document.getElementById('review-confirm-section');
      const statusBadge = document.getElementById('review-status-badge');

      if (isCompleted) {
        if (revealBtn) revealBtn.style.display = 'none';
        if (reviewBox) reviewBox.style.display = 'flex';
        if (confirmSection) confirmSection.style.display = 'none';
        if (statusBadge) {
          statusBadge.style.display = 'block';
          if (this.answeredCorrectly) {
            statusBadge.className = 'review-status-badge correct';
            statusBadge.textContent = '✔ ĐÃ TRẢ LỜI ĐÚNG (CORRECT)';
            greenBtn.classList.add('glow', 'enabled');
          } else {
            statusBadge.className = 'review-status-badge wrong';
            statusBadge.textContent = '✖ ĐÃ TRẢ LỜI SAI (INCORRECT)';
            if (redBtn) redBtn.classList.add('glow');
          }
        }
      } else {
        this.openEndedRevealed = false;
        if (revealBtn) revealBtn.style.display = 'flex';
        if (reviewBox) reviewBox.style.display = 'none';
        if (confirmSection) confirmSection.style.display = 'flex';
        if (statusBadge) statusBadge.style.display = 'none';
      }
    } else {
      optionsContainer.style.display = 'grid';
      openEndedContainer.style.display = 'none';
      bannerEl.style.display = '';
      bannerEl.classList.remove('openended-mode');

      // 2x2 layout: Column 1 = A, C; Column 2 = B, D
      const orderedLetters = ['A', 'B', 'C', 'D'];
      orderedLetters.forEach(letter => {
        if (!qData.options[letter]) return;
        const optBtn = document.createElement('button');
        optBtn.className = 'pill-option-btn';
        optBtn.textContent = qData.options[letter];

        optBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          if (this.answeredCorrectly || this.completedQuestions.has(qData.number)) return;
          this.handleAnswerChoice(optBtn, letter, qData.correct);
        });

        optionsContainer.appendChild(optBtn);
      });
    }

    this.switchScreen('question');
    window.soundEngine.playWandSpell();
  }

  revealOpenEndedAnswer() {
    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    if (!qData || !qData.isOpenEnded) return;
    if (this.completedQuestions.has(qData.number)) return;

    this.openEndedRevealed = true;

    const revealBtn = document.getElementById('btn-reveal-answer');
    if (revealBtn) revealBtn.style.display = 'none';

    const reviewBox = document.getElementById('q-openended-review-box');
    if (reviewBox) reviewBox.style.display = 'flex';

    const confirmSection = document.getElementById('review-confirm-section');
    if (confirmSection) confirmSection.style.display = 'flex';

    const statusBadge = document.getElementById('review-status-badge');
    if (statusBadge) statusBadge.style.display = 'none';

    window.soundEngine.playWandSpell();
    this.showToast('Đáp án chính thức: Quasi-. Hãy bấm ĐÚNG hoặc SAI để xác nhận!', 'info');
  }

  handleOpenEndedConfirm(isCorrect) {
    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    if (!qData || !qData.isOpenEnded) return;
    if (this.completedQuestions.has(qData.number)) return;

    const confirmSection = document.getElementById('review-confirm-section');
    if (confirmSection) confirmSection.style.display = 'none';

    const statusBadge = document.getElementById('review-status-badge');

    if (isCorrect) {
      if (statusBadge) {
        statusBadge.style.display = 'block';
        statusBadge.className = 'review-status-badge correct';
        statusBadge.textContent = '✔ ĐÃ XÁC NHẬN: ĐÚNG (CORRECT)';
      }
      this.handleCorrectAnswer();
    } else {
      if (statusBadge) {
        statusBadge.style.display = 'block';
        statusBadge.className = 'review-status-badge wrong';
        statusBadge.textContent = '✖ ĐÃ XÁC NHẬN: SAI (WRONG)';
      }
      this.answeredCorrectly = false;
      window.soundEngine.playWrong();
      this.showToast('Đã xác nhận: Trả lời sai. Kích hoạt thử thách trừng phạt!', 'error');

      // Trigger Penalty Slide Animation & Modal
      setTimeout(() => {
        if (!this.answeredCorrectly) {
          this.triggerPenaltySlide();
        }
      }, 550);
    }
  }

  handleAnswerChoice(btn, chosenLetter, correctLetter) {
    if (chosenLetter === correctLetter) {
      btn.classList.add('correct');
      this.handleCorrectAnswer();
    } else {
      btn.classList.add('wrong');
      window.soundEngine.playWrong();
      
      btn.classList.add('shake-anim');
      setTimeout(() => btn.classList.remove('shake-anim'), 600);

      // Trigger Penalty Slide Animation & Modal
      setTimeout(() => {
        if (!this.answeredCorrectly) {
          this.triggerPenaltySlide();
        }
      }, 550);
    }
  }

  handleCorrectAnswer() {
    this.answeredCorrectly = true;
    window.soundEngine.playCorrect();

    const qData = QUESTIONS_DATA[this.currentQuestionIdx];

    // Show correct answer banner (Slide in from bottom, never obscured) - only for MCQs
    const bannerEl = document.getElementById('q-correct-banner');
    if (qData && qData.isOpenEnded) {
      if (bannerEl) bannerEl.style.display = 'none';
      const revealBtn = document.getElementById('btn-reveal-answer');
      if (revealBtn) revealBtn.style.display = 'none';
      const reviewBox = document.getElementById('q-openended-review-box');
      if (reviewBox) reviewBox.style.display = 'flex';
    } else {
      if (bannerEl) {
        bannerEl.style.display = '';
        bannerEl.classList.add('show');
      }
    }

    // Glow green seal
    const greenBtn = document.getElementById('btn-q-green');
    greenBtn.classList.add('glow', 'enabled');

    this.triggerMagicSparks();
    this.showToast('Brilliant! Spell successful!', 'success');

    // Short pause (600ms) to acknowledge correct answer before playing dramatic Victory Effect slide
    if (this.autoRewardTimer) clearTimeout(this.autoRewardTimer);
    this.autoRewardTimer = setTimeout(() => {
      if (this.currentScreen === 'question') {
        this.triggerVictorySlide();
      }
    }, 600);
  }

  triggerVictorySlide() {
    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    const rType = qData ? qData.rewardType : '';

    const victorySlides = [
      {
        key: 'letter',
        gif: 'assets/image42.gif',
        title: 'CORRECT ANSWER!',
        subtitle: 'Welcome to Hogwarts!'
      },
      {
        key: 'duel',
        gif: 'assets/image63.gif',
        title: 'DUEL VICTORY!',
        subtitle: "You won the Wizard's Duel!"
      },
      {
        key: 'voldemort',
        gif: 'assets/image65.gif',
        title: 'TRIUMPH OF LIGHT!',
        subtitle: 'You triumphed over the Dark Arts!'
      },
      {
        key: 'hippogriff',
        gif: 'assets/image93.gif',
        title: 'HIPPOGRIFF FRIEND!',
        subtitle: 'The Hippogriff bows and welcomes you as a friend!'
      }
    ];

    // Map question's reward theme if applicable, otherwise pick dynamically
    let v = null;
    if (rType === 'letter') v = victorySlides[0];
    else if (rType === 'duel' || rType === 'rival') v = victorySlides[1];
    else if (rType === 'voldemort') v = victorySlides[2];
    else if (rType === 'hippogriff') v = victorySlides[3];
    else {
      v = victorySlides[Math.floor(Math.random() * victorySlides.length)];
    }

    const vGif = document.getElementById('victory-gif');
    const vTitle = document.getElementById('victory-title');

    if (vGif) vGif.src = v.gif;
    if (vTitle) {
      vTitle.textContent = `${this.activeTeam === 'A' ? 'Team A' : 'Team B'} Victory`;
    }

    // Switch screen to victory overlay (Only plays GIF, NO point additions here!)
    this.switchScreen('victory');

    try {
      if (window.soundEngine) window.soundEngine.playVictoryFanfare();
    } catch (e) {
      console.warn('Audio error:', e);
    }

    this.triggerVictoryCelebration();

    // Animate timer progress bar (3.0s countdown)
    const bar = document.getElementById('victory-progress-bar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.transition = 'width 3s linear';
        bar.style.width = '0%';
      }, 50);
    }

    // Automatically transition to reward screen after 3.0 seconds
    if (this.victoryTimer) clearTimeout(this.victoryTimer);
    this.victoryTimer = setTimeout(() => {
      if (this.currentScreen === 'victory') {
        this.openRewardScreen();
      }
    }, 3050);
  }

  triggerVictoryCelebration() {
    for (let i = 0; i < 45; i++) {
      const spark = document.createElement('div');
      spark.className = 'magic-spark';
      spark.style.left = `${Math.random() * 85 + 5}%`;
      spark.style.top = `${Math.random() * 75 + 10}%`;
      spark.style.background = i % 2 === 0 ? '#ffd700' : '#81c784';
      spark.style.boxShadow = i % 2 === 0 ? '0 0 18px #ffd700, 0 0 35px #ff9900' : '0 0 18px #81c784, 0 0 35px #4caf50';
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1600);
    }
  }

  triggerPenaltySlide() {
    const penaltyGifs = [
      'assets/image44.gif',
      'assets/image61.gif',
      'assets/image66.gif',
      'assets/image94.gif'
    ];

    const pGif = penaltyGifs[Math.floor(Math.random() * penaltyGifs.length)];

    const pGifEl = document.getElementById('penalty-gif');
    if (pGifEl) pGifEl.src = pGif;

    const pTitle = document.getElementById('penalty-title');
    if (pTitle) {
      pTitle.textContent = `${this.activeTeam === 'A' ? 'Team A' : 'Team B'} Defeat`;
    }

    // NOTE: Only play GIF, NO points deducted or displayed per user requirement!
    this.switchScreen('penalty');
    window.soundEngine.playWrong();

    // Animate countdown progress bar (2.8s)
    const bar = document.getElementById('penalty-progress-bar');
    if (bar) {
      bar.style.transition = 'none';
      bar.style.width = '100%';
      setTimeout(() => {
        bar.style.transition = 'width 2.8s linear';
        bar.style.width = '0%';
      }, 50);
    }

    // Automatically transition to A/B penalty trial after 2.8 seconds
    if (this.penaltyTimer) clearTimeout(this.penaltyTimer);
    this.penaltyTimer = setTimeout(() => {
      if (this.currentScreen === 'penalty') {
        this.openABPenaltyTrial();
      }
    }, 2850);
  }

  getNextPenaltyScenario() {
    if (!this.penaltyScenarioPool || this.penaltyScenarioPool.length === 0) {
      const indices = [0, 1, 2, 3];
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }
      this.penaltyScenarioPool = indices;
    }
    const nextIdx = this.penaltyScenarioPool.pop();
    return PENALTY_AB_SCENARIOS[nextIdx];
  }

  openABPenaltyTrial() {
    if (this.penaltyTimer) {
      clearTimeout(this.penaltyTimer);
      this.penaltyTimer = null;
    }

    this.isHandlingPenaltyTrial = true;
    this.abChoiceMade = false;

    // Pick next scenario with minimal repetition
    this.currentABScenario = this.getNextPenaltyScenario();
    this.currentSafeChoice = Math.random() < 0.5 ? 'A' : 'B';

    // Update screen DOM
    const bgGif = document.getElementById('ab-bg-gif');
    if (bgGif) bgGif.src = this.currentABScenario.promptGif;

    const titleEl = document.getElementById('ab-prompt-title');
    if (titleEl) titleEl.textContent = this.currentABScenario.prompt;

    const btnA = document.getElementById('btn-ab-choice-a');
    const btnB = document.getElementById('btn-ab-choice-b');
    if (btnA) {
      btnA.disabled = false;
      btnA.classList.remove('selected');
    }
    if (btnB) {
      btnB.disabled = false;
      btnB.classList.remove('selected');
    }

    const card = document.getElementById('ab-outcome-card');
    if (card) {
      card.classList.add('hidden');
    }

    this.switchScreen('abPenalty');

    try {
      if (window.soundEngine) window.soundEngine.playWandSpell();
    } catch (e) {}

    this.showToast(`Team ${this.activeTeam}: Choose circle A or B!`, 'info');
  }

  handleABChoice(chosen) {
    if (!this.currentABScenario || this.abChoiceMade) return;
    this.abChoiceMade = true;

    const btnA = document.getElementById('btn-ab-choice-a');
    const btnB = document.getElementById('btn-ab-choice-b');
    if (btnA) btnA.disabled = true;
    if (btnB) btnB.disabled = true;

    const chosenBtn = (chosen === 'A') ? btnA : btnB;
    if (chosenBtn) chosenBtn.classList.add('selected');

    const isSafe = (chosen === this.currentSafeChoice);
    const scenario = this.currentABScenario;
    const outcome = isSafe ? scenario.safe : scenario.penalty;
    const ptsChange = isSafe ? 0 : -2;

    if (!isSafe) {
      this.adjustScore(this.activeTeam, -2);
    } else {
      try {
        if (window.soundEngine) window.soundEngine.playCorrect();
      } catch (e) {}
    }

    // Show outcome card modal
    const card = document.getElementById('ab-outcome-card');
    const oGif = document.getElementById('ab-outcome-gif');
    const oHead = document.getElementById('ab-outcome-headline');
    const oDetails = document.getElementById('ab-outcome-details');
    const oBadge = document.getElementById('ab-outcome-badge');

    if (oGif) oGif.src = outcome.gif;
    if (oHead) oHead.textContent = outcome.title;
    if (oDetails) oDetails.textContent = outcome.desc;

    if (oBadge) {
      if (isSafe) {
        oBadge.className = 'ab-outcome-badge safe';
        oBadge.textContent = '✨ SAFE! 0 PTS PENALTY ✨';
      } else {
        oBadge.className = 'ab-outcome-badge penalty';
        oBadge.textContent = '⚡ PENALTY! -2 POINTS ⚡';
      }
    }

    if (card) {
      card.classList.remove('hidden');
    }

    // After 1.3s, show the 5-second reward points announcement popup
    setTimeout(() => {
      if (this.currentScreen === 'abPenalty') {
        this.showRewardPointsPopup({
          title: isSafe ? '✨ SAFE! 0 POINTS PENALTY ✨' : `⚡ -2 POINTS FOR TEAM ${this.activeTeam}! ⚡`,
          desc: isSafe
            ? `${this.activeTeam === 'A' ? 'TEAM A' : 'TEAM B'} made the right choice! No points deducted.`
            : `${this.activeTeam === 'A' ? 'TEAM A' : 'TEAM B'} fell into the trap! (-2 Points).`,
          pts: ptsChange,
          isPenalty: !isSafe,
          icon: isSafe ? 'assets/image36.png' : 'assets/image31.png'
        });
      }
    }, 1300);
  }

  returnToQuestionAfterPenalty() {
    if (this.penaltyTimer) {
      clearTimeout(this.penaltyTimer);
      this.penaltyTimer = null;
    }

    const card = document.getElementById('ab-outcome-card');
    if (card) card.classList.add('hidden');

    this.isHandlingPenaltyTrial = false;

    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    if (qData) {
      this.completedQuestions.add(qData.number);
      this.renderQuestionGrid();
    }

    // Return to question screen
    this.switchScreen('question');

    // Reveal correct answer in green, chosen wrong answer stays in red
    this.revealAnswersAfterWrong();

    // Pulse red return seal to guide presenter/team back to board
    const redBtn = document.getElementById('btn-q-red');
    if (redBtn) {
      redBtn.classList.add('glow');
    }

    // Green seal should be disabled (no reward chamber for wrong answer)
    const greenBtn = document.getElementById('btn-q-green');
    if (greenBtn) {
      greenBtn.classList.remove('glow', 'enabled');
    }
  }

  revealAnswersAfterWrong() {
    const qData = QUESTIONS_DATA[this.currentQuestionIdx];
    if (!qData) return;

    if (qData.isOpenEnded) {
      const bannerEl = document.getElementById('q-correct-banner');
      if (bannerEl) bannerEl.style.display = 'none';

      const revealBtn = document.getElementById('btn-reveal-answer');
      if (revealBtn) revealBtn.style.display = 'none';

      const reviewBox = document.getElementById('q-openended-review-box');
      if (reviewBox) reviewBox.style.display = 'flex';

      const confirmSection = document.getElementById('review-confirm-section');
      if (confirmSection) confirmSection.style.display = 'none';

      const statusBadge = document.getElementById('review-status-badge');
      if (statusBadge) {
        statusBadge.style.display = 'block';
        statusBadge.className = 'review-status-badge wrong';
        statusBadge.textContent = '✖ ĐÃ TRẢ LỜI SAI (INCORRECT)';
      }

      this.showToast('Đáp án: Quasi-. Bấm triện đỏ (Board) để trở về bàn cờ.', 'info');
      return;
    }

    // 1. Show correct answer banner at bottom
    const bannerEl = document.getElementById('q-correct-banner');
    if (bannerEl) {
      bannerEl.style.display = '';
      bannerEl.classList.add('show');
    }

    // 2. Hide reveal button if open-ended mode
    const revealBtn = document.getElementById('btn-reveal-answer');
    if (revealBtn) revealBtn.style.display = 'none';

    // 3. Highlight options: Correct in GREEN, Wrong remains RED
    const optionBtns = document.querySelectorAll('#q-options-container .pill-option-btn');
    optionBtns.forEach(btn => {
      const text = btn.textContent.trim();
      if (
        text.startsWith(qData.correct + '.') ||
        text.startsWith(qData.correct + ' ') ||
        text === qData.correctText ||
        text === qData.options[qData.correct]
      ) {
        btn.classList.add('correct');
        btn.classList.remove('wrong');
      }
    });

    this.showToast('Correct answer revealed in green. Click red seal to return to board.', 'info');
  }

  openRewardScreen() {
    if (this.autoRewardTimer) {
      clearTimeout(this.autoRewardTimer);
      this.autoRewardTimer = null;
    }
    if (this.victoryTimer) {
      clearTimeout(this.victoryTimer);
      this.victoryTimer = null;
    }
    if (this.rewardPopupTimer) {
      clearTimeout(this.rewardPopupTimer);
      this.rewardPopupTimer = null;
    }
    if (this.rewardPopupInterval) {
      clearInterval(this.rewardPopupInterval);
      this.rewardPopupInterval = null;
    }
    const popupEl = document.getElementById('reward-points-popup');
    if (popupEl) popupEl.classList.remove('active');

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
    if (this.rewardPopupTimer) {
      clearTimeout(this.rewardPopupTimer);
      this.rewardPopupTimer = null;
    }
    if (this.rewardPopupInterval) {
      clearInterval(this.rewardPopupInterval);
      this.rewardPopupInterval = null;
    }
    const popupEl = document.getElementById('reward-points-popup');
    if (popupEl) popupEl.classList.remove('active');

    document.getElementById('reward-minigame-container')?.classList.remove('sorting-hats-mode');
    if (this.globalScoreboard) this.globalScoreboard.classList.remove('hidden');

    window.soundEngine.playClick();
    this.toggleTurn(); // Switch turn to next team
    this.switchScreen('grid');

    if (this.completedQuestions.size >= 16) {
      this.showToast('🏆 All 16 questions complete! Preparing House Cup Ceremony...', 'success');
      setTimeout(() => {
        if (this.currentScreen === 'grid') {
          this.openFinaleScreen();
        }
      }, 2200);
    }
  }

  showRewardPointsPopup(data) {
    if (this.rewardPopupTimer) clearTimeout(this.rewardPopupTimer);
    if (this.rewardPopupInterval) clearInterval(this.rewardPopupInterval);

    const popupEl = document.getElementById('reward-points-popup');
    if (!popupEl) return;

    const titleEl = document.getElementById('popup-pts-title');
    const descEl = document.getElementById('popup-pts-desc');
    const graphicEl = document.getElementById('popup-pts-graphic');
    const scoreAEl = document.getElementById('popup-score-a');
    const scoreBEl = document.getElementById('popup-score-b');
    const btnLabelEl = document.getElementById('popup-btn-label');
    const barEl = document.getElementById('popup-progress-bar');

    if (titleEl) {
      titleEl.textContent = data.title || `+${data.pts} POINTS!`;
      if (data.isPenalty) {
        titleEl.classList.add('penalty-title');
      } else {
        titleEl.classList.remove('penalty-title');
      }
    }

    if (descEl) descEl.textContent = data.desc || '';
    if (graphicEl) graphicEl.src = data.icon || 'assets/image36.png';
    if (scoreAEl) scoreAEl.textContent = this.scores.A;
    if (scoreBEl) scoreBEl.textContent = this.scores.B;

    // Animate progress bar over 5.0 seconds
    if (barEl) {
      barEl.style.transition = 'none';
      barEl.style.width = '100%';
      barEl.style.background = data.isPenalty
        ? 'linear-gradient(90deg, #ff5252, #e53935)'
        : 'linear-gradient(90deg, #ffd700, #4caf50)';
      setTimeout(() => {
        barEl.style.transition = 'width 5s linear';
        barEl.style.width = '0%';
      }, 50);
    }

    // 5-second countdown on button
    let remainingSec = 5;
    const btnPrefix = this.isHandlingPenaltyTrial ? 'REVIEW QUESTION' : 'RETURN TO QUESTION BOARD';
    if (btnLabelEl) btnLabelEl.textContent = `${btnPrefix} (${remainingSec}s)`;

    this.rewardPopupInterval = setInterval(() => {
      remainingSec--;
      if (remainingSec > 0 && btnLabelEl) {
        btnLabelEl.textContent = `${btnPrefix} (${remainingSec}s)`;
      } else if (remainingSec <= 0) {
        clearInterval(this.rewardPopupInterval);
      }
    }, 1000);

    // Confetti sparks
    if (data.pts > 0) {
      this.triggerMagicSparks();
    }

    // Show popup
    popupEl.classList.add('active');

    // Auto return after 5 seconds
    this.rewardPopupTimer = setTimeout(() => {
      this.closeRewardPopupAndReturn();
    }, 5050);
  }

  closeRewardPopupAndReturn() {
    if (this.rewardPopupTimer) {
      clearTimeout(this.rewardPopupTimer);
      this.rewardPopupTimer = null;
    }
    if (this.rewardPopupInterval) {
      clearInterval(this.rewardPopupInterval);
      this.rewardPopupInterval = null;
    }

    const popupEl = document.getElementById('reward-points-popup');
    if (popupEl) {
      popupEl.classList.remove('active');
    }

    if (this.isHandlingPenaltyTrial) {
      this.isHandlingPenaltyTrial = false;
      this.returnToQuestionAfterPenalty();
      return;
    }

    this.returnToGridFromReward();
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

  // ==================== 15 MINIGAMES IMPLEMENTATION ====================
  loadMinigame(questionNum, type) {
    const container = document.getElementById('reward-minigame-container');
    container.innerHTML = '';

    // Authentic Slide Background Mapping from LSGTDA.pptx
    const minigameBgMap = {
      supplies: 'assets/image11.jpg',   // Slide 20
      friend: 'assets/image32.jpg',     // Slide 21 (Great Hall)
      letter: 'assets/image39.gif',     // Slide 22 (Hogwarts Letters)
      duel: 'assets/image45.jpg',       // Slide 25 (Dueling Club stage)
      cards1: 'assets/image11.jpg',     // Slide 26 (Test your luck)
      duelRival: 'assets/image60.gif',  // Slide 27 (Duel rival)
      voldemort: 'assets/image64.gif',  // Slide 30 (Voldemort attacks)
      classes: 'assets/image68.jpg',    // Slide 33 (Classroom parchment)
      owl: 'assets/image75.jpg',        // Slide 34 (Eeylops Owl Emporium)
      cards2: 'assets/image11.jpg',     // Slide 35 (Test your luck 2)
      bowls: 'assets/image86.jpg',      // Slide 36 (Potions Dungeon)
      hippogriff: 'assets/image92.gif', // Slide 37 (Hippogriff)
      snitch: 'assets/image95.jpg',     // Slide 40 (Quidditch pitch)
      sortingHats: 'assets/sorting_hats_clean_bg.png', // Slide 41 (Great Hall Sorting)
      patronus: 'assets/image109.jpg',  // Slide 42 (Forbidden Forest)
      mysteryGift: 'assets/image109.jpg'// Q16 Bonus
    };

    container.classList.remove('sorting-hats-mode');
    if (type === 'sortingHats') {
      container.classList.add('sorting-hats-mode');
      if (this.globalScoreboard) this.globalScoreboard.classList.add('hidden');
    } else {
      if (this.globalScoreboard) this.globalScoreboard.classList.remove('hidden');
    }

    const bgUrl = minigameBgMap[type] || 'assets/image11.jpg';
    container.style.backgroundImage = `url('${bgUrl}')`;
    container.style.backgroundSize = type === 'sortingHats' ? '100% 100%' : 'cover';
    container.style.backgroundPosition = 'center center';
    container.style.backgroundRepeat = 'no-repeat';

    // Header & Crest return button
    const topBar = document.createElement('div');
    topBar.className = 'reward-header-bar';
    const isMystery = type === 'mysteryGift' || questionNum === 16;
    const badgeText = isMystery ? 'SPECIAL MYSTERY BONUS' : `QUESTION ${questionNum} REWARD`;
    const defaultTitle = isMystery ? 'Hogwarts Mystery Gift!' : 'Hogwarts Mystery Reward';
    topBar.innerHTML = `
      <div class="reward-title-group">
        <span class="reward-badge">${badgeText}</span>
        <h2 id="reward-main-title" class="reward-title">${defaultTitle}</h2>
      </div>
      <button class="btn-crest-return" title="Return to 16 questions board">
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
      case 'mysteryGift':
        this.renderMysteryGiftMinigame(playArea);
        break;
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
        this.renderSortingHatsMinigame(playArea, container);
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
    let pickedSupplies = 0;
    let totalSuppliesPts = 0;

    const ptsImgMap = {
      1: 'assets/image27.png',
      2: 'assets/image28.png',
      3: 'assets/image29.png',
      4: 'assets/image30.png',
      5: 'assets/image12.png',
      6: 'assets/image13.png'
    };

    container.innerHTML = `
      <div class="supplies-game">
        <p class="game-instruction">Choose 1 item from each category: Ties - Wands - Books!</p>

        <!-- ROW 1: TIES -->
        <div class="supplies-category-block">
          <div class="category-title-badge">
            <span class="cat-tag">ROW 1</span>
            <h3>👔 Hogwarts Ties</h3>
            <span class="cat-hint">(Choose 1)</span>
          </div>
          <div class="supplies-row" data-cat="ties">
            <div class="supply-card tie-card" data-pts="1" data-name="Gryffindor Tie">
              <img src="assets/image22.png" alt="Gryffindor Tie">
              <span>Gryffindor Tie</span>
            </div>
            <div class="supply-card tie-card" data-pts="1" data-name="Slytherin Tie">
              <img src="assets/image23.png" alt="Slytherin Tie">
              <span>Slytherin Tie</span>
            </div>
            <div class="supply-card tie-card" data-pts="2" data-name="Ravenclaw Tie">
              <img src="assets/image24.png" alt="Ravenclaw Tie">
              <span>Ravenclaw Tie</span>
            </div>
            <div class="supply-card tie-card" data-pts="2" data-name="Hufflepuff Tie">
              <img src="assets/image25.png" alt="Hufflepuff Tie">
              <span>Hufflepuff Tie</span>
            </div>
          </div>
        </div>

        <!-- ROW 2: WANDS -->
        <div class="supplies-category-block">
          <div class="category-title-badge">
            <span class="cat-tag">ROW 2</span>
            <h3>🪄 Wizarding Wands</h3>
            <span class="cat-hint">(Choose 1)</span>
          </div>
          <div class="supplies-row" data-cat="wands">
            <div class="supply-card wand-card" data-pts="4" data-name="The Elder Wand">
              <img src="assets/image16.png" alt="The Elder Wand">
              <span>The Elder Wand</span>
            </div>
            <div class="supply-card wand-card" data-pts="2" data-name="Harry Potter's Wand">
              <img src="assets/image17.png" alt="Harry Potter's Wand">
              <span>Harry Potter's Wand</span>
            </div>
            <div class="supply-card wand-card" data-pts="1" data-name="Hermione Granger's Wand">
              <img src="assets/image15.png" alt="Hermione Granger's Wand">
              <span>Hermione Granger's Wand</span>
            </div>
            <div class="supply-card wand-card" data-pts="3" data-name="Ron Weasley's Wand">
              <img src="assets/image18.png" alt="Ron Weasley's Wand">
              <span>Ron Weasley's Wand</span>
            </div>
          </div>
        </div>

        <!-- ROW 3: BOOKS -->
        <div class="supplies-category-block">
          <div class="category-title-badge">
            <span class="cat-tag">ROW 3</span>
            <h3>📚 Magic Books</h3>
            <span class="cat-hint">(Choose 1)</span>
          </div>
          <div class="supplies-row" data-cat="books">
            <div class="supply-card book-card" data-pts="2" data-name="Advanced Potion Making">
              <img src="assets/image19.png" alt="Advanced Potion Making">
              <span>Advanced Potion Making</span>
            </div>
            <div class="supply-card book-card" data-pts="6" data-name="Dark Arts Defence">
              <img src="assets/image20.png" alt="Dark Arts Defence">
              <span>Dark Arts Defence</span>
            </div>
            <div class="supply-card book-card" data-pts="5" data-name="Quidditch Through the Ages">
              <img src="assets/image26.png" alt="Quidditch Through the Ages">
              <span>Quidditch Through the Ages</span>
            </div>
            <div class="supply-card book-card" data-pts="1" data-name="Fantastic Beasts and Where to Find Them">
              <img src="assets/image21.png" alt="Fantastic Beasts & Where to Find Them">
              <span>Fantastic Beasts & Where to Find Them</span>
            </div>
          </div>
        </div>
      </div>
    `;

    container.querySelectorAll('.supply-card').forEach(card => {
      card.addEventListener('click', () => {
        const row = card.closest('.supplies-row');
        if (card.classList.contains('revealed') || (row && row.classList.contains('row-locked')) || pickedSupplies >= 3) return;

        const pts = parseInt(card.dataset.pts);
        card.classList.add('revealed');

        // Lock this entire row so user can only pick 1 item from this category
        if (row) {
          row.classList.add('row-locked');
          row.querySelectorAll('.supply-card').forEach(c => {
            if (c !== card) c.style.pointerEvents = 'none';
          });
        }

        pickedSupplies++;
        totalSuppliesPts += pts;

        const ptsImg = ptsImgMap[pts] ? `<img src="${ptsImgMap[pts]}" class="pts-img" alt="+${pts}">` : `<span class="pts-emoji">✨</span>`;
        card.innerHTML += `
          <div class="reveal-badge">
            ${ptsImg}
            <div class="pts-title">+${pts} Point${pts > 1 ? 's' : ''}</div>
          </div>
        `;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playCorrect();

        if (pickedSupplies >= 3) {
          container.querySelectorAll('.supply-card').forEach(c => c.style.pointerEvents = 'none');
          window.soundEngine.playFanfare();
          setTimeout(() => {
            this.showRewardPointsPopup({
              pts: totalSuppliesPts,
              team: this.activeTeam,
              title: `+${totalSuppliesPts} POINTS FOR TEAM ${this.activeTeam}!`,
              desc: `Team ${this.activeTeam} bought all 3 school supplies (Ties, Wands, Books)!`,
              icon: 'assets/image36.png'
            });
          }, 850);
        }
      });
    });
  }

  // 2. Choose your best friend (Slide 21)
  renderFriendMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your best friend…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="1" data-name="Ron Weasley" data-badge="assets/image27.png">
          <img src="assets/image34.png" alt="Ron Weasley">
          <h3>Ron Weasley</h3>
          <div class="reveal-cover">Choose Ron</div>
        </div>
        <div class="choice-card" data-pts="3" data-name="Harry Potter" data-badge="assets/image29.png">
          <img src="assets/image35.png" alt="Harry Potter">
          <h3>Harry Potter</h3>
          <div class="reveal-cover">Choose Harry</div>
        </div>
        <div class="choice-card" data-pts="5" data-name="Hermione Granger" data-badge="assets/image12.png">
          <img src="assets/image33.png" alt="Hermione Granger">
          <h3>Hermione Granger</h3>
          <div class="reveal-cover">Choose Hermione</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        container.querySelectorAll('.choice-card').forEach(c => c.style.pointerEvents = 'none');
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        const name = card.dataset.name;
        const badge = card.dataset.badge;

        card.querySelector('.reveal-cover').innerHTML = `
          <img src="${badge}" class="badge-reveal-icon" alt="+${pts} pts">
          <span class="pts-text">+${pts} POINT${pts > 1 ? 'S' : ''}!</span>
        `;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playFanfare();

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: pts,
            team: this.activeTeam,
            title: `+${pts} POINT${pts > 1 ? 'S' : ''} FOR TEAM ${this.activeTeam}!`,
            desc: `Team ${this.activeTeam} chose ${name} and earned +${pts} point${pts > 1 ? 's' : ''}!`,
            icon: badge
          });
        }, 800);
      });
    });
  }

  // 3. Hogwarts Letter (Slide 22, 23, 24)
  renderLetterMinigame(container) {
    document.getElementById('reward-main-title').textContent = "You finally get your letter from Hogwarts!";
    const winningChoice = Math.random() < 0.5 ? 'A' : 'B';

    container.innerHTML = `
      <div class="letter-reveal-game">
        <div id="letter-stage" class="letter-stage-card">
          <div class="letter-seal-header">
            <span class="letter-badge-pill">✉️ HOGWARTS ACCEPTANCE LETTER ✉️</span>
          </div>
          <h2 class="letter-stage-title">You finally get your letter from Hogwarts!</h2>
          <p class="letter-stage-instruction">Thousands of letters are filling the room! Choose Letter <strong>A</strong> or Letter <strong>B</strong>:</p>

          <div class="letter-choice-row">
            <!-- CHOICE A -->
            <button id="btn-letter-choice-a" class="letter-choice-btn" data-choice="A" title="Choose Letter A">
              <div class="letter-medallion-wrap">
                <img src="assets/image40.png" alt="Letter A" class="letter-choice-medallion">
              </div>
              <div class="letter-choice-label">
                <span class="choice-main-text">LETTER A</span>
                <span class="choice-sub-text">⚡ Open this letter ⚡</span>
              </div>
            </button>

            <!-- CHOICE B -->
            <button id="btn-letter-choice-b" class="letter-choice-btn" data-choice="B" title="Choose Letter B">
              <div class="letter-medallion-wrap">
                <img src="assets/image41.png" alt="Letter B" class="letter-choice-medallion">
              </div>
              <div class="letter-choice-label">
                <span class="choice-main-text">LETTER B</span>
                <span class="choice-sub-text">⚡ Open this letter ⚡</span>
              </div>
            </button>
          </div>
        </div>

        <div id="letter-outcome" class="letter-outcome-card hidden"></div>
      </div>
    `;

    const stage = container.querySelector('#letter-stage');
    const outcome = container.querySelector('#letter-outcome');
    const buttons = container.querySelectorAll('.letter-choice-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        buttons.forEach(b => b.disabled = true);
        btn.classList.add('selected');

        const isLucky = (choice === winningChoice);

        setTimeout(() => {
          stage.style.display = 'none';
          outcome.classList.remove('hidden');

          if (isLucky) {
            outcome.innerHTML = `
              <img src="assets/image42.gif" class="letter-outcome-gif" alt="Welcome to Hogwarts">
              <h2 class="outcome-title win">Welcome to Hogwarts!</h2>
              <p class="outcome-desc">Congratulations! You caught your official Hogwarts acceptance letter!</p>
              <div class="pts-award">+10 POINTS FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 10);
            window.soundEngine.playFanfare();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 10,
                team: this.activeTeam,
                title: `+10 POINTS FOR TEAM ${this.activeTeam}!`,
                desc: 'Welcome to Hogwarts! Letter accepted.',
                icon: 'assets/image43.png'
              });
            }, 1200);
          } else {
            outcome.innerHTML = `
              <img src="assets/image42.gif" class="letter-outcome-gif" alt="Hogwarts Letter Snippet">
              <h2 class="outcome-title win">Letter Snippet Retrieved!</h2>
              <p class="outcome-desc">An owl safely slipped an official Hogwarts letter snippet into your hands!</p>
              <div class="pts-award">+1 POINT FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 1);
            window.soundEngine.playCorrect();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 1,
                team: this.activeTeam,
                title: `+1 POINT FOR TEAM ${this.activeTeam}!`,
                desc: 'You caught a flying Hogwarts letter snippet! +1 Point.',
                icon: 'assets/image27.png'
              });
            }, 1200);
          }
        }, 300);
      });
    });
  }

  // 4. Choose someone to duel (Slide 25)
  // 4. Choose someone to duel (Slide 25)
  renderDuelMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose someone to duel…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="1" data-name="Draco Malfoy" data-badge="assets/image27.png">
          <img src="assets/image46.png" alt="Draco Malfoy">
          <h3>Draco Malfoy</h3>
          <div class="reveal-cover">Duel Draco</div>
        </div>
        <div class="choice-card" data-pts="5" data-name="Severus Snape" data-badge="assets/image12.png">
          <img src="assets/image48.png" alt="Severus Snape">
          <h3>Severus Snape</h3>
          <div class="reveal-cover">Duel Snape</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Pansy Parkinson" data-badge="assets/image28.png">
          <img src="assets/image47.png" alt="Pansy Parkinson">
          <h3>Pansy Parkinson</h3>
          <div class="reveal-cover">Duel Pansy</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        container.querySelectorAll('.choice-card').forEach(c => c.style.pointerEvents = 'none');
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        const name = card.dataset.name;
        const badge = card.dataset.badge;

        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS VICTORY!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playFanfare();

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: pts,
            team: this.activeTeam,
            title: `+${pts} POINTS FOR TEAM ${this.activeTeam}!`,
            desc: name === 'Severus Snape'
              ? `You held your ground in a magnificent duel against Professor Snape! +${pts} Points!`
              : `You defeated ${name} in a magical duel! +${pts} Points!`,
            icon: badge
          });
        }, 800);
      });
    });
  }

  // 5. Test your luck! (Slide 26 & 35)
  renderCardsMinigame(container, isRound2 = false) {
    document.getElementById('reward-main-title').textContent = isRound2 ? "Test your luck! (Round 2)" : "Test your luck!";
    let currentLevel = 1;
    const cardLevels = [
      { pts: 1, img: 'assets/image51.png', label: '+1 POINT' },
      { pts: 2, img: 'assets/image53.png', label: '+2 POINTS' },
      { pts: 3, img: 'assets/image55.png', label: '+3 POINTS' },
      { pts: 4, img: 'assets/image57.png', label: '+4 POINTS' }
    ];
    let gameOver = false;

    container.innerHTML = `
      <div class="cards-luck-game">
        <p class="game-instruction">Keep the card you have or draw more for more points! Even if the magic flares, you always keep at least +1 point!</p>
        <div class="card-display">
          <div class="crest-card active-card">
            <img id="active-card-img" src="${cardLevels[0].img}" alt="Hogwarts Card">
            <div id="card-status-text" class="card-pts-overlay">${cardLevels[0].label}</div>
          </div>
        </div>
        <div class="luck-controls">
          <button id="btn-draw-more" class="magic-action-btn">DRAW MORE (+POINTS)</button>
          <button id="btn-keep-pts" class="magic-action-btn keep">KEEP POINTS & STOP</button>
        </div>
      </div>
    `;

    const cardImg = container.querySelector('#active-card-img');
    const statusText = container.querySelector('#card-status-text');
    const drawBtn = container.querySelector('#btn-draw-more');
    const keepBtn = container.querySelector('#btn-keep-pts');

    drawBtn.addEventListener('click', () => {
      if (gameOver) return;
      window.soundEngine.playClick();
      const isBomb = Math.random() < 0.35 || currentLevel >= cardLevels.length;
      if (isBomb) {
        gameOver = true;
        cardImg.src = 'assets/image59.png';
        statusText.innerHTML = `<span style="color:#ffd700">⚡ SHIELD CHARM!</span><br><small>Retained +1 Point!</small>`;
        window.soundEngine.playWandSpell();
        drawBtn.disabled = true;
        keepBtn.disabled = true;
        this.adjustScore(this.activeTeam, 1);

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: 1,
            team: this.activeTeam,
            title: `+1 POINT FOR TEAM ${this.activeTeam}!`,
            desc: `Your shield charm absorbed the blast and retained +1 point!`,
            icon: 'assets/image27.png'
          });
        }, 1200);
      } else {
        const nextCard = cardLevels[currentLevel];
        currentLevel++;
        cardImg.src = nextCard.img;
        statusText.innerHTML = nextCard.label;
        window.soundEngine.playCorrect();
        if (currentLevel >= cardLevels.length) {
          drawBtn.disabled = true;
          drawBtn.textContent = 'MAX DRAW REACHED';
        }
      }
    });

    keepBtn.addEventListener('click', () => {
      if (gameOver) return;
      gameOver = true;
      drawBtn.disabled = true;
      keepBtn.disabled = true;
      const finalPts = cardLevels[currentLevel - 1].pts;
      statusText.innerHTML = `COLLECTED +${finalPts} POINTS!`;
      this.adjustScore(this.activeTeam, finalPts);
      window.soundEngine.playFanfare();

      setTimeout(() => {
        this.showRewardPointsPopup({
          pts: finalPts,
          team: this.activeTeam,
          title: `+${finalPts} POINTS FOR TEAM ${this.activeTeam}!`,
          desc: `You safely kept your +${finalPts} points!`,
          icon: cardLevels[currentLevel - 1].img
        });
      }, 800);
    });
  }

  // 6. Duel with rival (Slide 27, 28, 29)
  renderDuelRivalMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Your rival challenges you to a duel.";
    const winningChoice = Math.random() < 0.5 ? 'A' : 'B';

    container.innerHTML = `
      <div class="ab-challenge-game">
        <div id="duel-stage" class="ab-stage-card">
          <div class="ab-seal-header">
            <span class="ab-badge-pill">⚔️ WIZARD DUEL WITH RIVAL ⚔️</span>
          </div>
          <h2 class="ab-stage-title">Your rival challenges you to a duel.</h2>
          <p class="ab-stage-instruction">Your rival raises their wand! Choose Spell Stance <strong>A</strong> or Spell Stance <strong>B</strong>:</p>

          <div class="ab-choice-row">
            <!-- CHOICE A -->
            <button id="btn-duel-choice-a" class="ab-choice-btn" data-choice="A" title="Choose Stance A (Expelliarmus)">
              <div class="ab-medallion-wrap">
                <img src="assets/image40.png" alt="Spell A" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">SPELL A</span>
                <span class="choice-sub-text">⚡ Expelliarmus! ⚡</span>
              </div>
            </button>

            <!-- CHOICE B -->
            <button id="btn-duel-choice-b" class="ab-choice-btn" data-choice="B" title="Choose Stance B (Stupefy)">
              <div class="ab-medallion-wrap">
                <img src="assets/image41.png" alt="Spell B" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">SPELL B</span>
                <span class="choice-sub-text">⚡ Stupefy! ⚡</span>
              </div>
            </button>
          </div>
        </div>

        <div id="duel-outcome" class="ab-stage-outcome-card hidden"></div>
      </div>
    `;

    const stage = container.querySelector('#duel-stage');
    const outcome = container.querySelector('#duel-outcome');
    const buttons = container.querySelectorAll('.ab-choice-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        buttons.forEach(b => b.disabled = true);
        btn.classList.add('selected');

        const isLucky = (choice === winningChoice);

        setTimeout(() => {
          stage.style.display = 'none';
          outcome.classList.remove('hidden');

          if (isLucky) {
            outcome.innerHTML = `
              <img src="assets/image63.gif" class="ab-stage-outcome-gif" alt="You won the duel">
              <h2 class="outcome-title win">You won!</h2>
              <p class="outcome-desc">You successfully disarmed your opponent with Expelliarmus! +4 Points awarded!</p>
              <div class="pts-award">+4 POINTS FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 4);
            window.soundEngine.playFanfare();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 4,
                team: this.activeTeam,
                title: `+4 POINTS FOR TEAM ${this.activeTeam}!`,
                desc: `Team ${this.activeTeam} won the duel and earned +4 points!`,
                icon: 'assets/image30.png'
              });
            }, 1200);
          } else {
            outcome.innerHTML = `
              <img src="assets/image63.gif" class="ab-stage-outcome-gif" alt="Honorable duel">
              <h2 class="outcome-title win">Honorable Duel!</h2>
              <p class="outcome-desc">Your shields clashed fiercely! You held your ground and earned +1 Point!</p>
              <div class="pts-award">+1 POINT FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 1);
            window.soundEngine.playCorrect();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 1,
                team: this.activeTeam,
                title: `+1 POINT FOR TEAM ${this.activeTeam}!`,
                desc: `You stood firm against your rival and earned +1 Point.`,
                icon: 'assets/image27.png'
              });
            }, 1200);
          }
        }, 300);
      });
    });
  }

  // 7. Voldemort attacks! (Slide 30, 31, 32)
  renderVoldemortMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Voldemort attacks!";
    const winningChoice = Math.random() < 0.5 ? 'A' : 'B';

    container.innerHTML = `
      <div class="ab-challenge-game">
        <div id="voldemort-stage" class="ab-stage-card">
          <div class="ab-seal-header">
            <span class="ab-badge-pill">🔥 DARK LORD CONFRONTATION 🔥</span>
          </div>
          <h2 class="ab-stage-title">Voldemort attacks!</h2>
          <p class="ab-stage-instruction">Lord Voldemort strikes with dark magic! Choose Shield Stance <strong>A</strong> or Shield Stance <strong>B</strong>:</p>

          <div class="ab-choice-row">
            <!-- CHOICE A -->
            <button id="btn-voldemort-choice-a" class="ab-choice-btn" data-choice="A" title="Choose Shield A (Protego Maxima)">
              <div class="ab-medallion-wrap">
                <img src="assets/image40.png" alt="Shield A" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">SHIELD A</span>
                <span class="choice-sub-text">⚡ Protego Maxima ⚡</span>
              </div>
            </button>

            <!-- CHOICE B -->
            <button id="btn-voldemort-choice-b" class="ab-choice-btn" data-choice="B" title="Choose Shield B (Expecto Patronum)">
              <div class="ab-medallion-wrap">
                <img src="assets/image41.png" alt="Shield B" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">SHIELD B</span>
                <span class="choice-sub-text">⚡ Expecto Patronum ⚡</span>
              </div>
            </button>
          </div>
        </div>

        <div id="voldemort-outcome" class="ab-stage-outcome-card hidden"></div>
      </div>
    `;

    const stage = container.querySelector('#voldemort-stage');
    const outcome = container.querySelector('#voldemort-outcome');
    const buttons = container.querySelectorAll('.ab-choice-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        buttons.forEach(b => b.disabled = true);
        btn.classList.add('selected');

        const isLucky = (choice === winningChoice);

        setTimeout(() => {
          stage.style.display = 'none';
          outcome.classList.remove('hidden');

          if (isLucky) {
            outcome.innerHTML = `
              <img src="assets/image65.gif" class="ab-stage-outcome-gif" alt="You defeated Voldemort">
              <h2 class="outcome-title win">Expecto Patronum!</h2>
              <p class="outcome-desc">A blinding silver light repelled the Dark Lord! Grand +5 Points victory!</p>
              <div class="pts-award">+5 POINTS FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 5);
            window.soundEngine.playFanfare();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 5,
                team: this.activeTeam,
                title: `+5 POINTS FOR TEAM ${this.activeTeam}!`,
                desc: `You repelled the Dark Lord with a supreme Patronus (+5 pts)!`,
                icon: 'assets/image12.png'
              });
            }, 1200);
          } else {
            outcome.innerHTML = `
              <img src="assets/image65.gif" class="ab-stage-outcome-gif" alt="Shield held">
              <h2 class="outcome-title win">Protego Shield Held!</h2>
              <p class="outcome-desc">Your golden shield absorbed the curse and you stood fearless! +1 Point awarded!</p>
              <div class="pts-award">+1 POINT FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 1);
            window.soundEngine.playCorrect();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 1,
                team: this.activeTeam,
                title: `+1 POINT FOR TEAM ${this.activeTeam}!`,
                desc: `Your shield held against dark magic! +1 Point for bravery.`,
                icon: 'assets/image27.png'
              });
            }, 1200);
          }
        }, 300);
      });
    });
  }

  // 8. Choose 3 classes to take (Slide 33)
  renderClassesMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose 3 classes to take…";
    let pickedCount = 0;
    let totalClassesPts = 0;
    const classes = [
      { name: "Muggle Studies", pts: 3, icon: "assets/classes/class_book_muggle_studies.png", badge: "assets/image29.png" },
      { name: "Potions", pts: 2, icon: "assets/classes/class_book_potions.png", badge: "assets/image28.png" },
      { name: "History of Magic", pts: 1, icon: "assets/classes/class_book_history_of_magic.png", badge: "assets/image27.png" },
      { name: "Divination", pts: 2, icon: "assets/classes/class_book_divination.png", badge: "assets/image28.png" },
      { name: "Astronomy", pts: 1, icon: "assets/classes/class_book_astronomy.png", badge: "assets/image27.png" },
      { name: "Defense Against Dark Arts", pts: 5, icon: "assets/classes/class_book_defense_dark_arts.png", badge: "assets/image12.png" },
      { name: "Magical Theory", pts: 2, icon: "assets/classes/class_book_magical_theory.png", badge: "assets/image28.png" },
      { name: "Herbology", pts: 1, icon: "assets/classes/class_book_herbology.png", badge: "assets/image27.png" },
      { name: "Care of Magical Creatures", pts: 4, icon: "assets/classes/class_book_magical_creatures.png", badge: "assets/image30.png" },
      { name: "Charms", pts: 1, icon: "assets/classes/class_book_charms.png", badge: "assets/image27.png" }
    ];

    container.innerHTML = `
      <div class="classes-game">
        <p class="game-instruction">Choose 3 classes to earn cumulative points: <span id="classes-counter">0/3</span></p>
        <div class="classes-grid">
          ${classes.map((c, idx) => `
            <div class="class-card" data-idx="${idx}" data-pts="${c.pts}">
              <img src="${c.icon}" alt="${c.name}" class="class-icon-img">
              <h4>${c.name}</h4>
              <div class="class-reveal-overlay">
                <img src="${c.badge}" alt="${c.pts} pts" class="class-badge-img">
                <span class="class-pts-text">+${c.pts} PTS</span>
              </div>
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
        totalClassesPts += pts;
        counter.textContent = `${pickedCount}/3`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playCorrect();

        if (pickedCount === 3) {
          container.querySelectorAll('.class-card').forEach(c => c.style.pointerEvents = 'none');
          window.soundEngine.playFanfare();
          setTimeout(() => {
            this.showRewardPointsPopup({
              pts: totalClassesPts,
              team: this.activeTeam,
              title: `+${totalClassesPts} POINTS FOR TEAM ${this.activeTeam}!`,
              desc: `You completed all 3 Hogwarts classes!`,
              icon: 'assets/image36.png'
            });
          }, 800);
        }
      });
    });
  }

  // 9. Choose your pet owl (Slide 34)
  renderOwlMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your pet owl…";
    container.innerHTML = `
      <div class="three-choice-game">
        <div class="choice-card" data-pts="4" data-name="Hedwig (Snowy Owl)" data-badge="assets/image30.png">
          <img src="assets/image78.png" alt="Hedwig">
          <h3>Hedwig (Snowy Owl)</h3>
          <div class="reveal-cover">Choose Hedwig</div>
        </div>
        <div class="choice-card" data-pts="2" data-name="Errol (Tawny Owl)" data-badge="assets/image28.png">
          <img src="assets/image76.png" alt="Errol">
          <h3>Errol (Tawny Owl)</h3>
          <div class="reveal-cover">Choose Errol</div>
        </div>
        <div class="choice-card" data-pts="1" data-name="Eagle Owl" data-badge="assets/image27.png">
          <img src="assets/image77.png" alt="Eagle Owl">
          <h3>Eagle Owl</h3>
          <div class="reveal-cover">Choose Eagle Owl</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        // Lock other cards immediately so user can only choose 1
        container.querySelectorAll('.choice-card').forEach(c => c.style.pointerEvents = 'none');
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        const name = card.dataset.name;
        const badge = card.dataset.badge;

        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINT${pts > 1 ? 'S' : ''} REWARD!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playFanfare();

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: pts,
            team: this.activeTeam,
            title: `+${pts} POINT${pts > 1 ? 'S' : ''} FOR TEAM ${this.activeTeam}!`,
            desc: name === 'Eagle Owl'
              ? `The fierce Eagle Owl delivered your message with sharp speed (+${pts} pt)!`
              : `You chose ${name} as your loyal companion (+${pts} pts)!`,
            icon: badge
          });
        }, 800);
      });
    });
  }

  // 11. Cast Wingardium Leviosa on 3 bowls (Slide 36)
  renderBowlsMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Cast Wingardium Leviosa on 3 bowls to reveal your points…";
    let pickedCount = 0;
    let totalBowlsPts = 0;

    // Authentic 12 bowls from Slide 36
    const bowlsData = [
      { num: 1, pts: 1, badge: 'assets/image88.png', label: '+1 Point' },
      { num: 2, pts: 2, badge: 'assets/image28.png', label: '+2 Points' },
      { num: 3, pts: 3, badge: 'assets/image29.png', label: '+3 Points' },
      { num: 4, pts: 1, badge: 'assets/image88.png', label: '+1 Point' },
      { num: 5, pts: 5, badge: 'assets/image12.png', label: '+5 Points' },
      { num: 6, pts: 2, badge: 'assets/image28.png', label: '+2 Points' },
      { num: 7, pts: 3, badge: 'assets/image29.png', label: '+3 Points' },
      { num: 8, pts: 2, badge: 'assets/image28.png', label: '+2 Points' },
      { num: 9, pts: 1, badge: 'assets/image88.png', label: '+1 Point' },
      { num: 10, pts: 4, badge: 'assets/image30.png', label: '+4 Points' },
      { num: 11, pts: 1, badge: 'assets/image88.png', label: '+1 Point' },
      { num: 12, pts: 2, badge: 'assets/image28.png', label: '+2 Points' }
    ];

    container.innerHTML = `
      <div class="bowls-game">
        <p class="game-instruction">Cast Wingardium Leviosa on 3 bowls to levitate them and reveal your points: <span id="bowls-counter">0/3</span></p>
        <div class="bowls-grid">
          ${bowlsData.map((bowl, idx) => `
            <div class="bowl-card" data-idx="${idx}" data-pts="${bowl.pts}">
              <div class="bowl-number">${bowl.num}</div>
              <div class="bowl-visual-wrap">
                <img src="assets/image91.png" alt="Bowl ${bowl.num}" class="bowl-img">
                <div class="bowl-badge-reveal">
                  <img src="${bowl.badge}" alt="${bowl.label}" class="bowl-badge-img">
                </div>
              </div>
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
        totalBowlsPts += pts;
        counter.textContent = `${pickedCount}/3`;

        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playWandSpell();

        if (pickedCount === 3) {
          container.querySelectorAll('.bowl-card').forEach(c => c.style.pointerEvents = 'none');
          window.soundEngine.playFanfare();
          setTimeout(() => {
            this.showRewardPointsPopup({
              pts: totalBowlsPts,
              team: this.activeTeam,
              title: `+${totalBowlsPts} POINTS FOR TEAM ${this.activeTeam}!`,
              desc: `You levitated 3 enchanted bowls with Wingardium Leviosa!`,
              icon: 'assets/image36.png'
            });
          }, 800);
        }
      });
    });
  }

  // 12. Hippogriff in the forest (Slide 37, 38, 39)
  renderHippogriffMinigame(container) {
    document.getElementById('reward-main-title').textContent = "You find a hippogriff in the forest.";
    const winningChoice = Math.random() < 0.5 ? 'A' : 'B';

    container.innerHTML = `
      <div class="ab-challenge-game">
        <div id="hippo-stage" class="ab-stage-card">
          <div class="ab-seal-header">
            <span class="ab-badge-pill">🦅 FORBIDDEN FOREST ENCOUNTER 🦅</span>
          </div>
          <h2 class="ab-stage-title">You find a hippogriff in the forest.</h2>
          <p class="ab-stage-instruction">You encounter Buckbeak the Hippogriff! Maintain eye contact and choose Bow <strong>A</strong> or Bow <strong>B</strong>:</p>

          <div class="ab-choice-row">
            <!-- CHOICE A -->
            <button id="btn-hippo-choice-a" class="ab-choice-btn" data-choice="A" title="Choose Approach A (Bow Deeply)">
              <div class="ab-medallion-wrap">
                <img src="assets/image40.png" alt="Bow A" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">BOW A</span>
                <span class="choice-sub-text">⚡ Bow Deeply ⚡</span>
              </div>
            </button>

            <!-- CHOICE B -->
            <button id="btn-hippo-choice-b" class="ab-choice-btn" data-choice="B" title="Choose Approach B (Steady Gaze)">
              <div class="ab-medallion-wrap">
                <img src="assets/image41.png" alt="Bow B" class="ab-choice-medallion">
              </div>
              <div class="ab-choice-label">
                <span class="choice-main-text">BOW B</span>
                <span class="choice-sub-text">⚡ Steady Gaze ⚡</span>
              </div>
            </button>
          </div>
        </div>

        <div id="hippo-outcome" class="ab-stage-outcome-card hidden"></div>
      </div>
    `;

    const stage = container.querySelector('#hippo-stage');
    const outcome = container.querySelector('#hippo-outcome');
    const buttons = container.querySelectorAll('.ab-choice-btn');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const choice = btn.dataset.choice;
        buttons.forEach(b => b.disabled = true);
        btn.classList.add('selected');

        const isLucky = (choice === winningChoice);

        setTimeout(() => {
          stage.style.display = 'none';
          outcome.classList.remove('hidden');

          if (isLucky) {
            outcome.innerHTML = `
              <img src="assets/image93.gif" class="ab-stage-outcome-gif" alt="Hippogriff friend">
              <h2 class="outcome-title win">It sees you as a friend!</h2>
              <p class="outcome-desc">Buckbeak bowed back respectfully and invited you to fly over the castle! +5 Points!</p>
              <div class="pts-award">+5 POINTS FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 5);
            window.soundEngine.playFanfare();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 5,
                team: this.activeTeam,
                title: `+5 POINTS FOR TEAM ${this.activeTeam}!`,
                desc: `Buckbeak bowed back and welcomed you!`,
                icon: 'assets/image12.png'
              });
            }, 1200);
          } else {
            outcome.innerHTML = `
              <img src="assets/image93.gif" class="ab-stage-outcome-gif" alt="Hippogriff calm">
              <h2 class="outcome-title win">Buckbeak bows respectfully!</h2>
              <p class="outcome-desc">You maintained calm eye contact! Buckbeak accepted your greeting and granted +1 Point!</p>
              <div class="pts-award">+1 POINT FOR TEAM ${this.activeTeam}</div>
            `;
            this.adjustScore(this.activeTeam, 1);
            window.soundEngine.playCorrect();

            setTimeout(() => {
              this.showRewardPointsPopup({
                pts: 1,
                team: this.activeTeam,
                title: `+1 POINT FOR TEAM ${this.activeTeam}!`,
                desc: `Buckbeak acknowledged your calm bow! +1 Point.`,
                icon: 'assets/image27.png'
              });
            }, 1200);
          }
        }, 300);
      });
    });
  }

  // 13 & 16. Catch the golden snitch for 10pts! (Slide 40)
  renderSnitchWheelMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Catch the golden snitch for 10pts!";
    container.innerHTML = `
      <div class="quidditch-wheel-game">
        <div class="quidditch-stage">
          <div class="wheel-container">
            <div id="quidditch-wheel" class="quidditch-wheel">
              <img src="assets/image96.png" alt="Quidditch Wheel">
            </div>
            <div class="wheel-pointer">🔻</div>
          </div>
          <img src="assets/image97.png" class="harry-seeker" alt="Harry Seeker">
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
        { name: "⚡ Golden Chaser Goal! +1 Point", pts: 1 },
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
        } else {
          window.soundEngine.playCorrect();
        }

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: win.pts,
            team: this.activeTeam,
            title: `+${win.pts} POINTS FOR TEAM ${this.activeTeam}!`,
            desc: win.name,
            icon: 'assets/image36.png'
          });
        }, 1200);
      }, 4700);
    });
  }

  // 14. Choose 4 sorting hats! (Slide 41 Authentic)
  renderSortingHatsMinigame(playArea, container) {
    if (container) {
      container.classList.add('sorting-hats-mode');
    }
    const mainTitle = document.getElementById('reward-main-title');
    if (mainTitle) mainTitle.textContent = "Choose 4 sorting hats!";

    let selectedCount = 0;
    let totalHatsPts = 0;

    // Authentic 6x5 matrix mapping directly from Slide 41 - all awarding house points (min +1 pt)!
    const hatGridData = [
      // Row A (1 to 5)
      { id: 'A1', pts: 4, type: 'gryffindor', crest: 'assets/image99.png', label: '+4 PTS', desc: 'Gryffindor' },
      { id: 'A2', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'A3', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'A4', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'A5', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },

      // Row B (1 to 5)
      { id: 'B1', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'B2', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },
      { id: 'B3', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'B4', pts: 4, type: 'gryffindor', crest: 'assets/image99.png', label: '+4 PTS', desc: 'Gryffindor' },
      { id: 'B5', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },

      // Row C (1 to 5)
      { id: 'C1', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'C2', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },
      { id: 'C3', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },
      { id: 'C4', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'C5', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },

      // Row D (1 to 5)
      { id: 'D1', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },
      { id: 'D2', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'D3', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'D4', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'D5', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },

      // Row E (1 to 5)
      { id: 'E1', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'E2', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'E3', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'E4', pts: 3, type: 'slytherin', crest: 'assets/image100.png', label: '+3 PTS', desc: 'Slytherin' },
      { id: 'E5', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },

      // Row F (1 to 5)
      { id: 'F1', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'F2', pts: 4, type: 'gryffindor', crest: 'assets/image99.png', label: '+4 PTS', desc: 'Gryffindor' },
      { id: 'F3', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
      { id: 'F4', pts: 1, type: 'hufflepuff', crest: 'assets/image102.png', label: '+1 PT', desc: 'Hufflepuff' },
      { id: 'F5', pts: 2, type: 'ravenclaw', crest: 'assets/image101.png', label: '+2 PTS', desc: 'Ravenclaw' },
    ];

    playArea.innerHTML = `
      <div class="sorting-hats-stage">
        <!-- 30 Sorting Hats 5x6 Grid on Left Side -->
        <div class="sorting-hats-grid-overlay">
          ${hatGridData.map((item, idx) => `
            <button class="sorting-hat-cell" data-idx="${idx}" data-id="${item.id}" data-pts="${item.pts}" data-type="${item.type}" title="Hat ${item.id}">
              <img src="assets/sorting_hat_medallion.png" class="hat-medallion-img" alt="Sorting Hat ${item.id}">
              <div class="hat-revealed-content">
                ${item.crest ? `<img src="${item.crest}" class="revealed-house-crest" alt="${item.desc}">` : `<span class="empty-poof-icon">✨</span>`}
                <span class="revealed-pts-tag pts-${item.type}">${item.label}</span>
              </div>
            </button>
          `).join('')}
        </div>

        <!-- Right Side Interactive Status Panel (between title and legend) -->
        <div class="sorting-hats-status-panel">
          <div class="status-team-badge">
            <span class="status-icon">${this.activeTeam === 'A' ? '🦁' : '🐍'}</span>
            <span class="status-label">TEAM ${this.activeTeam}:</span>
            <span id="sorting-hats-team-pts" class="status-val gold">${this.scores[this.activeTeam]} PTS</span>
          </div>
          <div class="status-counter-badge">
            <span class="status-icon">🎩</span>
            <span class="status-label">CHOSEN:</span>
            <span id="sorting-hats-counter" class="status-val gold">0 / 4</span>
          </div>
          <div class="status-score-badge">
            <span class="status-icon">✨</span>
            <span class="status-label">CEREMONY:</span>
            <span id="sorting-hats-total-pts" class="status-val">+0 PTS</span>
          </div>
        </div>

        <!-- Hotspot at bottom right for Hogwarts quad crest return -->
        <div id="btn-sorting-hats-crest-return" class="sorting-hats-crest-hotspot" title="Return to Board (Hotkey: Esc / Left Arrow)"></div>
      </div>
    `;

    const counterEl = playArea.querySelector('#sorting-hats-counter');
    const totalPtsEl = playArea.querySelector('#sorting-hats-total-pts');

    playArea.querySelectorAll('.sorting-hat-cell').forEach(cell => {
      cell.addEventListener('click', (e) => {
        e.stopPropagation();
        if (cell.classList.contains('picked') || selectedCount >= 4) return;

        selectedCount++;
        cell.classList.add('picked');
        counterEl.textContent = `${selectedCount} / 4`;

        const pts = parseInt(cell.dataset.pts);
        const type = cell.dataset.type;
        totalHatsPts += pts;

        totalPtsEl.textContent = `+${totalHatsPts} PTS`;
        totalPtsEl.classList.add('gold');

        const teamPtsEl = playArea.querySelector('#sorting-hats-team-pts');

        this.adjustScore(this.activeTeam, pts);
        if (teamPtsEl) teamPtsEl.textContent = `${this.scores[this.activeTeam]} PTS`;
        window.soundEngine.playCorrect();
        this.showToast(`Found Hat ${cell.dataset.id} (${cell.dataset.type.toUpperCase()}): +${pts} Points!`, 'success');

        if (selectedCount === 4) {
          playArea.querySelectorAll('.sorting-hat-cell').forEach(c => c.style.pointerEvents = 'none');
          setTimeout(() => {
            window.soundEngine.playFanfare();
            this.triggerVictoryCelebration();
            this.showRewardPointsPopup({
              pts: totalHatsPts,
              team: this.activeTeam,
              title: `+${totalHatsPts} POINTS FOR TEAM ${this.activeTeam}!`,
              desc: `Sorting Hat Ceremony Complete! Selected 4 hats.`,
              icon: 'assets/image36.png'
            });
          }, 800);
        }
      });
    });

    const returnHotspot = playArea.querySelector('#btn-sorting-hats-crest-return');
    if (returnHotspot) {
      returnHotspot.addEventListener('click', () => {
        this.returnToGridFromReward();
      });
    }
  }

  // 15. Choose your Patronus… (Slide 42)
  renderPatronusMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Choose your Patronus…";
    container.innerHTML = `
      <div class="three-choice-game patronus-theme">
        <div class="choice-card" data-pts="2" data-name="Cat Patronus (McGonagall)" data-badge="assets/image28.png">
          <img src="assets/image111.png" alt="Cat Patronus">
          <h3>Cat Patronus</h3>
          <div class="reveal-cover">Choose Cat</div>
        </div>
        <div class="choice-card" data-pts="5" data-name="Stag Patronus (Harry)" data-badge="assets/image12.png">
          <img src="assets/image112.png" alt="Stag Patronus">
          <h3>Stag Patronus</h3>
          <div class="reveal-cover">Choose Stag</div>
        </div>
        <div class="choice-card" data-pts="1" data-name="Wolf Patronus (Lupin)" data-badge="assets/image27.png">
          <img src="assets/image110.png" alt="Wolf Patronus">
          <h3>Wolf Patronus</h3>
          <div class="reveal-cover">Choose Wolf</div>
        </div>
      </div>
    `;

    container.querySelectorAll('.choice-card').forEach(card => {
      card.addEventListener('click', () => {
        if (card.classList.contains('picked')) return;
        // Lock all choices so player can only pick 1
        container.querySelectorAll('.choice-card').forEach(c => c.style.pointerEvents = 'none');
        card.classList.add('picked');
        const pts = parseInt(card.dataset.pts);
        const name = card.dataset.name;
        const badge = card.dataset.badge;

        card.querySelector('.reveal-cover').innerHTML = `<span class="pts-text">+${pts} POINTS REWARD!</span>`;
        this.adjustScore(this.activeTeam, pts);
        window.soundEngine.playFanfare();

        setTimeout(() => {
          this.showRewardPointsPopup({
            pts: pts,
            team: this.activeTeam,
            title: `+${pts} POINTS FOR TEAM ${this.activeTeam}!`,
            desc: `Your ${name} guided your team with pure silver light (+${pts} pts)!`,
            icon: badge
          });
        }, 800);
      });
    });
  }

  // 16. Hogwarts Mystery Gift! (+2 Points)
  renderMysteryGiftMinigame(container) {
    document.getElementById('reward-main-title').textContent = "Hogwarts Mystery Gift!";
    container.innerHTML = `
      <div class="mystery-gift-game">
        <div class="mystery-gift-card">
          <div class="mystery-flourish">✨ 🎁 ✨</div>
          <h2 class="mystery-title">HOGWARTS SECRET GIFT CHEST</h2>
          <p class="mystery-subtitle">No question required! A mysterious treasure awaits <strong>Team ${this.activeTeam}</strong>!</p>
          <div class="mystery-chest-container">
            <img src="assets/image50.jpg" alt="Mystery Chest" class="mystery-chest-img pulse">
            <div class="mystery-chest-sparkles"></div>
          </div>
          <button id="btn-open-mystery-chest" class="magic-action-btn pulse">
            ⚡ OPEN MYSTERY CHEST ⚡
          </button>
          <div id="mystery-chest-outcome" class="outcome-box hidden">
            <h2 class="outcome-title win">✨ +2 BONUS POINTS! ✨</h2>
            <p class="outcome-desc">Team ${this.activeTeam} unlocked the secret Hogwarts treasure chest!</p>
          </div>
        </div>
      </div>
    `;

    const openBtn = container.querySelector('#btn-open-mystery-chest');
    const outcomeBox = container.querySelector('#mystery-chest-outcome');

    openBtn.addEventListener('click', () => {
      openBtn.style.display = 'none';
      outcomeBox.classList.remove('hidden');

      this.completedQuestions.add(16);
      this.renderQuestionGrid();

      this.adjustScore(this.activeTeam, 2);
      window.soundEngine.playFanfare();
      this.triggerMagicSparks();

      setTimeout(() => {
        this.showRewardPointsPopup({
          pts: 2,
          team: this.activeTeam,
          title: `+2 POINTS FOR TEAM ${this.activeTeam}!`,
          desc: `🎁 MYSTERY GIFT! Team ${this.activeTeam} unlocked the Secret Hogwarts Chest!`,
          icon: 'assets/image36.png'
        });
      }, 800);
    });
  }

  // ==================== GRAND FINALE & HOUSE CUP CEREMONY ====================
  openFinaleScreen() {
    if (this.finaleTimer) clearTimeout(this.finaleTimer);
    if (this.finaleCountInterval) clearInterval(this.finaleCountInterval);

    window.soundEngine.playWandSpell();
    this.switchScreen('finale');
    this.runFinaleCeremony();
  }

  runFinaleCeremony() {
    if (this.finaleTimer) clearTimeout(this.finaleTimer);
    if (this.finaleCountInterval) clearInterval(this.finaleCountInterval);

    const tallyBox = document.getElementById('finale-tally-box');
    const winnerBanner = document.getElementById('finale-winner-banner');
    if (tallyBox) tallyBox.classList.remove('hidden');
    if (winnerBanner) winnerBanner.classList.add('hidden');

    const podiumA = document.getElementById('podium-team-a');
    const podiumB = document.getElementById('podium-team-b');
    const badgeA = document.getElementById('status-badge-team-a');
    const badgeB = document.getElementById('status-badge-team-b');
    const scoreAEl = document.getElementById('finale-score-a');
    const scoreBEl = document.getElementById('finale-score-b');
    const tallyStatus = document.getElementById('finale-tally-status');

    if (podiumA) podiumA.classList.remove('winner-elevated');
    if (podiumB) podiumB.classList.remove('winner-elevated');
    if (badgeA) {
      badgeA.className = 'podium-status-tag';
      badgeA.textContent = 'FINALIST';
    }
    if (badgeB) {
      badgeB.className = 'podium-status-tag';
      badgeB.textContent = 'FINALIST';
    }

    if (scoreAEl) scoreAEl.textContent = '0';
    if (scoreBEl) scoreBEl.textContent = '0';
    if (tallyStatus) tallyStatus.textContent = 'TALLYING HOUSE POINTS...';

    const targetA = this.scores.A;
    const targetB = this.scores.B;
    const duration = 2400; // ms
    const steps = 40;
    const intervalTime = duration / steps;
    let step = 0;

    this.finaleCountInterval = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = progress * (2 - progress); // easeOutQuad
      const currentA = Math.round(targetA * eased);
      const currentB = Math.round(targetB * eased);

      if (scoreAEl) scoreAEl.textContent = currentA;
      if (scoreBEl) scoreBEl.textContent = currentB;

      if (step % 2 === 0) {
        window.soundEngine.playWheelTick();
      }

      if (step >= steps) {
        clearInterval(this.finaleCountInterval);
        this.finaleCountInterval = null;
        if (scoreAEl) scoreAEl.textContent = targetA;
        if (scoreBEl) scoreBEl.textContent = targetB;
        if (tallyStatus) tallyStatus.textContent = 'VERIFYING MAGICAL TALLY...';

        this.finaleTimer = setTimeout(() => {
          this.proclaimWinner(targetA, targetB);
        }, 600);
      }
    }, intervalTime);
  }

  proclaimWinner(scoreA, scoreB) {
    window.soundEngine.playVictoryFanfare();
    this.spawnFinaleSparks();

    const podiumA = document.getElementById('podium-team-a');
    const podiumB = document.getElementById('podium-team-b');
    const badgeA = document.getElementById('status-badge-team-a');
    const badgeB = document.getElementById('status-badge-team-b');
    const tallyStatus = document.getElementById('finale-tally-status');
    const winnerBanner = document.getElementById('finale-winner-banner');

    const ribbonText = document.getElementById('winner-crown-text');
    const headline = document.getElementById('winner-proclamation-title');
    const desc = document.getElementById('winner-proclamation-desc');
    const statWinner = document.getElementById('stat-winner-name');
    const statMargin = document.getElementById('stat-margin-value');

    if (scoreA > scoreB) {
      const margin = scoreA - scoreB;
      if (podiumA) podiumA.classList.add('winner-elevated');
      if (badgeA) {
        badgeA.className = 'podium-status-tag champion';
        badgeA.textContent = '👑 HOUSE CHAMPION';
      }
      if (badgeB) badgeB.textContent = 'HONORABLE FINALIST';
      if (tallyStatus) tallyStatus.textContent = 'GRYFFINDOR CLAIMS VICTORY!';

      if (ribbonText) ribbonText.textContent = '🦁 GRYFFINDOR TRIUMPHS! 🦁';
      if (headline) {
        headline.textContent = 'TEAM A WINS THE HOUSE CUP!';
        headline.style.color = '#ffd700';
      }
      if (desc) desc.textContent = 'Through exceptional courage, bravery, and magical intellect, Team A has led Gryffindor to victory!';
      if (statWinner) statWinner.textContent = 'Team A (Gryffindor 🦁)';
      if (statMargin) statMargin.textContent = `+${margin} Points (${scoreA} vs ${scoreB})`;
    } else if (scoreB > scoreA) {
      const margin = scoreB - scoreA;
      if (podiumB) podiumB.classList.add('winner-elevated');
      if (badgeB) {
        badgeB.className = 'podium-status-tag champion';
        badgeB.textContent = '👑 HOUSE CHAMPION';
      }
      if (badgeA) badgeA.textContent = 'HONORABLE FINALIST';
      if (tallyStatus) tallyStatus.textContent = 'SLYTHERIN CLAIMS VICTORY!';

      if (ribbonText) ribbonText.textContent = '🐍 SLYTHERIN TRIUMPHS! 🐍';
      if (headline) {
        headline.textContent = 'TEAM B WINS THE HOUSE CUP!';
        headline.style.color = '#69f0ae';
      }
      if (desc) desc.textContent = 'Through cunning, resourcefulness, and superior wizarding strategy, Team B has seized victory for Slytherin!';
      if (statWinner) statWinner.textContent = 'Team B (Slytherin 🐍)';
      if (statMargin) statMargin.textContent = `+${margin} Points (${scoreB} vs ${scoreA})`;
    } else {
      if (podiumA) podiumA.classList.add('winner-elevated');
      if (podiumB) podiumB.classList.add('winner-elevated');
      if (badgeA) {
        badgeA.className = 'podium-status-tag champion';
        badgeA.textContent = '👑 CO-CHAMPION';
      }
      if (badgeB) {
        badgeB.className = 'podium-status-tag champion';
        badgeB.textContent = '👑 CO-CHAMPION';
      }
      if (tallyStatus) tallyStatus.textContent = 'HISTORIC DRAW!';

      if (ribbonText) ribbonText.textContent = '🤝 HISTORIC DRAW: CO-CHAMPIONS! 🤝';
      if (headline) {
        headline.textContent = 'AN HONORABLE TIE BETWEEN HOUSES!';
        headline.style.color = '#ffe082';
      }
      if (desc) desc.textContent = 'Both noble Houses of Hogwarts have matched each other in wizarding skill and knowledge!';
      if (statWinner) statWinner.textContent = `Tie: Team A & Team B (${scoreA} pts)`;
      if (statMargin) statMargin.textContent = 'Equal Score (0 Margin)';
    }

    const tallyBox = document.getElementById('finale-tally-box');
    if (tallyBox) {
      tallyBox.classList.add('hidden');
    }

    if (winnerBanner) {
      winnerBanner.classList.remove('hidden');
    }
  }

  spawnFinaleSparks() {
    const container = document.getElementById('finale-sparks-container');
    if (!container) return;
    container.innerHTML = '';

    const colors = ['#ffd700', '#ff8a80', '#a5d6a7', '#80d8ff', '#ffffff', '#e5b95f'];
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        const spark = document.createElement('div');
        spark.className = 'magic-spark';
        const color = colors[Math.floor(Math.random() * colors.length)];
        const size = Math.random() * 14 + 8;
        spark.style.cssText = `
          left: ${Math.random() * 92 + 4}%;
          top: ${Math.random() * 75 + 10}%;
          width: ${size}px;
          height: ${size}px;
          background: ${color};
          box-shadow: 0 0 18px ${color};
        `;
        container.appendChild(spark);
        setTimeout(() => spark.remove(), 1600);
      }, i * 50);
    }
  }

  resetGameConfirm() {
    const confirmed = confirm("Are you sure you want to start a new championship? All scores and question progress will be reset.");
    if (confirmed) {
      this.resetGame();
    }
  }

  resetGame() {
    if (this.finaleTimer) clearTimeout(this.finaleTimer);
    if (this.finaleCountInterval) clearInterval(this.finaleCountInterval);

    this.scores = { A: 0, B: 0 };
    this.activeTeam = 'A';
    this.completedQuestions.clear();
    this.answeredCorrectly = false;
    this.currentQuestionIdx = 0;

    this.updateScoreboard();
    this.renderQuestionGrid();

    const finaleBanner = document.getElementById('grid-finale-banner');
    if (finaleBanner) finaleBanner.classList.add('hidden');

    window.soundEngine.playWandSpell();
    this.switchScreen('title');
    this.showToast('New Championship started! Welcome to Hogwarts.', 'info');
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
