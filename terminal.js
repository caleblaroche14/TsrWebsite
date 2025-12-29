// Terminate and Stay Resident - DOS Terminal Emulator
// =====================================================

// Data loading from external files
let BAND_INFO = {};
let BAND_MEMBERS = [];
let BAND_ALBUMS = [];
let BOOT_SEQUENCE_DATA = [];
let SOCIALS_DATA = [];

// Load all data files
async function loadDataFiles() {
    try {
        const [bandInfoRes, membersRes, albumsRes, bootRes, socialsRes] = await Promise.all([
            fetch('data/bandInfo.json'),
            fetch('data/members.json'),
            fetch('data/albums.json'),
            fetch('data/bootSequence.json'),
            fetch('data/socials.json')
        ]);

        const bandInfoData = await bandInfoRes.json();
        const membersData = await membersRes.json();
        const albumsData = await albumsRes.json();
        const bootData = await bootRes.json();
        const socialsData = await socialsRes.json();

        BAND_INFO = bandInfoData.band;
        BAND_MEMBERS = membersData.members;
        BAND_ALBUMS = albumsData.albums;
        BOOT_SEQUENCE_DATA = bootData.boot;
        SOCIALS_DATA = socialsData.socials;

        console.log('All data files loaded successfully');
    } catch (e) {
        console.error('Error loading data files:', e);
    }
}

// Create BAND_DATA object for backward compatibility
function getBandData() {
    return {
        ...BAND_INFO,
        members: BAND_MEMBERS,
        albums: BAND_ALBUMS
    };
}

// Legacy reference - will be populated after data loads
let BAND_DATA = {
    name: "Terminate and Stay Resident",
    shortName: "TSR",
    formed: "2024",
    genre: "Electronic / Synthwave / Chiptune",
    members: [],
    albums: []
};

// ASCII Art
const ASCII_LOGO = `
 ████████╗███████╗██████╗ 
 ╚══██╔══╝██╔════╝██╔══██╗
    ██║   ███████╗██████╔╝
    ██║   ╚════██║██╔══██╗
    ██║   ███████║██║  ██║
    ╚═╝   ╚══════╝╚═╝  ╚═╝
`;

// BOOT_SEQUENCE will be loaded from data/bootSequence.json
// This is populated after loadDataFiles() is called

const WELCOME_MESSAGE = `
████████╗███████╗██████╗ 
╚══██╔══╝██╔════╝██╔══██╗
   ██║   ███████╗██████╔╝
   ██║   ╚════██║██╔══██╗
   ██║   ███████║██║  ██║
   ╚═╝   ╚══════╝╚═╝  ╚═╝

TERMINATE AND STAY RESIDENT
----------------------------
TSR DOS Interface v1.0
(C) 2024 TSR Records

Type HELP for commands.
`;

// Flag to track if boot sequence has run
let hasBooted = false;

// Command definitions
const COMMANDS = {
    help: {
        description: "Display available commands",
        usage: "help [command]",
        execute: (args) => showHelp(args)
    },
    band: {
        description: "View band/artist info",
        usage: "band | band <member#>",
        execute: (args) => showBandInfo(args)
    },
    emaillist: {
        description: "Add your email to the mailing list",
        usage: "emaillist <email> [name]",
        execute: (args, rawArgs) => emailListCommand(args, rawArgs)
    },
    setnetlify: {
        description: "Configure Netlify form (url name [token])",
        usage: "setnetlify <url> <form-name> [token]",
        execute: (args) => setNetlify(args)
    },
    setnetlifyfunc: {
        description: "Configure Netlify function URL (url [token])",
        usage: "setnetlifyfunc <function-url> [token]",
        execute: (args) => setNetlifyFunc(args)
    },
    pushpending: {
        description: "Attempt to send pending saved email entries",
        usage: "pushpending",
        execute: () => pushPending()
    },
    clear: {
        description: "Clear the terminal",
        usage: "clear | cls",
        execute: () => clearTerminal()
    },
    cls: {
        description: "Clear the terminal",
        usage: "cls",
        execute: () => clearTerminal()
    },
    ver: {
        description: "Display version info",
        usage: "ver",
        execute: () => showVersion()
    },
    about: {
        description: "About this interface",
        usage: "about",
        execute: () => showAbout()
    },
    dir: {
        description: "List directory contents",
        usage: "dir",
        execute: () => listDir()
    },
    social: {
        description: "View social media links",
        usage: "social",
        execute: () => showSocial()
    },
    volume: {
        description: "Set playback volume",
        usage: "volume <0-100>",
        execute: (args) => setVolume(args)
    },
    time: {
        description: "Display system time",
        usage: "time",
        execute: () => showTime()
    },
    date: {
        description: "Display system date",
        usage: "date",
        execute: () => showDate()
    },
    echo: {
        description: "Display text on screen",
        usage: "echo <text>",
        execute: (args) => echoText(args)
    },
    type: {
        description: "Display file contents",
        usage: "type <filename>",
        execute: (args) => typeFile(args)
    },
    cd: {
        description: "Change directory",
        usage: "cd <path>",
        execute: (args) => changeDir(args)
    },
    pwd: {
        description: "Print working directory",
        usage: "pwd",
        execute: () => printWorkingDir()
    },
    md: {
        description: "Make directory",
        usage: "md <dirname>",
        execute: (args) => makeDir(args)
    },
    rd: {
        description: "Remove directory",
        usage: "rd <dirname>",
        execute: (args) => removeDir(args)
    },
    del: {
        description: "Delete file",
        usage: "del <filename>",
        execute: (args) => deleteFile(args)
    },
    copy: {
        description: "Copy file",
        usage: "copy <source> <dest>",
        execute: (args) => copyFile(args)
    },
    tree: {
        description: "Display directory tree",
        usage: "tree",
        execute: () => showTree()
    },
    path: {
        description: "Display system PATH",
        usage: "path",
        execute: () => showPath()
    },
    set: {
        description: "Set environment variables",
        usage: "set",
        execute: (args) => setEnv(args)
    },
    cls: {
        description: "Clear the screen",
        usage: "cls",
        execute: () => clearTerminal()
    },
    exit: {
        description: "Exit the terminal",
        usage: "exit",
        execute: () => exitTerminal()
    },
    open: {
        description: "Open a file",
        usage: "open <filename>",
        execute: (args) => openFile(args)
    },
    player: {
        description: "Launch audio player",
        usage: "player",
        execute: () => launchPlayer()
    }
};

// Virtual File System
const VFS = {
    root: {
        subdirs: ['ALBUMS'],
        files: ['README.TXT', 'BAND.DAT', 'CONFIG.SYS', 'AUTOEXEC.BAT', 'ARTWORK.JPG']
    },
    'ALBUMS': {
        subdirs: ['CARRIERWAVE'],
        files: [],
        parent: 'root'
    },
    'CARRIERWAVE': {
        subdirs: [],
        files: ['ARTWORK.JPG', '944_DREAMING_MASTERED.MP3', '944_ENCOUNTER_MASTERED.MP3', '944_ENGAGE_MASTERED.MP3', '944_JUNE_MASTERED.MP3', '944_LETTINGGO_MASTERED.MP3', '944_LIGHTSPEED_MASTERED.MP3', '944_LOCKEDIN_MASTERED.MP3', '944_PILOT_MASTERED.MP3', '944_RIDE_MASTERED.MP3', '944_SKYLINE_MASTERED.MP3', '944_SOUL_MASTERED.MP3', '944_STRAY_MASTERED.MP3', '944_TRANSMISSION_MASTERED.MP3', '944_TWOTHREE_MASTERED.MP3', '944_WAITING_MASTERED.MP3'],
        parent: 'ALBUMS'
    }
};

let currentDir = 'root';

// In-memory file contents store (path -> text)
const FILE_CONTENTS = {};

// Netlify form configuration (optional) - set these from your page or console when ready:
// window.NETLIFY_FORM_URL = 'https://your-site.netlify.app/';        // your site URL (Netlify will accept form POSTs to your site root)
// window.NETLIFY_FORM_NAME = 'tsr-email-list';                        // the 'form-name' used when building the Netlify form
// Optional token (for your serverless protection):
// window.NETLIFY_FORM_TOKEN = 'your-secret';                          // will be POSTed as 'token' field (optional)
// If no endpoint is configured or submission fails, submissions will be saved locally to EMAILLIST_PENDING.TXT (append mode).

// State
let currentAlbum = null;
let isPlaying = false;
let isPaused = false;
let commandHistory = [];
let historyIndex = -1;

// DOM Elements
let output, commandInput, promptText;
let audioPlayer;

// Player state
let playerMode = false;
let selectedTrackIndex = 0;
let playlistViewStart = 0;  // First visible song in the list
const PLAYLIST_VISIBLE = 3; // Show 3 songs at a time

// Web Audio API - Real audio visualization
let audioContext = null;
let analyser = null;
let audioSource = null;
let gainNode = null;
let audioBuffer = null;
let audioBufferSource = null;
let playerRenderLoop = null;
let visualizerData = new Uint8Array(32);

// Cached visualizer elements
let visualizerBars = [];
let visualizerContainer = null;

// Track playback state for Web Audio API
let webAudioCurrentTime = 0;
let isLoadingTrack = false; // Prevent multiple simultaneous track loads
let audioFetchController = null; // Abort controller for fetch requests
let webAudioDuration = 0;
let webAudioStartTime = 0;
let webAudioPausedTime = 0;

function initAudioContext() {
    if (audioContext) {
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
        return;
    }
    
    try {
        const AudioContextClass = window.AudioContext || window.webkitAudioContext;
        if (!AudioContextClass) {
            console.warn('AudioContext not supported');
            return;
        }
        
        audioContext = new AudioContextClass();
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 256;
        analyser.connect(audioContext.destination);
        
        // Create gain node for volume control
        gainNode = audioContext.createGain();
        gainNode.connect(analyser);
        gainNode.gain.value = 1.0;
        
        if (audioContext.state === 'suspended') {
            audioContext.resume();
        }
    } catch (e) {
        console.error('Failed to initialize audio context:', e);
    }
}

function getWebAudioCurrentTime() {
    if (!audioBufferSource || !webAudioStartTime) return 0;
    
    if (audioContext.state === 'running' && audioBufferSource && !webAudioPausedTime) {
        webAudioCurrentTime = (audioContext.currentTime - webAudioStartTime);
    }
    
    return Math.min(webAudioCurrentTime, webAudioDuration);
}

function updateVisualizerData() {
    if (!analyser) {
        visualizerData.fill(0);
        return;
    }
    
    try {
        analyser.getByteFrequencyData(visualizerData);
    } catch (e) {
        visualizerData.fill(0);
    }
}

function startPlayerRenderLoop() {
    if (playerRenderLoop) return;
    playerRenderLoop = setInterval(() => {
        if (playerMode) {
            renderPlayerUI();
        } else {
            if (playerRenderLoop) {
                clearInterval(playerRenderLoop);
                playerRenderLoop = null;
            }
        }
    }, 30); // Update ~33 times per second
}

// Update prompt in UI
function updatePromptUI() {
    const promptEl = document.getElementById('prompt-text');
    if (promptEl) {
        const pathEscaped = getCurrentPath().replace(/\\/g, '\\');
        promptEl.textContent = pathEscaped + '>';
    }
}

// Initialize
document.addEventListener('DOMContentLoaded', async () => {
    // Load all data files first
    await loadDataFiles();
    
    // Update BAND_DATA with loaded data
    BAND_DATA = getBandData();
    
    output = document.getElementById('output');
    commandInput = document.getElementById('command-input');
    promptText = document.getElementById('prompt-text');
    audioPlayer = document.getElementById('audio-player');

    // Setup event listeners
    if (commandInput && output) {
        setupInput(commandInput, output);
    }

    // Audio event listeners
    if (audioPlayer) {
        audioPlayer.addEventListener('ended', () => {
            isPlaying = false;
            hideNowPlaying();
        });
    }
});

// Reset boot state for power off/on cycle
function resetBootState() {
    hasBooted = false;
    isPlaying = false;
    isPaused = false;
    currentAlbum = null;
}

// Run boot sequence (called after power button click)
async function runBootSequence() {
    if (hasBooted) return;
    hasBooted = true;

    // Run boot sequence using loaded data
    for (const line of BOOT_SEQUENCE_DATA) {
        await sleep(line.delay);
        printTo(output, line.text);
        scrollToBottom(output);
    }

    await sleep(200);
    printTo(output, WELCOME_MESSAGE, 'ascii-art');
    printTo(output, "");
    printTo(output, "Type HELP for available commands.", 'info');
    printTo(output, "");
    scrollToBottom(output);

    // Focus input
    if (commandInput) {
        commandInput.focus();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function setupInput(input, outputEl) {
    input.addEventListener('keydown', (e) => {
        // Handle player mode input
        if (playerMode) {
            handlePlayerInput(e);
            return;
        }
        
        // Normal command mode input
        if (e.key === 'Enter') {
            const command = input.value.trim();
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                processCommand(command, outputEl);
            }
            input.value = '';
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        }
    });
}

function processCommand(commandStr, output) {
    const prompt = getPrompt();
    printTo(output, `${prompt}${commandStr}`, 'command');
    
    const tokens = commandStr.split(/\s+/);
    const cmd = tokens[0].toLowerCase();
    const args = tokens.slice(1);
    const rawArgsStr = commandStr.includes(' ') ? commandStr.slice(commandStr.indexOf(' ') + 1) : '';

    if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd].execute(args, rawArgsStr);
        if (result) {
            printTo(output, result);
        }
    } else {
        printTo(output, `Bad command or file name: '${cmd}'`, 'error');
        printTo(output, "Type 'help' for available commands.", 'info');
    }

    scrollToBottom(output);
}

function printTo(outputEl, text, className = '') {
    const line = document.createElement('div');
    line.className = `output-line ${className}`;
    line.innerHTML = text;
    outputEl.appendChild(line);
}

function printToAll(text, className = '') {
    printTo(output, text, className);
    scrollToBottom(output);
}

function scrollToBottom(output) {
    output.scrollTop = output.scrollHeight;
}

// Command implementations
function showHelp(args) {
    if (args.length > 0 && COMMANDS[args[0]]) {
        const cmd = COMMANDS[args[0]];
        printToAll(`\n${args[0].toUpperCase()}`);
        printToAll(`  ${cmd.description}`);
        printToAll(`  Usage: ${cmd.usage}\n`);
    } else {
        printToAll('');
        printToAll('+--------------------------------------+');
        printToAll('|        AVAILABLE COMMANDS            |');
        printToAll('+--------------------------------------+');
        
        const cmdList = [
            ['HELP', 'Show this help'],
            ['PLAYER', 'Launch audio player'],
            ['BAND', 'Band member info'],
            ['EMAILLIST', 'Submit email to mailing list'],
            ['SETNETLIFY', 'Configure Netlify form'],
            ['SETNETLIFYFUNC', 'Configure Netlify function URL'],
            ['PUSHPENDING', 'Attempt to send pending saved entries'],
            ['SOCIAL', 'Social links'],
            ['OPEN', 'Open a file'],
            ['TIME', 'Show system time'],
            ['DATE', 'Show system date'],
            ['ECHO', 'Display text (supports > / >> to write files)'],
            ['TYPE', 'View file contents'],
            ['CD', 'Change directory'],
            ['PWD', 'Working directory'],
            ['MD', 'Make directory'],
            ['RD', 'Remove directory'],
            ['DEL', 'Delete file'],
            ['COPY', 'Copy file'],
            ['TREE', 'Directory tree'],
            ['PATH', 'System PATH'],
            ['SET', 'Environment vars'],
            ['CLS', 'Clear screen'],
            ['DIR', 'Directory listing'],
            ['EXIT', 'Exit terminal'],
            ['ABOUT', 'About this site'],
            ['VER', 'Version info']
        ];

        cmdList.forEach(([cmd, desc]) => {
            printToAll(`| ${cmd.padEnd(14)}${desc.padEnd(22)}|`);
        });

        printToAll('+--------------------------------------+');
        printToAll('');
    }
}

function listAlbums() {
    printToAll('');
    printToAll('======================================');
    printToAll('            DISCOGRAPHY', 'header');
    printToAll('======================================');
    printToAll('');

    BAND_DATA.albums.forEach((album, index) => {
        printToAll(`  [${index + 1}] ${album.title} (${album.year})`);
        printToAll(`      ${album.tracks.length} tracks`);
        printToAll('');
    });

    printToAll('Type TRACKS <number> to see track listing.', 'info');
    printToAll('');
}

function listTracks(args) {
    const albumNum = parseInt(args[0]) - 1;
    
    if (isNaN(albumNum) || albumNum < 0 || albumNum >= BAND_DATA.albums.length) {
        printToAll('Invalid album number. Use ALBUMS to see list.', 'error');
        return;
    }

    const album = BAND_DATA.albums[albumNum];
    currentAlbum = album;

    printToAll('');
    printToAll('======================================');
    printToAll(`  ${album.title} (${album.year})`, 'header');
    printToAll('======================================');
    printToAll('');

    album.tracks.forEach((track) => {
        printToAll(`  ${String(track.id).padStart(2, '0')}. ${track.title.padEnd(20)} ${track.duration}`);
    });

    printToAll('');
    printToAll('Type PLAY <track#> to play a track.', 'info');
    printToAll('');
}

function playSong(args) {
    if (args.length === 0) {
        printToAll('Usage: play <track#> or play album <album#>', 'error');
        return;
    }

    if (args[0] === 'album') {
        const albumNum = parseInt(args[1]) - 1;
        if (isNaN(albumNum) || albumNum < 0 || albumNum >= BAND_DATA.albums.length) {
            printToAll('Invalid album number.', 'error');
            return;
        }
        const album = BAND_DATA.albums[albumNum];
        currentAlbum = album;
        playTrack(album.tracks[0], album);
        printToAll(`\n▶ Playing album: ${album.title}`, 'success');
        printToAll(`  Starting with: ${album.tracks[0].title}\n`);
    } else {
        const trackNum = parseInt(args[0]);
        if (!currentAlbum) {
            // Default to first album
            currentAlbum = BAND_DATA.albums[0];
        }
        
        const track = currentAlbum.tracks.find(t => t.id === trackNum);
        if (!track) {
            printToAll(`Track ${trackNum} not found. Use 'tracks <album#>' first.`, 'error');
            return;
        }

        playTrack(track, currentAlbum);
        printToAll(`\n▶ Now playing: ${track.title}`, 'success');
        printToAll(`  From: ${currentAlbum.title}\n`);
    }
}

function playTrack(track, album) {
    console.log('Playing track:', track.file);
    
    // Set volume to ensure it's audible
    audioPlayer.volume = 1.0;
    
    // Set source and wait for it to load before playing
    audioPlayer.src = track.file;
    audioPlayer.load();
    
    // Use canplaythrough event to ensure audio is ready
    audioPlayer.oncanplaythrough = function() {
        audioPlayer.oncanplaythrough = null; // Remove listener after first trigger
        const playPromise = audioPlayer.play();
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Audio started playing successfully');
            }).catch(e => {
                console.error('Audio error:', e);
                printToAll(`Error playing audio: ${e.message}`, 'error');
            });
        }
    };
    
    isPlaying = true;
    isPaused = false;
    showNowPlaying(track.title, album.title);
}

function stopPlayback() {
    if (audioBufferSource) {
        try {
            audioBufferSource.stop();
        } catch (e) {}
    }
    isPlaying = false;
    isPaused = false;
    webAudioCurrentTime = 0;
    webAudioStartTime = 0;
    webAudioPausedTime = 0;
    hideNowPlaying();
    printToAll('\n■ Playback stopped.\n', 'info');
}

function togglePause() {
    if (!isPlaying && !isPaused) {
        printToAll('Nothing is playing.', 'info');
        return;
    }

    if (isPaused) {
        // Resume
        if (audioBuffer && audioContext) {
            audioBufferSource = audioContext.createBufferSource();
            audioBufferSource.buffer = audioBuffer;
            audioBufferSource.connect(gainNode);
            
            audioBufferSource.onended = () => {
                isPlaying = false;
                isPaused = false;
                hideNowPlaying();
            };
            
            webAudioStartTime = audioContext.currentTime - webAudioCurrentTime;
            audioBufferSource.start(0, webAudioCurrentTime);
        }
        isPaused = false;
        printToAll('\n▶ Playback resumed.\n', 'success');
    } else {
        // Pause
        webAudioPausedTime = audioContext.currentTime;
        webAudioCurrentTime = getWebAudioCurrentTime();
        if (audioBufferSource) {
            try {
                audioBufferSource.stop();
            } catch (e) {}
        }
        isPaused = true;
        printToAll('\n❚❚ Playback paused.\n', 'info');
    }
}

function setVolume(args) {
    const vol = parseInt(args[0]);
    if (isNaN(vol) || vol < 0 || vol > 100) {
        printToAll('Usage: volume <0-100>', 'error');
        return;
    }
    if (gainNode) {
        gainNode.gain.value = vol / 100;
    }
    const bar = '█'.repeat(Math.floor(vol / 10)) + '░'.repeat(10 - Math.floor(vol / 10));
    printToAll(`\nVolume: [${bar}] ${vol}%\n`, 'info');
}

function showNowPlaying(trackName, albumName) {
    let npDiv = document.querySelector('.now-playing');
    if (!npDiv) {
        npDiv = document.createElement('div');
        npDiv.className = 'now-playing';
        document.body.appendChild(npDiv);
    }
    npDiv.innerHTML = `▶ <span class="track-name">${trackName}</span><br>  ${albumName}`;
    npDiv.classList.add('visible');
}

function hideNowPlaying() {
    const npDiv = document.querySelector('.now-playing');
    if (npDiv) {
        npDiv.classList.remove('visible');
    }
}

function showArtwork(args) {
    const albumNum = parseInt(args[0]) - 1;
    
    if (isNaN(albumNum) || albumNum < 0 || albumNum >= BAND_DATA.albums.length) {
        printToAll('Invalid album number. Use "albums" to see available albums.', 'error');
        return;
    }

    const album = BAND_DATA.albums[albumNum];

    // Create modal
    let modal = document.querySelector('.artwork-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.className = 'artwork-modal';
        modal.innerHTML = `
            <img src="" alt="Album Artwork">
            <button class="close-btn">[ CLOSE ]</button>
        `;
        document.body.appendChild(modal);

        modal.querySelector('.close-btn').addEventListener('click', () => {
            modal.classList.remove('visible');
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('visible');
            }
        });
    }

    modal.querySelector('img').src = album.artwork;
    modal.querySelector('img').alt = album.title;
    modal.classList.add('visible');

    printToAll(`\nDisplaying artwork for: ${album.title}`, 'success');
    printToAll('Click anywhere or [CLOSE] to dismiss.\n', 'info');
}


function showBandInfo(args) {
    if (args.length > 0) {
        const memberNum = parseInt(args[0]) - 1;
        if (!isNaN(memberNum) && memberNum >= 0 && memberNum < BAND_DATA.members.length) {
            const member = BAND_DATA.members[memberNum];
            printToAll('');
            printToAll('==============================');
            printToAll(`  ${member.name}`, 'header');
            printToAll('==============================');
            printToAll(`  Role: ${member.role}`);
            printToAll(`  ${member.bio}`);
            printToAll('==============================');
            printToAll('');
            return;
        }
    }

    printToAll('');
    printToAll('+--------------------------------------+');
    printToAll('|            BAND MEMBERS              |');
    printToAll('+--------------------------------------+');
    
    BAND_DATA.members.forEach((member, index) => {
        printToAll(`| [${index + 1}] ${member.name.padEnd(32)}|`);
        printToAll(`|     ${member.role.padEnd(32)}|`);
    });

    printToAll('+--------------------------------------+');
    printToAll('');
    printToAll('Type BAND <number> for detailed info.', 'info');
    printToAll('');
}

function emailListCommand(args, rawArgs) {
    printToAll('');
    if (args.length === 0) {
        printToAll('Usage: EMAILLIST <email> [name]');
        printToAll('Example: EMAILLIST you@example.com John Doe');
        printToAll('');
        return;
    }

    const email = args[0];
    const name = args.slice(1).join(' ');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        printToAll('Invalid email address. Please provide a valid email.', 'error');
        printToAll('');
        return;
    }

    const entry = `${email}${name ? ' | ' + name : ''}`;

    // Preferred: Netlify Function endpoint (proxy)
    if (window.NETLIFY_FUNCTION_URL) {
        const funcUrl = window.NETLIFY_FUNCTION_URL;
        printToAll('Submitting your email to the Netlify function...', 'info');
        const payload = { email, name };
        if (window.NETLIFY_FORM_TOKEN) payload.token = window.NETLIFY_FORM_TOKEN;

        fetch(funcUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
            mode: 'cors'
        })
        .then(async res => {
            let json = null;
            try { json = await res.json(); } catch (e) { json = null; }
            if (res.ok && json && json.ok) {
                printToAll('Thank you! Your email has been submitted.', 'success');
                printToAll('');
                return;
            }

            // If not ok, try Netlify direct fallback if configured
            if (window.NETLIFY_FORM_URL && window.NETLIFY_FORM_NAME) {
                printToAll('Function did not accept submission; falling back to direct Netlify form...', 'info');
                // build form and let the previous logic handle it
            } else {
                throw new Error('Function submission failed: ' + (json?.error || res.status));
            }
        })
        .catch(e => {
            console.error('Netlify function submission error', e);

            // Fallback: try direct Netlify form if configured
            if (window.NETLIFY_FORM_URL && window.NETLIFY_FORM_NAME) {
                const url = window.NETLIFY_FORM_URL;
                const form = new URLSearchParams();
                form.append('form-name', window.NETLIFY_FORM_NAME);
                form.append('email', email);
                if (name) form.append('name', name);
                if (window.NETLIFY_FORM_TOKEN) form.append('token', window.NETLIFY_FORM_TOKEN);

                fetch(url, { method: 'POST', body: form, mode: 'no-cors' })
                    .then(() => {
                        printToAll('Submitted (direct no-cors fallback; could not verify response).', 'info');
                        printToAll('');
                    })
                    .catch(err2 => {
                        console.error('Fallback direct submission failed', err2);
                        printToAll('Submission failed. Saving your email locally for manual upload.', 'error');
                        writeFile('emaillist_pending.txt', entry + '\n', true);
                        printToAll('');
                    });
            } else {
                // No fallback configured — store locally
                writeFile('emaillist_pending.txt', entry + '\n', true);
                printToAll('Submission failed. Saved locally to EMAILLIST_PENDING.TXT', 'error');
                printToAll('');
            }
        });

        return;
    }

    // Preferred: Netlify form endpoint
    if (window.NETLIFY_FORM_URL && window.NETLIFY_FORM_NAME) {
        const url = window.NETLIFY_FORM_URL;
        printToAll('Submitting your email to the Netlify form...', 'info');

        // Build form payload expected by Netlify (include form-name)
        const form = new URLSearchParams();
        form.append('form-name', window.NETLIFY_FORM_NAME);
        form.append('email', email);
        if (name) form.append('name', name);
        if (window.NETLIFY_FORM_TOKEN) form.append('token', window.NETLIFY_FORM_TOKEN);

        // Try a CORS-enabled form POST first
        fetch(url, { method: 'POST', body: form, mode: 'cors' })
            .then(res => {
                if (res.ok) {
                    printToAll('Thank you! Your email has been submitted.', 'success');
                    printToAll('');
                } else {
                    // Fallback to no-cors form POST (can't inspect response)
                    return fetch(url, { method: 'POST', body: form, mode: 'no-cors' })
                        .then(() => {
                            printToAll('Submitted (no-cors fallback; could not verify response).', 'info');
                            printToAll('');
                        });
                }
            })
            .catch(e => {
                console.error('Netlify submission error', e);
                // final attempt using no-cors fallback
                fetch(url, { method: 'POST', body: form, mode: 'no-cors' })
                    .then(() => {
                        printToAll('Submitted (no-cors fallback; could not verify response).', 'info');
                        printToAll('');
                    })
                    .catch(err2 => {
                        console.error('Fallback submission failed', err2);
                        printToAll('Submission failed. Saving your email locally for manual upload.', 'error');
                        writeFile('emaillist_pending.txt', entry + '\n', true);
                        printToAll('');
                    });
            });

        return;
    }



    // No endpoint configured — save locally
    printToAll('No form configured; saving your email locally.', 'info');
    writeFile('emaillist_pending.txt', entry + '\n', true);
    printToAll('');
}

function setNetlify(args) {
    if (args.length === 0) {
        printToAll('Usage: SETNETLIFY <url> <form-name> [token]');
        printToAll('Example: SETNETLIFY https://your-site.netlify.app/ tsr-email-list my-secret-token');
        printToAll('');
        return;
    }

    const url = args[0];
    const formName = args[1] || '';
    const token = args[2] || '';

    if (!formName) {
        printToAll('Missing <form-name>. You must provide the Netlify form-name.', 'error');
        printToAll('');
        return;
    }

    window.NETLIFY_FORM_URL = url;
    window.NETLIFY_FORM_NAME = formName;
    if (token) window.NETLIFY_FORM_TOKEN = token;

    printToAll('Netlify form configured:');
    printToAll(`  URL: ${url}`);
    printToAll(`  form-name: ${formName}`);
    if (token) printToAll('  token: set');
    printToAll('');
}

function setNetlifyFunc(args) {
    if (args.length === 0) {
        printToAll('Usage: SETNETLIFYFUNC <function-url> [token]');
        printToAll('Example: SETNETLIFYFUNC https://your-site.netlify.app/.netlify/functions/submit-email my-secret-token');
        printToAll('');
        return;
    }

    const url = args[0];
    const token = args[1] || '';

    if (!/^https?:\/\//i.test(url)) {
        printToAll('Please provide a valid URL starting with http:// or https://', 'error');
        printToAll('');
        return;
    }

    window.NETLIFY_FUNCTION_URL = url;
    if (token) window.NETLIFY_FORM_TOKEN = token;

    printToAll('Netlify function configured:');
    printToAll(`  URL: ${url}`);
    if (token) printToAll('  token: set');
    printToAll('');
}

function pushPending() {
    printToAll('Searching for pending emaillist files...');

    // Find all FILE_CONTENTS keys that end with EMAILLIST_PENDING.TXT (case-insensitive)
    const pendingKeys = Object.keys(FILE_CONTENTS).filter(k => k.toLowerCase().endsWith('\\emaillist_pending.txt'));

    if (pendingKeys.length === 0) {
        printToAll('No pending submissions found.');
        printToAll('');
        return;
    }

    let processed = 0;
    for (const key of pendingKeys) {
        const content = FILE_CONTENTS[key];
        const lines = content.split('\n').map(l => l.trim()).filter(Boolean);
        // Attempt to submit each line
        for (const line of lines) {
            // Expect format: 'email | name' or 'email'
            const parts = line.split('|').map(p => p.trim());
            const email = parts[0];
            const name = parts[1] || '';
            printToAll(`Attempting: ${email} ${name}`);
            // Call the main submission logic by invoking emailListCommand directly
            // Supply args array similar to terminal input
            emailListCommand([email, ...(name ? [name] : [])]);
            processed++;
        }
        // After attempting, remove the pending file
        delete FILE_CONTENTS[key];
        // Also remove from VFS listing if present
        const fileName = key.split('\\').pop();
        const dirPath = key.split('\\').slice(0, -1).join('\\');
        // Try to locate directory by matching getCurrentPath() strings - simpler: remove from all dirs
        Object.keys(VFS).forEach(d => {
            VFS[d].files = VFS[d].files.filter(f => f.toLowerCase() !== fileName.toLowerCase());
        });
    }

    printToAll(`Processed ${processed} pending submissions (attempted).`);
    printToAll('');
}

function downloadContent(args) {
    if (args.length === 0) {
        printToAll('Usage: download <track#> or download album <album#>', 'error');
        return;
    }

    if (args[0] === 'album') {
        const albumNum = parseInt(args[1]) - 1;
        if (isNaN(albumNum) || albumNum < 0 || albumNum >= BAND_DATA.albums.length) {
            printToAll('Invalid album number.', 'error');
            return;
        }
        const album = BAND_DATA.albums[albumNum];
        printToAll(`\n⬇ Preparing download: ${album.title}...`, 'info');
        printToAll('  Download link will open in a new tab.', 'info');
        // In production, this would trigger actual download
        printToAll(`  [Demo mode - add actual download URL]`, 'info');
        printToAll('');
    } else {
        const trackNum = parseInt(args[0]);
        if (!currentAlbum) {
            currentAlbum = BAND_DATA.albums[0];
        }
        
        const track = currentAlbum.tracks.find(t => t.id === trackNum);
        if (!track) {
            printToAll(`Track ${trackNum} not found.`, 'error');
            return;
        }

        printToAll(`\n⬇ Downloading: ${track.title}...`, 'info');
        // In production, trigger actual download
        // window.open(track.file, '_blank');
        printToAll('  [Demo mode - add actual download logic]', 'info');
        printToAll('');
    }
}

function clearTerminal() {
    output.innerHTML = '';
}

function showVersion() {
    printToAll('');
    printToAll('TSR DOS Interface [Version 1.0.0]');
    printToAll('(C) 2024 Terminate and Stay Resident.');
    printToAll('');
}

function showAbout() {
    printToAll('');
    printToAll('+----------------------------------------------------+');
    printToAll('|                   ABOUT THIS SITE                  |');
    printToAll('+----------------------------------------------------+');
    printToAll('|  This interface is a tribute to the DOS era,       |');
    printToAll('|  when computing was simpler and command lines      |');
    printToAll('|  ruled the digital world.                          |');
    printToAll('|                                                    |');
    printToAll('|  TSR (Terminate and Stay Resident) programs        |');
    printToAll('|  were DOS utilities that stayed in memory          |');
    printToAll('|  after loading, waiting to be activated.           |');
    printToAll('|                                                    |');
    printToAll('|  Like those programs, our music stays with         |');
    printToAll('|  you, resident in your memory.                     |');
    printToAll('+----------------------------------------------------+');
    printToAll('');
}

function showDirectory() {
    printToAll('');
    printToAll(' Volume in drive C is TSR');
    printToAll(' Volume Serial Number is 1337-DEAD');
    printToAll(' Directory of C:\\TSR');
    printToAll('');
    printToAll('.            <DIR>        12-28-24  12:00a');
    printToAll('..           <DIR>        12-28-24  12:00a');
    printToAll('ALBUMS       <DIR>        12-28-24  12:00a');
    printToAll('TRACKS       <DIR>        12-28-24  12:00a');
    printToAll('BAND     DAT     2,048    12-28-24  12:00a');
    printToAll('SOCIAL   LNK     1,024    12-28-24  12:00a');
    printToAll('README   TXT       512    12-28-24  12:00a');
    printToAll('        4 file(s)         7,680 bytes');
    printToAll('        4 dir(s)      1,337,000 bytes free');
    printToAll('');
}

function showSocial() {
    printToAll('');
    printToAll('+--------------------------------------+');
    printToAll('|          CONNECT WITH TSR            |');
    printToAll('+--------------------------------------+');
    
    SOCIALS_DATA.forEach((social) => {
        const paddedName = social.name.padEnd(20);
        printToAll(`|  ${social.icon} ${paddedName}        |`);
        printToAll(`|      ${social.url.padEnd(30)}|`);
        if (social !== SOCIALS_DATA[SOCIALS_DATA.length - 1]) {
            printToAll('|                                      |');
        }
    });
    
    printToAll('+--------------------------------------+');
    printToAll('');
}

// Handle window resize for focus
window.addEventListener('resize', () => {
    if (commandInput) {
        commandInput.focus();
    }
});

// Click on terminal focuses input
document.addEventListener('click', (e) => {
    if (e.target.closest('.terminal-overlay')) {
        if (commandInput) {
            commandInput.focus();
        }
    }
});

// DOS Command Implementations

function showTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    printToAll('');
    printToAll(`Current time is ${hours}:${minutes}:${seconds}`);
    printToAll('');
}

function showDate() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[now.getMonth()];
    const day = now.getDate();
    const year = now.getFullYear();
    printToAll('');
    printToAll(`Current date is ${month} ${day}, ${year}`);
    printToAll('');
}

function echoText(args, rawArgs) {
    // Preserve rawArgs for exact text and redirection parsing
    const text = rawArgs ? rawArgs : args.join(' ');
    if (!text) {
        printToAll('');
        return;
    }

    // Check for redirection: '>' overwrite or '>>' append
    const match = text.match(/^(.*?)(?:\s*)(>>?)\s*(\S+)$/);
    if (match) {
        const content = match[1].trim();
        const op = match[2]; // '>' or '>>'
        const filename = match[3];
        // Write to file in current directory
        writeFile(filename, content + '\n', op === '>>');
        printToAll('');
        printToAll(`File ${op === '>' ? 'written' : 'appended'}: ${filename}`, 'info');
        printToAll('');
    } else {
        printToAll(text);
    }
}

function typeFile(args) {
    const files = {
        'readme.txt': 'Terminate and Stay Resident - DOS Music Interface\n\nType HELP for commands.',
        'band.dat': 'Band member information - use BAND command',
        'config.sys': 'DEVICE=HIMEM.SYS\nDEVICE=EMM386.EXE',
        'autoexec.bat': '@ECHO OFF\nCLS\nTYPE WELCOME.TXT'
    };

    if (args.length === 0) {
        printToAll('');
        printToAll('Missing filename.');
        printToAll('');
        return;
    }

    const filename = args[0];
    const filenameLower = filename.toLowerCase();
    const pathKey = getCurrentPath() + '\\' + filename.toUpperCase();

    // Check for user-created files first
    if (FILE_CONTENTS[pathKey]) {
        printToAll('');
        printToAll(FILE_CONTENTS[pathKey]);
        printToAll('');
        return;
    }

    if (files[filenameLower]) {
        printToAll('');
        printToAll(files[filenameLower]);
        printToAll('');
    } else {
        printToAll('');
        printToAll(`File not found - ${filenameLower}`);
        printToAll('');
    }
}

function changeDir(args) {
    printToAll('');
    
    if (args.length === 0 || args[0] === '\\') {
        currentDir = 'root';
        printToAll('C:\\TSR');
    } else if (args[0] === '..') {
        if (VFS[currentDir].parent) {
            currentDir = VFS[currentDir].parent;
        }
        printToAll(getCurrentPath());
    } else {
        const dirName = args[0].toUpperCase();
        if (VFS[currentDir].subdirs.includes(dirName) && VFS[dirName]) {
            currentDir = dirName;
            printToAll(getCurrentPath());
        } else {
            printToAll(`Invalid directory: ${dirName}`);
            printToAll('');
            return;
        }
    }
    
    updatePromptUI();
    printToAll('');
}

function getPrompt() {
    return getCurrentPath() + '>';
}

function getCurrentPath() {
    if (currentDir === 'root') return 'C:\\TSR';
    let path = 'C:\\TSR';
    let dir = currentDir;
    while (dir && dir !== 'root') {
        path += '\\' + dir;
        dir = VFS[dir].parent;
    }
    return path;
}

function printWorkingDir() {
    printToAll('');
    printToAll(getCurrentPath());
    printToAll('');
}

function makeDir(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing directory name.');
        printToAll('');
        return;
    }
    
    const dirName = args[0].toUpperCase();
    
    printToAll('');
    
    // Check if directory already exists
    if (VFS[dirName]) {
        printToAll(`Directory ${dirName} already exists.`);
    } else {
        // Create new directory
        VFS[dirName] = {
            subdirs: [],
            files: [],
            parent: currentDir
        };
        VFS[currentDir].subdirs.push(dirName);
        printToAll(`Directory created: ${dirName}`);
    }
    
    printToAll('');
}

function removeDir(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing directory name.');
        printToAll('');
        return;
    }
    
    const dirName = args[0].toUpperCase();
    
    printToAll('');
    
    if (!VFS[dirName]) {
        printToAll(`Directory not found: ${dirName}`);
    } else if (VFS[dirName].subdirs.length > 0 || VFS[dirName].files.length > 0) {
        printToAll(`Directory not empty: ${dirName}`);
    } else {
        // Remove directory
        VFS[currentDir].subdirs = VFS[currentDir].subdirs.filter(d => d !== dirName);
        delete VFS[dirName];
        printToAll(`Directory removed: ${dirName}`);
    }
    
    printToAll('');
}

function deleteFile(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing filename.');
        printToAll('');
        return;
    }
    
    const fileName = args[0].toUpperCase();
    
    printToAll('');
    
    if (VFS[currentDir].files.includes(fileName)) {
        VFS[currentDir].files = VFS[currentDir].files.filter(f => f !== fileName);
        // Remove any stored file contents for this path
        const pathKey = getCurrentPath() + '\\' + fileName;
        if (FILE_CONTENTS[pathKey]) {
            delete FILE_CONTENTS[pathKey];
        }
        printToAll(`File deleted: ${fileName}`);
    } else {
        printToAll(`File not found: ${fileName}`);
    }
    
    printToAll('');
}

function writeFile(filename, content, append = false) {
    if (!filename) {
        printToAll('Missing filename.');
        return;
    }
    const name = filename.toUpperCase();
    const fileNameFinal = name.includes('.') ? name : (name + '.TXT');
    const pathKey = getCurrentPath() + '\\' + fileNameFinal;

    // Add to VFS if not present
    if (!VFS[currentDir].files.includes(fileNameFinal)) {
        VFS[currentDir].files.push(fileNameFinal);
    }

    if (!append) {
        FILE_CONTENTS[pathKey] = content;
    } else {
        FILE_CONTENTS[pathKey] = (FILE_CONTENTS[pathKey] || '') + content;
    }
    printToAll(`File saved: ${fileNameFinal}`, 'info');
}

function copyFile(args) {
    if (args.length < 2) {
        printToAll('');
        printToAll('Usage: copy <source> <destination>');
        printToAll('');
        return;
    }
    printToAll('');
    printToAll(`${args[0]}`);
    printToAll(`1 file(s) copied.`);
    printToAll('');
}

function showTree() {
    printToAll('');
    
    function buildTree(dirName, prefix = '') {
        const dir = VFS[dirName];
        if (!dir) return;
        
        // Show files
        const totalItems = dir.subdirs.length + dir.files.length;
        dir.subdirs.forEach((subdir, idx) => {
            const isLast = idx === dir.subdirs.length - 1 && dir.files.length === 0;
            printToAll(prefix + (isLast ? '└── ' : '├── ') + subdir);
            const newPrefix = prefix + (isLast ? '    ' : '│   ');
            buildTree(subdir, newPrefix);
        });
        
        dir.files.forEach((file, idx) => {
            const isLast = idx === dir.files.length - 1;
            printToAll(prefix + (isLast ? '└── ' : '├── ') + file);
        });
    }
    
    printToAll('C:\\TSR');
    buildTree('root', '');
    printToAll('');
}

function listDir() {
    const dir = VFS[currentDir];
    printToAll('');
    printToAll(`Directory listing: ${getCurrentPath()}`);
    printToAll('');
    
    // Show subdirectories
    dir.subdirs.forEach(subdir => {
        const count = VFS[subdir].subdirs.length + VFS[subdir].files.length;
        printToAll(`<DIR>  ${subdir}`);
    });
    
    // Show files
    dir.files.forEach(file => {
        printToAll(`       ${file}`);
    });
    
    printToAll('');
}

function showPath() {
    printToAll('');
    printToAll('PATH=C:\\;C:\\DOS;C:\\WINDOWS;C:\\TSR\\ALBUMS');
    printToAll('');
}

function setEnv(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('COMSPEC=C:\\COMMAND.COM');
        printToAll('PATH=C:\\;C:\\DOS;C:\\TSR');
        printToAll('PROMPT=$P$G');
        printToAll('TSR_MUSIC=ENABLED');
        printToAll('');
    } else {
        const setting = args.join('=');
        printToAll('');
        printToAll(`Environment variable set: ${setting}`);
        printToAll('');
    }
}

function exitTerminal() {
    printToAll('');
    printToAll('Exiting TSR DOS Interface...');
    printToAll('');
}

function openFile(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing filename.');
        printToAll('');
        return;
    }
    
    const fileName = args[0].toUpperCase();
    const currentDirObj = VFS[currentDir];
    
    printToAll('');
    
    // Check if file exists in current directory
    if (!currentDirObj.files.includes(fileName)) {
        printToAll(`File not found: ${fileName}`);
        printToAll('');
        return;
    }
    
    // Handle different file types
    if (fileName.endsWith('.JPG') || fileName.endsWith('.PNG')) {
        // Display image
        const imagePath = getImagePath(fileName);
        printToAll(`Opening image: ${fileName}`);
        printToAll('');
        
        // Create image element
        const imgContainer = document.createElement('div');
        imgContainer.style.cssText = 'text-align: center; margin: 10px 0; color: #54fc54;';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = fileName;
        img.style.cssText = 'max-width: 100%; max-height: 300px; border: 2px solid #54fc54; image-rendering: pixelated;';
        
        imgContainer.appendChild(img);
        output.appendChild(imgContainer);
        
        const info = document.createElement('div');
        info.className = 'output-line';
        info.textContent = `[Image displayed: ${fileName}]`;
        output.appendChild(info);
        
        printToAll('');
        scrollToBottom(output);
    } else if (fileName.endsWith('.TXT')) {
        // Display text file
        const files = {
            'README.TXT': 'Terminate and Stay Resident - DOS Music Interface\n\nType HELP for commands.',
            'BAND.DAT': 'Band member information:\n\n' + BAND_DATA.members.map(m => `${m.name} - ${m.role}\n${m.bio}`).join('\n\n')
        };
        
        if (files[fileName]) {
            printToAll(`[${fileName}]`);
            printToAll('');
            printToAll(files[fileName]);
            printToAll('');
        } else {
            printToAll(`Cannot read file: ${fileName}`);
            printToAll('');
        }
    } else if (fileName.endsWith('.MP3')) {
        // Play audio file
        printToAll(`Opening audio: ${fileName}`);
        const trackIndex = parseInt(fileName.match(/\d+/)?.[0]) || 0;
        if (trackIndex > 0 && trackIndex <= BAND_DATA.albums[0].tracks.length) {
            const track = BAND_DATA.albums[0].tracks[trackIndex - 1];
            printToAll(`Track: ${track.title} (${track.duration})`);
            playTrack([trackIndex.toString()]);
        }
        printToAll('');
    } else {
        printToAll(`Cannot open file type: ${fileName}`);
        printToAll('');
    }
}

function getImagePath(fileName) {
    // Map filenames to their paths
    const paths = {
        'ARTWORK.JPG': 'assets/tsr1_cover_v2.png',
        'ARTWORK.PNG': 'assets/tsr1_cover_v2.png',
        'TSR1_COVER_V2.PNG': 'assets/tsr1_cover_v2.png'
    };
    
    return paths[fileName] || 'assets/tsr1_cover_v2.png';
}

// ==================== AUDIO PLAYER ====================

function playPlayerTrack(trackIndex) {
    const tracks = BAND_DATA.albums[0].tracks;
    const track = tracks[trackIndex];
    
    if (!track) return;
    
    // Prevent multiple simultaneous track loads
    if (isLoadingTrack) return;
    isLoadingTrack = true;
    
    // Abort any pending fetch
    if (audioFetchController) {
        audioFetchController.abort();
    }
    audioFetchController = new AbortController();
    
    // Initialize audio context
    initAudioContext();
    if (!audioContext) {
        console.error('Audio context initialization failed');
        isLoadingTrack = false;
        return;
    }
    
    // Stop any currently playing track completely
    if (audioBufferSource) {
        try {
            audioBufferSource.stop();
        } catch (e) {}
        audioBufferSource = null;
    }
    
    // Reset playback state
    webAudioCurrentTime = 0;
    webAudioStartTime = 0;
    webAudioPausedTime = 0;
    isPlaying = true;
    isPaused = false;
    
    // Fetch and decode the audio file
    fetch(track.file, { signal: audioFetchController.signal })
        .then(response => response.arrayBuffer())
        .then(arrayBuffer => audioContext.decodeAudioData(arrayBuffer))
        .then(buffer => {
            audioBuffer = buffer;
            webAudioDuration = buffer.duration;
            
            // Create buffer source
            audioBufferSource = audioContext.createBufferSource();
            audioBufferSource.buffer = buffer;
            audioBufferSource.connect(gainNode);
            
            // Handle track end
            audioBufferSource.onended = () => {
                isPlaying = false;
                isPaused = false;
                audioBufferSource = null;
                isLoadingTrack = false;
                hideNowPlaying();
                renderPlayerUI();
            };
            
            // Start playback
            webAudioStartTime = audioContext.currentTime;
            audioBufferSource.start(0);
            isLoadingTrack = false;
            startPlayerRenderLoop();
            
            // Force initial render to show playing state
            setTimeout(() => renderPlayerUI(), 50);
        })
        .catch(e => {
            // Ignore aborted requests (user clicked another track)
            if (e.name === 'AbortError') return;
            
            console.error('Error loading audio:', e);
            isPlaying = false;
            isLoadingTrack = false;
            renderPlayerUI();
        });
}

function launchPlayer() {
    playerMode = true;
    selectedTrackIndex = 0;
    playlistViewStart = 0;
    output.innerHTML = '';
    printToAll('');
    printToAll('┌──────────────────────────────────┐');
    printToAll('│   TSR AUDIO PLAYER v1.0          │');
    printToAll('├──────────────────────────────────┤');
    renderPlayerUI();
    startPlayerRenderLoop();
}

function renderPlayerUI() {
    const tracks = BAND_DATA.albums[0].tracks;
    const currentTime = getWebAudioCurrentTime();
    const volumePercent = gainNode ? Math.round(gainNode.gain.value * 100) : 100;
    const volumeBar = '█'.repeat(Math.round(volumePercent / 5)) + '░'.repeat(20 - Math.round(volumePercent / 5));
    
    // Adjust viewport so selected track is always visible
    if (selectedTrackIndex < playlistViewStart) {
        playlistViewStart = selectedTrackIndex;
    } else if (selectedTrackIndex >= playlistViewStart + PLAYLIST_VISIBLE) {
        playlistViewStart = selectedTrackIndex - PLAYLIST_VISIBLE + 1;
    }
    
    // Clear old player UI and reset visualizer cache
    output.innerHTML = '';
    visualizerContainer = null;
    visualizerBars = [];
    
    // Build all lines without scrolling
    const lines = [];
    lines.push('');
    lines.push('┌──────────────────────────────────');
    lines.push('│   TSR AUDIO PLAYER v1.0');
    lines.push('├──────────────────────────────────');
    
    // Playlist (only show 3 at a time)
    lines.push('│');
    for (let i = 0; i < PLAYLIST_VISIBLE; i++) {
        const idx = playlistViewStart + i;
        if (idx < tracks.length) {
            const track = tracks[idx];
            const isSelected = idx === selectedTrackIndex;
            const isCurrentlyPlaying = isPlaying && idx === selectedTrackIndex;
            
            let prefix = isSelected ? '▶' : ' ';
            let marker = isCurrentlyPlaying ? '♫' : ' ';
            
            const trackNum = (idx + 1).toString().padStart(2);
            const title = track.title.substring(0, 16).padEnd(16);
            const duration = track.duration.padStart(5);
            
            lines.push(`│${marker}[${trackNum}] ${title} ${duration}${prefix}`);
        } else {
            lines.push('│');
        }
    }
    
    // Scrollbar indicator
    const scrollPos = playlistViewStart;
    const totalTracks = tracks.length;
    const scrollPercent = Math.round((scrollPos / Math.max(1, totalTracks - PLAYLIST_VISIBLE)) * 8);
    let scrollBar = '░░░░░░░░';
    if (scrollPos > 0 || playlistViewStart + PLAYLIST_VISIBLE < totalTracks) {
        scrollBar = '░'.repeat(scrollPercent) + '█' + '░'.repeat(7 - scrollPercent);
    }
    const scrollContent = ` [↑↓${scrollBar}] Scroll`;
    lines.push(`│${scrollContent}`);
    
    // Now Playing
    lines.push('│');
    if (isPlaying) {
        const track = tracks[selectedTrackIndex];
        const timeDisplay = formatTime(currentTime);
        const nowPlayingContent = ` ♫ ${track.title.substring(0, 18).padEnd(18)} ${timeDisplay}`;
        lines.push(`│${nowPlayingContent}`);
    } else if (isPaused && webAudioCurrentTime > 0) {
        const track = tracks[selectedTrackIndex];
        const pausedContent = ` ⏸ PAUSED: ${track.title.substring(0, 18).padEnd(18)}`;
        lines.push(`│${pausedContent}`);
    } else {
        lines.push('│ Ready to play');
    }
    
    // Volume
    const volumePercent3 = volumePercent.toString().padStart(3);
    const volumeContent = ` Vol: [${volumeBar}] ${volumePercent3}%`;
    lines.push(`│${volumeContent}`);
    
    // Render all lines up to volume
    for (let i = 0; i < lines.length; i++) {
        printTo(output, lines[i], i === lines.length - 3 ? 'info' : '');
    }
    
    // Audio visualizer - render right after volume
    updateVisualizerData();
    if (isPlaying) {
        const barCount = 32;
        
        // Create visualizer container once, then just update bar heights
        if (!visualizerContainer) {
            visualizerContainer = document.createElement('div');
            visualizerContainer.style.display = 'flex';
            visualizerContainer.style.alignItems = 'flex-end';
            visualizerContainer.style.gap = '2px';
            visualizerContainer.style.height = '20px';
            visualizerContainer.style.marginLeft = '1em';
            
            // Create all bar elements
            visualizerBars = [];
            for (let i = 0; i < barCount; i++) {
                const ratio = i / barCount;
                let color = '';
                
                if (ratio < 0.25) {
                    color = '#00ff00';
                } else if (ratio < 0.375) {
                    color = '#00ffff';
                } else if (ratio < 0.5) {
                    color = '#0088ff';
                } else if (ratio < 0.625) {
                    color = '#0088ff';
                } else if (ratio < 0.75) {
                    color = '#ff00ff';
                } else {
                    color = '#ff0000';
                }
                
                const bar = document.createElement('div');
                bar.style.width = '8px';
                bar.style.backgroundColor = color;
                bar.style.transition = 'height 0.05s ease-out';
                bar.style.minHeight = '2px';
                
                visualizerContainer.appendChild(bar);
                visualizerBars.push(bar);
            }
            
            output.appendChild(visualizerContainer);
        }
        
        // Update bar heights each frame
        for (let i = 0; i < barCount; i++) {
            const index = Math.floor((i / barCount) * visualizerData.length);
            const value = visualizerData[index] / 255;
            const heightPercent = Math.max(2, value * 100);
            visualizerBars[i].style.height = heightPercent + '%';
        }
    }
    
    // Add command tips after visualizer
    printTo(output, '│ [Enter] Play  [Space] Pause [Q]');
    printTo(output, '│ [N] Next  [P] Previous');
    printTo(output, '│ [+/-] Volume');
    printTo(output, '├──────────────────────────────────');
    
    // Scroll to top to show full player UI
    output.scrollTop = 0;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function handlePlayerInput(event) {
    if (!playerMode) return;
    
    const tracks = BAND_DATA.albums[0].tracks;
    let currentVol = gainNode ? Math.round(gainNode.gain.value * 100) : 100;
    
    switch(event.key) {
        case 'ArrowUp':
            event.preventDefault();
            selectedTrackIndex = Math.max(0, selectedTrackIndex - 1);
            renderPlayerUI();
            break;
            
        case 'ArrowDown':
            event.preventDefault();
            selectedTrackIndex = Math.min(tracks.length - 1, selectedTrackIndex + 1);
            renderPlayerUI();
            break;
            
        case 'Enter':
            event.preventDefault();
            playPlayerTrack(selectedTrackIndex);
            setTimeout(() => renderPlayerUI(), 100);
            break;
            
        case ' ':
            event.preventDefault();
            // If nothing is loaded, play selected track
            if (!isPlaying && !isPaused) {
                playPlayerTrack(selectedTrackIndex);
            } else if (isPaused) {
                // Resume paused track
                togglePause();
            } else {
                // Pause playing track
                togglePause();
            }
            setTimeout(() => renderPlayerUI(), 100);
            break;
            
        case 'n':
        case 'N':
            event.preventDefault();
            selectedTrackIndex = Math.min(tracks.length - 1, selectedTrackIndex + 1);
            playPlayerTrack(selectedTrackIndex);
            setTimeout(() => renderPlayerUI(), 100);
            break;
            
        case 'p':
        case 'P':
            event.preventDefault();
            selectedTrackIndex = Math.max(0, selectedTrackIndex - 1);
            playPlayerTrack(selectedTrackIndex);
            setTimeout(() => renderPlayerUI(), 100);
            break;
            
        case '+':
        case '=':
            event.preventDefault();
            currentVol = Math.min(100, currentVol + 10);
            if (gainNode) gainNode.gain.value = currentVol / 100;
            renderPlayerUI();
            break;
            
        case '-':
        case '_':
            event.preventDefault();
            currentVol = Math.max(0, currentVol - 10);
            if (gainNode) gainNode.gain.value = currentVol / 100;
            renderPlayerUI();
            break;
            
        case 'q':
        case 'Q':
        case 'Escape':
            event.preventDefault();
            exitPlayer();
            break;
    }
}

function exitPlayer() {
    playerMode = false;
    if (playerRenderLoop) {
        clearInterval(playerRenderLoop);
        playerRenderLoop = null;
    }
    stopPlayback();
    output.innerHTML = '';
    printToAll('');
    printToAll('Exiting player...');
    printToAll('');
}
