// Terminate and Stay Resident - DOS Terminal Emulator
// =====================================================

// Band data - Replace with actual data
const BAND_DATA = {
    name: "Terminate and Stay Resident",
    shortName: "TSR",
    formed: "2024",
    genre: "Electronic / Synthwave / Chiptune",
    members: [
        { name: "Artist 1", role: "Synths / Programming", bio: "Founder and primary composer." },
        { name: "Artist 2", role: "Guitars / Bass", bio: "Bringing the heavy riffs." },
        { name: "Artist 3", role: "Drums / Percussion", bio: "Keeping the beat alive." }
    ],
    albums: [
        {
            id: "carrierwave",
            title: "CARRIER WAVE",
            year: "2024",
            artwork: "assets/music/albums/CarrierWave/artwork.jpg",
            tracks: [
                { id: 1, title: "Dreaming", duration: "3:30", file: "assets/music/albums/CarrierWave/944_Dreaming_Mastered.mp3" },
                { id: 2, title: "Encounter", duration: "3:45", file: "assets/music/albums/CarrierWave/944_Encounter_Mastered.mp3" },
                { id: 3, title: "Engage", duration: "4:00", file: "assets/music/albums/CarrierWave/944_Engage_Mastered.mp3" },
                { id: 4, title: "June", duration: "3:30", file: "assets/music/albums/CarrierWave/944_June_Mastered.mp3" },
                { id: 5, title: "Letting Go", duration: "4:15", file: "assets/music/albums/CarrierWave/944_LettingGo_Mastered.mp3" },
                { id: 6, title: "Light Speed", duration: "3:45", file: "assets/music/albums/CarrierWave/944_LightSpeed_Mastered.mp3" },
                { id: 7, title: "Locked In", duration: "4:00", file: "assets/music/albums/CarrierWave/944_LockedIn_Mastered.mp3" },
                { id: 8, title: "Pilot", duration: "3:30", file: "assets/music/albums/CarrierWave/944_Pilot_Mastered.mp3" },
                { id: 9, title: "Ride", duration: "4:00", file: "assets/music/albums/CarrierWave/944_Ride_Mastered.mp3" },
                { id: 10, title: "Skyline", duration: "3:45", file: "assets/music/albums/CarrierWave/944_Skyline_Mastered.mp3" },
                { id: 11, title: "Soul", duration: "4:30", file: "assets/music/albums/CarrierWave/944_Soul_Mastered.mp3" },
                { id: 12, title: "Stray", duration: "3:30", file: "assets/music/albums/CarrierWave/944_Stray_Mastered.mp3" },
                { id: 13, title: "Transmission", duration: "4:00", file: "assets/music/albums/CarrierWave/944_Transmission_Mastered.mp3" },
                { id: 14, title: "Two Three", duration: "3:45", file: "assets/music/albums/CarrierWave/944_TwoThree_Mastered.mp3" },
                { id: 15, title: "Waiting", duration: "4:15", file: "assets/music/albums/CarrierWave/944_Waiting_Mastered.mp3" }
            ]
        }
    ],
    lore: `
In the digital wasteland of 2024, where streaming algorithms dictate 
what the masses consume, a signal emerged from the depths of conventional 
memory. TERMINATE AND STAY RESIDENT was born - not as a mere band, but 
as a resistance movement encoded in synthesizer waves.

Like the TSR programs of old DOS systems, they remain resident in 
memory, always running in the background, waiting to be called upon. 
Their music is a callback to an era when computers spoke in beeps and 
boops, when loading a game meant patience, and when the command line 
was king.

The founding members discovered each other through a series of encrypted 
BBS messages, drawn together by a shared vision: to resurrect the sounds 
of vintage computing and merge them with modern production techniques.

Their mission is clear: Interrupt the mundane. Overflow the senses. 
And never, ever terminate.

>>> SYSTEM INTERRUPT (2024) marked their emergence into the digital realm
>>> RESIDENT IN MEMORY (2025) solidified their presence in the scene
>>> More transmissions are being prepared...

Stay resident. Stay vigilant. The next interrupt is coming.
    `
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

const BOOT_SEQUENCE = [
    { text: "TSR BIOS v1.0 (C) 2024 Terminate and Stay Resident", delay: 50 },
    { text: "Memory Test: 640K Base Memory OK", delay: 100 },
    { text: "Extended Memory: 1337K OK", delay: 100 },
    { text: "", delay: 50 },
    { text: "Detecting Hardware...", delay: 200 },
    { text: "  Sound Blaster 16 Detected at Port 220", delay: 100 },
    { text: "  CD-ROM Drive: TSR-2000", delay: 100 },
    { text: "", delay: 50 },
    { text: "Loading TSR.SYS...", delay: 300 },
    { text: "TERMINATE AND STAY RESIDENT loaded.", delay: 100 },
    { text: "", delay: 50 }
];

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
    play: {
        description: "Play a song or album",
        usage: "play <track#> | play album <album#>",
        execute: (args) => playSong(args)
    },
    stop: {
        description: "Stop current playback",
        usage: "stop",
        execute: () => stopPlayback()
    },
    pause: {
        description: "Pause/resume playback",
        usage: "pause",
        execute: () => togglePause()
    },
    albums: {
        description: "List all albums",
        usage: "albums",
        execute: () => listAlbums()
    },
    tracks: {
        description: "List tracks from an album",
        usage: "tracks <album#>",
        execute: (args) => listTracks(args)
    },
    artwork: {
        description: "View album artwork",
        usage: "artwork <album#>",
        execute: (args) => showArtwork(args)
    },
    lore: {
        description: "Read the band's story",
        usage: "lore",
        execute: () => showLore()
    },
    band: {
        description: "View band/artist info",
        usage: "band | band <member#>",
        execute: (args) => showBandInfo(args)
    },
    download: {
        description: "Download a track or album",
        usage: "download <track#> | download album <album#>",
        execute: (args) => downloadContent(args)
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
        description: "List available content",
        usage: "dir",
        execute: () => showDirectory()
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
    }
};

// State
let currentAlbum = null;
let isPlaying = false;
let isPaused = false;
let commandHistory = [];
let historyIndex = -1;

// DOM Elements
let output, commandInput;
let audioPlayer;

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    output = document.getElementById('output');
    commandInput = document.getElementById('command-input');
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

    // Run boot sequence
    for (const line of BOOT_SEQUENCE) {
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
    printTo(output, `C:\\TSR>${commandStr}`, 'command');
    
    const parts = commandStr.toLowerCase().split(/\s+/);
    const cmd = parts[0];
    const args = parts.slice(1);

    if (COMMANDS[cmd]) {
        const result = COMMANDS[cmd].execute(args);
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
            ['ALBUMS', 'List all albums'],
            ['TRACKS #', 'List album tracks'],
            ['PLAY #', 'Play a track'],
            ['PLAY ALBUM #', 'Play full album'],
            ['STOP', 'Stop playback'],
            ['PAUSE', 'Pause/resume'],
            ['VOLUME #', 'Set volume (0-100)'],
            ['ARTWORK #', 'View album art'],
            ['DOWNLOAD #', 'Download track'],
            ['LORE', 'Band story/lore'],
            ['BAND', 'Band member info'],
            ['SOCIAL', 'Social links'],
            ['TIME', 'Show system time'],
            ['DATE', 'Show system date'],
            ['ECHO', 'Display text'],
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
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    isPlaying = false;
    isPaused = false;
    hideNowPlaying();
    printToAll('\n■ Playback stopped.\n', 'info');
}

function togglePause() {
    if (!isPlaying && !isPaused) {
        printToAll('Nothing is playing.', 'info');
        return;
    }

    if (isPaused) {
        audioPlayer.play();
        isPaused = false;
        printToAll('\n▶ Playback resumed.\n', 'success');
    } else {
        audioPlayer.pause();
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
    audioPlayer.volume = vol / 100;
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

function showLore() {
    printToAll('');
    printToAll('+====================================================+');
    printToAll('|              THE TSR CHRONICLES                    |');
    printToAll('+====================================================+');
    printToAll(BAND_DATA.lore);
    printToAll('======================================================');
    printToAll('');
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
    printToAll('LORE     TXT     4,096    12-28-24  12:00a');
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
    printToAll('|  [1] Bandcamp                        |');
    printToAll('|      bandcamp.com/tsr                |');
    printToAll('|                                      |');
    printToAll('|  [2] Spotify                         |');
    printToAll('|      spotify.com/artist/tsr          |');
    printToAll('|                                      |');
    printToAll('|  [3] Instagram                       |');
    printToAll('|      @terminatestayresident          |');
    printToAll('|                                      |');
    printToAll('|  [4] Twitter/X                       |');
    printToAll('|      @TSR_band                       |');
    printToAll('|                                      |');
    printToAll('|  [5] Email                           |');
    printToAll('|      contact@tsr-band.com            |');
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

function echoText(args) {
    if (args.length === 0) {
        printToAll('');
        return;
    }
    printToAll(args.join(' '));
}

function typeFile(args) {
    const files = {
        'readme.txt': 'Terminate and Stay Resident - DOS Music Interface\n\nType HELP for commands.',
        'lore.txt': BAND_DATA.lore,
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

    const filename = args[0].toLowerCase();
    if (files[filename]) {
        printToAll('');
        printToAll(files[filename]);
        printToAll('');
    } else {
        printToAll('');
        printToAll(`File not found - ${filename}`);
        printToAll('');
    }
}

function changeDir(args) {
    printToAll('');
    if (args.length === 0 || args[0] === '\\') {
        printToAll('You are in C:\\');
    } else if (args[0] === '..') {
        printToAll('You are in C:\\');
    } else {
        printToAll(`Changed to C:\\${args[0]}`);
    }
    printToAll('');
}

function printWorkingDir() {
    printToAll('');
    printToAll('C:\\TSR');
    printToAll('');
}

function makeDir(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing directory name.');
        printToAll('');
        return;
    }
    printToAll('');
    printToAll(`Directory created: ${args[0]}`);
    printToAll('');
}

function removeDir(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing directory name.');
        printToAll('');
        return;
    }
    printToAll('');
    printToAll(`Directory removed: ${args[0]}`);
    printToAll('');
}

function deleteFile(args) {
    if (args.length === 0) {
        printToAll('');
        printToAll('Missing filename.');
        printToAll('');
        return;
    }
    printToAll('');
    printToAll(`File deleted: ${args[0]}`);
    printToAll('');
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
    printToAll('C:\\TSR');
    printToAll('├── ALBUMS');
    printToAll('│   ├── CARRIERWAVE');
    printToAll('│   │   ├── [1] DREAMING.MP3');
    printToAll('│   │   ├── [2] ENCOUNTER.MP3');
    printToAll('│   │   ├── [3] ENGAGE.MP3');
    printToAll('│   │   ├── [4] JUNE.MP3');
    printToAll('│   │   ├── [5] LETTING GO.MP3');
    printToAll('│   │   ├── [6] LIGHT SPEED.MP3');
    printToAll('│   │   ├── [7] LOCKED IN.MP3');
    printToAll('│   │   ├── [8] PILOT.MP3');
    printToAll('│   │   ├── [9] RIDE.MP3');
    printToAll('│   │   ├── [10] SKYLINE.MP3');
    printToAll('│   │   ├── [11] SOUL.MP3');
    printToAll('│   │   ├── [12] STRAY.MP3');
    printToAll('│   │   ├── [13] TRANSMISSION.MP3');
    printToAll('│   │   ├── [14] TWO THREE.MP3');
    printToAll('│   │   └── [15] WAITING.MP3');
    printToAll('├── LORE.TXT');
    printToAll('├── BAND.DAT');
    printToAll('├── README.TXT');
    printToAll('└── CONFIG.SYS');
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
