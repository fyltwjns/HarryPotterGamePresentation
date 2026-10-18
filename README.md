# 🏰 Harry Potter and the Game of Knowledge
> An interactive presentation game web app converted from Microsoft PowerPoint, featuring original slide visuals, authentic sound effects, live team scoreboards, and 15 unique mystery reward minigames.

---

## 📖 Overview

**Harry Potter and the Game of Knowledge** is a gamified classroom/workshop presentation web application. It transforms a 42-slide PowerPoint presentation into an engaging, interactive, and responsive web game.

### 🌟 Key Highlights
- **100% Faithful Visuals**: Preserves original Hogwarts parchment aesthetics, coat of arms, four-house board map, and wax seals.
- **Strict 16:9 Aspect Ratio**: Scaled via smart responsive letterboxing (`1920x1080`), rendering crisply on any projector, TV, or laptop screen without layout distortion.
- **Zero Font Glitches & 100% English**: Clean typography hierarchy combining `'Cinzel'`, `'Playfair Display'`, and robust system fallbacks.
- **Dynamic Feedback & Animations**:
  - **Incorrect Choice**: Violent shake animation, red alert border, magic buzz penalty sound, and warning toasts.
  - **Correct Choice**: Shimmering gold glow, victory chimes, slide-in answer banner, and animated green seal.
- **15 Mystery Reward Minigames**: Each question unlocks a distinct Hogwarts-themed minigame (Quidditch Golden Snitch Wheel, Sorting Hats, Patronus summon, Wand duels, Wingardium Leviosa levitating bowls, etc.).
- **Live Team Scoreboard**: Real-time Team A vs Team B point tracking with quick adjustments (`+1` / `-1`) and turn switching.

---

## 📂 Repository Structure

```
.
├── .gitignore                     # Git ignore rules for OS, editors, and Python caches
├── README.md                      # Project documentation (English)
├── start_game.bat                 # One-click Windows runner
├── index.html                     # Application entry point (GitHub Pages ready)
│
├── src/                           # Frontend Source Code
│   ├── css/
│   │   └── style.css              # Master styling, Hogwarts theme, and animations
│   └── js/
│       ├── audio.js               # Web Audio API procedural sound engine
│       └── game.js                # Game lifecycle, 15 questions & 15 minigames logic
│
├── assets/                        # Extracted PowerPoint media files (Images, Icons, GIFs)
│   ├── image1.jpg ... image113.png
│
├── presentation/                  # PowerPoint Source Files
│   ├── LSGTDA.pptx                # Updated presentation with complete hyperlinks
│   └── LSGTDA_Original_Backup.pptx # Untouched original presentation backup
│
├── docs/                          # Guides & Slide References
│   ├── HUONG_DAN_SU_DUNG.md       # Vietnamese User Manual
│   └── slides_export/             # High-resolution PNG exports of all 42 slides
│       ├── slide_01.png ... slide_42.png
│
└── tools/                         # Extraction & PPTX Automation Tools
    ├── fix_css_urls.py            # CSS asset URL remapper
    ├── update_pptx.py             # PowerPoint COM automation script for hyperlinks
    ├── clean_questions.json       # Parsed clean question dataset
    ├── questions_data.json        # Raw question shape extraction data
    ├── slide_assets.json          # Slide-to-asset mapping table
    └── slides_data.json           # Slide animation and timing metadata
```

---

## 🚀 Getting Started

### Method 1: One-Click Runner (Windows)
Double-click `start_game.bat` in the root folder. It will:
1. Spin up a local Python HTTP server on port 8000.
2. Automatically launch your default web browser to `http://localhost:8000/index.html`.

### Method 2: Manual Start
You can serve the repository with any HTTP static server:
```bash
# Using Python
python -m http.server 8000

# Using Node.js (npx)
npx serve .
```
Then visit `http://localhost:8000` in your browser.

### Method 3: Direct File Opening
You can also open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari).

---

## 🎮 Game Rules & Workflow

1. **Title Screen**: Begin journey through the Hogwarts storm.
2. **Acceptance Letter**: Letter from Deputy Headmistress Minerva McGonagall to the *"Students of Silk Road"*.
3. **Rules**:
   - Class divided into **Team A** and **Team B**.
   - Teams take turns choosing question numbers on the board.
   - Correct answer unlocks the **Mystery Reward**.
4. **Question Board (Slide 4)**: 4 Hogwarts House zones with 15 questions. Completed questions are marked with a checkmark (✔).
5. **Question Screen**:
   - **Red Seal** (Bottom-left): Return to board at any time.
   - **Green Seal** (Bottom-right): Unlocks upon correct answer to proceed to reward.
6. **Reward Screen**: Play the unlocked minigame, earn/deduct team points, and click the **Return to Board** crest to switch turns.

---

## 🛠️ Tech Stack

- **HTML5 & CSS3**: Custom CSS variables, CSS grid/flexbox, keyframe animations.
- **JavaScript (ES6+)**: Vanilla object-oriented game engine, modular state management.
- **Web Audio API**: Synthesized procedural sound effects (chimes, wands, explosions, clicks) with zero external audio file dependencies.
- **Python & COM Interop**: OpenXML parsing and PowerPoint Automation (`win32com.client`).

---

## 📄 License
This project is for educational and classroom presentation purposes. Harry Potter and related trademarks belong to Warner Bros. and J.K. Rowling.
