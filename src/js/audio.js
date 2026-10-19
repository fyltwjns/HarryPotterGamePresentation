// Harry Potter Game of Knowledge - Magic Sound Engine using Web Audio API
class MagicAudio {
  constructor() {
    this.ctx = null;
    this.sfxMasterGain = null;
    this.muted = false;
    this.bgmAudio = null;
    this.bgmPlaying = false;

    // Both BGM (nhạc nền) and SFX (hiệu ứng) are set to strictly equal volume (1:1 parity)
    this.volume = 0.55;
    this.bgmVolume = 0.55;
    this.sfxVolume = 0.55;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        if (AudioContext) {
          this.ctx = new AudioContext();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (this.ctx && !this.sfxMasterGain) {
        this.sfxMasterGain = this.ctx.createGain();
        this.sfxMasterGain.gain.setValueAtTime(this.muted ? 0 : this.sfxVolume, this.ctx.currentTime);
        this.sfxMasterGain.connect(this.ctx.destination);
      }
    } catch (err) {
      console.warn('AudioContext init error:', err);
    }
    this.initBGM();
  }

  getSfxDestination() {
    if (!this.ctx) return null;
    if (!this.sfxMasterGain) {
      this.sfxMasterGain = this.ctx.createGain();
      this.sfxMasterGain.gain.setValueAtTime(this.muted ? 0 : this.sfxVolume, this.ctx.currentTime);
      this.sfxMasterGain.connect(this.ctx.destination);
    }
    return this.sfxMasterGain;
  }

  initBGM() {
    if (!this.bgmAudio) {
      this.bgmAudio = document.getElementById('bgm-audio');
      if (!this.bgmAudio) {
        this.bgmAudio = new Audio('assets/Harry%20Potter%20Hedwig%20s%20Song%20HQ.mp3');
        this.bgmAudio.id = 'bgm-audio';
      }
      this.bgmAudio.loop = true;
      // Nhạc nền bằng chính xác nhạc hiệu ứng
      this.bgmAudio.volume = this.muted ? 0 : this.bgmVolume;

      this.bgmAudio.addEventListener('play', () => {
        this.bgmPlaying = true;
      });
      this.bgmAudio.addEventListener('pause', () => {
        this.bgmPlaying = false;
      });
    }
  }

  startBGM() {
    if (this.muted) return;
    this.init();
    this.initBGM();
    if (this.bgmAudio) {
      this.bgmAudio.muted = false;
      this.bgmAudio.volume = this.bgmVolume;
      const promise = this.bgmAudio.play();
      if (promise !== undefined) {
        promise.then(() => {
          this.bgmPlaying = true;
        }).catch(err => {
          // Will start on the first user interaction gesture
          console.log('Autoplay deferred until user interaction:', err.message);
        });
      }
    }
  }

  stopBGM() {
    if (this.bgmAudio) {
      this.bgmAudio.pause();
      this.bgmPlaying = false;
    }
  }

  // Điều chỉnh cả nhạc nền và hiệu ứng luôn bằng nhau
  setEqualVolume(vol) {
    const clamped = Math.max(0, Math.min(1, vol));
    this.volume = clamped;
    this.bgmVolume = clamped;
    this.sfxVolume = clamped;

    if (this.bgmAudio) {
      this.bgmAudio.volume = this.muted ? 0 : this.bgmVolume;
    }
    if (this.ctx && this.sfxMasterGain) {
      this.sfxMasterGain.gain.setValueAtTime(this.muted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    this.init();
    this.initBGM();

    if (this.bgmAudio) {
      this.bgmAudio.muted = this.muted;
      if (this.muted) {
        this.bgmAudio.pause();
      } else {
        this.bgmAudio.volume = this.bgmVolume;
        this.bgmAudio.play().catch(() => {});
      }
    }

    if (this.ctx && this.sfxMasterGain) {
      this.sfxMasterGain.gain.setValueAtTime(this.muted ? 0 : this.sfxVolume, this.ctx.currentTime);
    }

    return this.muted;
  }

  playClick() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.35, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(dest);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6 (Major arpeggio)

    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + idx * 0.09);
      gain.gain.setValueAtTime(0, now + idx * 0.09);
      gain.gain.linearRampToValueAtTime(0.4, now + idx * 0.09 + 0.03);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.09 + 0.5);
      osc.connect(gain);
      gain.connect(dest);
      osc.start(now + idx * 0.09);
      osc.stop(now + idx * 0.09 + 0.5);
    });

    // Magic shimmer
    for (let i = 0; i < 5; i++) {
      const sOsc = this.ctx.createOscillator();
      const sGain = this.ctx.createGain();
      sOsc.type = 'sine';
      sOsc.frequency.setValueAtTime(1200 + i * 250, now + 0.35 + i * 0.06);
      sGain.gain.setValueAtTime(0.2, now + 0.35 + i * 0.06);
      sGain.gain.exponentialRampToValueAtTime(0.001, now + 0.35 + i * 0.06 + 0.25);
      sOsc.connect(sGain);
      sGain.connect(dest);
      sOsc.start(now + 0.35 + i * 0.06);
      sOsc.stop(now + 0.35 + i * 0.06 + 0.25);
    }
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    
    // Low harsh buzz
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(160, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.35);
    
    // Distortion filter
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);

    gain.gain.setValueAtTime(0.45, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  playWandSpell() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    
    // Whoosh + bell
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(300, now);
    osc.frequency.exponentialRampToValueAtTime(2200, now + 0.25);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.6);

    gain.gain.setValueAtTime(0.02, now);
    gain.gain.linearRampToValueAtTime(0.45, now + 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);

    osc.connect(gain);
    gain.connect(dest);
    osc.start(now);
    osc.stop(now + 0.6);
  }

  playBomb() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    
    // White noise explosion
    const bufferSize = this.ctx.sampleRate * 0.8;
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.linearRampToValueAtTime(80, now + 0.7);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.55, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.7);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(dest);

    noise.start(now);
    noise.stop(now + 0.7);
  }

  playWheelTick() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(1400, now);
    gain.gain.setValueAtTime(0.25, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
    osc.connect(gain);
    gain.connect(dest);
    osc.start(now);
    osc.stop(now + 0.03);
  }

  playFanfare() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest) return;
    const now = this.ctx.currentTime;
    const chords = [
      { t: 0.0, f: [523.25, 659.25, 783.99] }, // C
      { t: 0.15, f: [523.25, 659.25, 783.99] },
      { t: 0.3, f: [523.25, 659.25, 783.99] },
      { t: 0.5, f: [698.46, 880.00, 1046.50] }, // F
      { t: 0.8, f: [783.99, 987.77, 1174.66] }  // G
    ];

    chords.forEach(c => {
      c.f.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + c.t);
        gain.gain.setValueAtTime(0.25, now + c.t);
        gain.gain.exponentialRampToValueAtTime(0.001, now + c.t + 0.35);
        osc.connect(gain);
        gain.connect(dest);
        osc.start(now + c.t);
        osc.stop(now + c.t + 0.35);
      });
    });
  }

  playVictoryFanfare() {
    if (this.muted) return;
    this.init();
    const dest = this.getSfxDestination();
    if (!dest || !this.ctx) return;
    const now = this.ctx.currentTime;

    const notes = [
      { t: 0.0, f: [523.25, 659.25, 783.99], dur: 0.18 },
      { t: 0.2, f: [523.25, 659.25, 783.99], dur: 0.18 },
      { t: 0.4, f: [523.25, 659.25, 783.99], dur: 0.22 },
      { t: 0.65, f: [659.25, 783.99, 987.77], dur: 0.22 },
      { t: 0.9, f: [698.46, 880.00, 1046.50], dur: 0.35 },
      { t: 1.3, f: [783.99, 987.77, 1174.66], dur: 0.35 },
      { t: 1.7, f: [1046.50, 1318.51, 1567.98], dur: 1.2 }
    ];

    notes.forEach(n => {
      n.f.forEach(freq => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, now + n.t);

        gain.gain.setValueAtTime(0.02, now + n.t);
        gain.gain.linearRampToValueAtTime(0.3, now + n.t + 0.04);
        gain.gain.exponentialRampToValueAtTime(0.001, now + n.t + n.dur);

        osc.connect(gain);
        gain.connect(dest);
        osc.start(now + n.t);
        osc.stop(now + n.t + n.dur);
      });
    });

    for (let i = 0; i < 8; i++) {
      const sOsc = this.ctx.createOscillator();
      const sGain = this.ctx.createGain();
      sOsc.type = 'sine';
      sOsc.frequency.setValueAtTime(1400 + i * 200, now + 1.7 + i * 0.1);
      sGain.gain.setValueAtTime(0.2, now + 1.7 + i * 0.1);
      sGain.gain.exponentialRampToValueAtTime(0.001, now + 1.7 + i * 0.1 + 0.3);
      sOsc.connect(sGain);
      sGain.connect(dest);
      sOsc.start(now + 1.7 + i * 0.1);
      sOsc.stop(now + 1.7 + i * 0.1 + 0.3);
    }
  }
}

window.soundEngine = new MagicAudio();

// Auto-start Hedwig's Song BGM immediately when entering the website,
// and seamlessly handle browser autoplay permissions on first gesture
function setupAutoplayBGM() {
  const tryStart = () => {
    if (window.soundEngine) {
      window.soundEngine.init();
      window.soundEngine.startBGM();
    }
  };

  // 1. Try immediately
  tryStart();

  // 2. Try on DOMContentLoaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', tryStart);
  } else {
    tryStart();
  }

  // 3. Try on full window load
  window.addEventListener('load', tryStart);

  // 4. Fallback for strict browser autoplay policy: start on earliest user interaction
  const unlockEvents = ['click', 'pointerdown', 'keydown', 'touchstart'];
  const onFirstInteraction = () => {
    tryStart();
    if (window.soundEngine && window.soundEngine.bgmAudio && !window.soundEngine.bgmAudio.paused) {
      unlockEvents.forEach(evt => window.removeEventListener(evt, onFirstInteraction, true));
    }
  };
  unlockEvents.forEach(evt => window.addEventListener(evt, onFirstInteraction, { capture: true, passive: true }));
}

setupAutoplayBGM();
