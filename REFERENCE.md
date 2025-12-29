# TSR DOS Terminal Website - Development Reference

## Project Overview

A retro DOS-themed music interface website for the band "Terminate and Stay Resident" (TSR). Users interact with a virtual DOS terminal to play music, view artwork, read band lore, and explore band information. The interface is housed in an SVG illustration of a classic DOS-era computer that can be powered on/off.

**Band:** Terminate and Stay Resident  
**Album:** Carrier Wave (2024) - 15 tracks  
**Current Artwork:** assets/tsr1_cover_v2.png

---

## File Structure

```
TsrWebsite/
├── index.html           # Main HTML with inline SVG computer, terminal div, power button logic
├── styles.css           # DOS styling, CRT effects, responsive design
├── terminal.js          # Terminal logic, commands, virtual file system, audio playback
├── REFERENCE.md         # This documentation
└── assets/
    ├── tsr1_cover_v2.png    # Album artwork
    └── music/albums/CarrierWave/
        ├── 944_[SongName]_Mastered.mp3  # 15 MP3 tracks
        └── ... (15 total tracks)
```

---

## Key Technologies

- **Frontend:** Vanilla HTML/CSS/JavaScript (no frameworks)
- **Font:** Google Fonts - VT323 (monospace DOS-style)
- **Graphics:** Inline SVG (doscomputer.svg) with clickable power button
- **Audio:** HTML5 Audio API with custom playback controls
- **Visual Effects:** CSS pseudo-elements (::before, ::after) for scanlines, vignette, flicker
- **State Management:** Virtual File System (VFS) object tracking directories and files
- **Responsive:** Mobile-first design with fullscreen terminal on phones (≤768px)

---

## Architecture

### 1. Power Button & Computer Visual (`index.html`)

- SVG computer graphic with interactive power button element (`#power-button-group`)
- Power button click handler:
  - Toggles `isPoweredOn` flag
  - Removes `.hidden` class from terminal
  - Adds `body.mobile-fullscreen` class on mobile (≤768px)
  - Triggers boot sequence animation
  - Updates LED indicator color (#73d216 = green)
- On power off: restores computer visual, hides terminal, resets state

**Key Elements:**
- `#monitor-screen` - screen rectangle (filled with #111 off, #000 on)
- `#power-led` - LED indicator rectangle
- `#power-button-group` - clickable power button
- `#screen-off-text` - "Press power button to boot" text

### 2. Terminal Interface (`index.html`)

```html
<div class="terminal-overlay hidden" id="terminal">
    <div class="terminal-content" id="output"></div>
    <div class="input-line">
        <span class="prompt" id="prompt-text">C:\TSR></span>
        <input type="text" id="command-input">
        <span class="cursor"></span>
    </div>
</div>
```

- Terminal starts hidden (`.hidden` = `display: none !important`)
- Becomes visible when power button clicked (`.hidden` class removed)
- On mobile, becomes fullscreen with `position: fixed`
- Prompt dynamically updates based on current directory

### 3. Visual Effects (`styles.css`)

**CRT Monitor Scanlines:**
```css
repeating-linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.3),      /* dark lines */
    rgba(0, 0, 0, 0.3) 1px,
    transparent 1px,
    transparent 2px
)
```
Creates thin horizontal lines every 2px to simulate CRT scan lines.

**Vignette (Edge Darkening):**
```css
radial-gradient(
    ellipse at center,
    transparent 0%,
    transparent 60%,
    rgba(0, 0, 0, 0.4) 100%
)
```
Darkens edges/corners like old monitors.

**Screen Flicker:**
```css
animation: flicker 0.15s infinite;
opacity: 0.97 → 1.0 → 0.98
```
Subtle opacity changes for authentic CRT flicker effect.

**Text Glow:**
```css
text-shadow: 0 0 2px rgba(170, 170, 170, 0.5);
```
Phosphor-like glow on characters.

### 4. Terminal Commands System (`terminal.js`)

All commands defined in `COMMANDS` object with structure:
```javascript
{
    description: "What it does",
    usage: "command syntax",
    execute: (args) => functionName(args)
}
```

#### Music Commands
- **PLAY [#]** - Play specific track (1-15)
- **PLAY ALBUM [#]** - Play full album
- **STOP** - Stop playback
- **PAUSE** - Toggle pause/resume
- **VOLUME [0-100]** - Set volume
- **ALBUMS** - List albums
- **TRACKS [#]** - List tracks in album
- **ARTWORK [#]** - Display album artwork
- **DOWNLOAD [#]** - Trigger download

#### File System Commands
- **MD [dirname]** - Create directory (tracked in VFS)
- **RD [dirname]** - Remove directory (if empty)
- **CD [path]** - Change directory (validates against VFS)
- **PWD** - Print working directory
- **DIR** - List directory contents
- **DEL [filename]** - Delete file from current dir
- **COPY [src] [dest]** - Copy file (visual only)
- **TREE** - Display full directory tree
- **OPEN [filename]** - Open files (.JPG, .PNG, .TXT, .MP3)

#### Utility Commands
- **HELP [command]** - Show all commands or specific help
- **TIME** - Current system time
- **DATE** - Current system date
- **ECHO [text]** - Display text
- **TYPE [filename]** - Display file contents
- **PATH** - Show system PATH
- **SET** - Show environment variables
- **CLS** - Clear screen
- **LORE** - Band story/lore
- **BAND** - Band member info
- **SOCIAL** - Social media links
- **VER** - Version info
- **ABOUT** - About page
- **EXIT** - Exit terminal
- **DIR** - Directory listing

### 5. Virtual File System (VFS) (`terminal.js`)

Simulates a real file system tracked in memory:

```javascript
const VFS = {
    root: {
        subdirs: ['ALBUMS'],
        files: ['README.TXT', 'LORE.TXT', 'BAND.DAT', 'CONFIG.SYS', 'AUTOEXEC.BAT', 'ARTWORK.JPG'],
        parent: undefined
    },
    'ALBUMS': {
        subdirs: ['CARRIERWAVE'],
        files: [],
        parent: 'root'
    },
    'CARRIERWAVE': {
        subdirs: [],
        files: ['ARTWORK.JPG', '944_[TRACKS].MP3', ...],
        parent: 'ALBUMS'
    }
}

let currentDir = 'root';
```

**Key Functions:**
- `getCurrentPath()` - Returns current path like "C:\TSR\ALBUMS\CARRIERWAVE"
- `getPrompt()` - Returns prompt text with path (e.g., "C:\TSR\ALBUMS>")
- `updatePromptUI()` - Updates prompt display in HTML
- `changeDir(args)` - Navigate with validation
- `makeDir(args)` - Create new directory
- `removeDir(args)` - Delete directory (only if empty)
- `deleteFile(args)` - Remove file from current dir
- `listDir()` - Show directory contents
- `showTree()` - Display full tree structure

### 6. Audio Playback System (`terminal.js`)

**Audio Player Element:**
```html
<audio id="audio-player"></audio>
```

**Key Functions:**
- `playTrack(args)` - Load and play track by number (1-15)
- `stopPlayback()` - Stop and reset audio
- `togglePause()` - Pause/resume
- `setVolume(args)` - Set volume 0-100

**Important Details:**
- Uses `canplaythrough` event before calling play() (fixes first-play issues)
- Audio files: `assets/music/albums/CarrierWave/944_[SongName]_Mastered.mp3`
- Band data tracks array maps track # to filename
- "Now Playing" bar shows current song with pause/stop controls

**Audio Unlock:**
- Browser requires user interaction before playing audio
- Power button click sets `window.audioUnlocked = true`
- First playTrack() call also handles unlock manually

---

## Band Data Structure (`terminal.js`)

```javascript
const BAND_DATA = {
    name: "Terminate and Stay Resident",
    shortName: "TSR",
    formed: "2024",
    genre: "Electronic / Synthwave / Chiptune",
    members: [
        { name: "...", role: "...", bio: "..." },
        ...
    ],
    albums: [{
        id: "carrierwave",
        title: "CARRIER WAVE",
        year: "2024",
        artwork: "assets/tsr1_cover_v2.png",
        tracks: [
            { id: 1, title: "Dreaming", duration: "3:30", file: "944_Dreaming_Mastered.mp3" },
            ...
        ]
    }],
    lore: "Multi-line story text..."
}
```

---

## Boot Sequence

When power button clicked, `runBootSequence()` displays:
1. BIOS/System messages with delays
2. ASCII art logo
3. Welcome message
4. "Type HELP for available commands"

Controlled by `BOOT_SEQUENCE` array:
```javascript
const BOOT_SEQUENCE = [
    { delay: 100, text: "SYSTEM INITIALIZING..." },
    { delay: 200, text: "MEMORY CHECK COMPLETE" },
    { delay: 150, text: "LOADING TSR DOS..." },
    // ... more lines with delays
];
```

---

## Mobile Responsiveness

**Breakpoints:**
- `≤768px` - Mobile/tablet
- `≤480px` - Small phone

**Mobile Terminal:**
- Fixed position at bottom when keyboard shows
- Uses `visualViewport` API to detect keyboard height
- Includes safe-area padding for notches (`env(safe-area-inset-bottom)`)
- Becomes fullscreen (position: fixed, top: 0, left: 0, width: 100vw, height: 100vh)
- Computer visual hidden when `body.mobile-fullscreen` active

**Input Handling:**
```javascript
// Scroll input into view when focused
cmdInput.addEventListener('focus', function() {
    if (window.innerWidth <= 768) {
        setTimeout(() => {
            this.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 300);
    }
});

// Use visualViewport to track keyboard
if (window.visualViewport) {
    window.visualViewport.addEventListener('resize', () => {
        const keyboardHeight = window.innerHeight - window.visualViewport.height;
        inputLine.style.bottom = keyboardHeight + 'px';
    });
}
```

---

## Color Scheme (DOS Authentic)

```
Background:     #000 (black)
Text (default): #aaa (gray)
Text (red):     #fc5454 (bright red)
Text (green):   #54fc54 (bright green)
Text (cyan):    #54fcfc (bright cyan)
Text (yellow):  #fcfc54 (bright yellow)
```

CSS classes for colors:
```css
.command { color: #54fc54; }    /* green */
.info    { color: #54fcfc; }    /* cyan */
.error   { color: #fc5454; }    /* red */
```

---

## Common Extensions/Modifications

### Adding a New Command

1. Add to `COMMANDS` object in terminal.js:
```javascript
newcommand: {
    description: "What it does",
    usage: "newcommand [args]",
    execute: (args) => newCommandFunction(args)
}
```

2. Implement function:
```javascript
function newCommandFunction(args) {
    printToAll('');
    // do something
    printToAll('');
}
```

3. Add to HELP list in `showHelp()`:
```javascript
['NEWCMD', 'Description here']
```

### Adding a New Track

1. Convert audio to MP3: `ffmpeg -i file.wav -b:a 320k file.mp3`
2. Place in `assets/music/albums/CarrierWave/944_[Name]_Mastered.mp3`
3. Add to `BAND_DATA.albums[0].tracks`:
```javascript
{ id: 16, title: "New Track", duration: "3:45", file: "944_NewTrack_Mastered.mp3" }
```

### Changing Artwork

Update in two places:
1. `BAND_DATA.albums[0].artwork = "path/to/image.png"`
2. `getImagePath()` function to map filenames

### Netlify Function / Email Collection Proxy

You can deploy a small Netlify Function to accept POST requests from the terminal and forward them to your Netlify form. This avoids CORS issues when testing on localhost and provides a controllable backend endpoint.

- Place function in `netlify/functions/submit-email.js` (example provided in the repo). The function expects env vars:
  - `TARGET_URL` (e.g. `https://tsrwebsite.netlify.app/`)
  - `FORM_NAME` (e.g. `tsr-email-list`)
  - `FUNCTION_SECRET` (optional)

- Deploy to Netlify and set environment variables in the Site → Settings → Build & deploy → Environment.
- The function will be available at `https://<your-site>/.netlify/functions/submit-email`.
- Configure the terminal to use the function by running:
  - `SETNETLIFYFUNC https://<your-site>/.netlify/functions/submit-email <token>` (token optional)

- The `EMAILLIST` command will attempt the function first, then fallback to a direct Netlify form POST (no-cors) if the function or direct post fails.

This gives you reliable submissions and an inspected JSON response the terminal can use to confirm success.

### Styling Changes

All CSS in `styles.css`. Key sections:
- `.terminal-overlay` - Main terminal container
- `.terminal-content` - Output area
- `.input-line` - Command input area
- `.prompt`, `.command-input` - Prompt and input styling
- CRT effects in `::before` and `::after` pseudo-elements
- Media queries for mobile at bottom

---

## Boot Notes

- `hasBooted` flag prevents boot sequence from running twice
- `resetBootState()` called on power off to allow reboot on next power on
- Boot sequence is async with delays between lines
- Terminal content cleared on power off

---

## Keyboard Input

- **Enter** - Execute command
- **Arrow Up** - Previous command in history
- **Arrow Down** - Next command in history
- Command history stored in `commandHistory` array
- `historyIndex` tracks current position

---

## Debugging Tips

1. **Terminal not showing:** Check `.hidden` class is removed and CSS display rules
2. **Audio not playing:** Ensure `window.audioUnlocked = true` or user clicked power button
3. **Files not found:** Verify file exists in `VFS[currentDir].files`
4. **Command not working:** Check `COMMANDS` object has the command and function exists
5. **Mobile issues:** Test with browser DevTools mobile view, check viewport meta tag
6. **Styling:** CRT effects are in `::before` and `::after`, DON'T hide with `display: none`

---

## Performance Considerations

- VFS operations are O(1) lookups (directory as object keys)
- Boot sequence uses `async/await` with delays (won't freeze UI)
- Audio uses HTML5 native player (efficient)
- CSS animations are GPU-accelerated (smooth 60fps)
- Large output scrolls smoothly with `scrollToBottom()`

---

## Browser Compatibility

- Requires modern browser (ES6+ JavaScript)
- Audio API support required
- CSS Grid/Flexbox required
- SVG support required
- Mobile: iOS Safari 14+, Chrome Android

---

## Future Enhancement Ideas

- Save game state to localStorage (file system persistence)
- Multi-user system with LOGIN command
- Minigame integration (hidden Easter eggs)
- Keyboard sound effects (classic DOS beep)
- Network simulation (PING, TELNET commands)
- File upload/download (actual file handling)
- Multiplayer chat (if backend added)
- Animation improvements (smoother boot, type-in effects)

---

**Last Updated:** December 28, 2025  
**Version:** 1.0.0  
**Created for:** Future AI reference and developer onboarding
