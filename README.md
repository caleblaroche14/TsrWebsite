# TSR Website

A retro DOS terminal interface for the band Terminate and Stay Resident (TSR). The website simulates a command-line operating system where users navigate a virtual filesystem to access band information, stream music, and view artwork.

## Features

- **Virtual DOS Environment**: Full terminal emulator with working filesystem commands (DIR, CD, TREE, TYPE, etc.)
- **Music Player**: Stream tracks from the Carrier Wave album through a built-in terminal-based audio player
- **Interactive Computer**: SVG-rendered classic computer with functional power button
- **Virtual Filesystem**: Hierarchical directory structure containing band info, member profiles, social links, and album data
- **Email Signup**: Newsletter subscription via Netlify serverless function
- **Responsive Design**: Adapts from desktop to mobile with terminal-optimized layouts

## Technology Stack

- Pure JavaScript (no frameworks)
- HTML5 Audio API for music playback
- CSS with CRT monitor effects (scanlines, vignette, flicker)
- VT323 monospace font for authentic DOS appearance
- Netlify Functions for backend email handling
- JSON-based data structure for band content

## Project Structure

```
├── index.html              # Main HTML with inline SVG computer
├── script.js               # Terminal initialization and event handling
├── styles.css              # DOS terminal styling and effects
├── os/
│   ├── commands.js         # Terminal command implementations
│   ├── filesystem.js       # Virtual filesystem structure
│   └── utilities.js        # Helper functions
├── data/
│   ├── albums.json         # Album information
│   ├── bandInfo.json       # Band details
│   ├── members.json        # Band member profiles
│   ├── socials.json        # Social media links
│   └── bootSequence.json   # Startup ASCII art
├── assets/
│   ├── fonts/              # Custom fonts
│   ├── images/             # Graphics and artwork
│   └── music/albums/       # Audio files
└── netlify/functions/
    └── submit-email.js     # Email submission handler

```

## Available Commands

- `HELP` - Display all available commands
- `DIR` - List directory contents
- `CD [path]` - Change directory
- `TREE` - Display directory tree structure
- `TYPE [file]` - Read file contents
- `PLAY [album]` - Launch music player
- `CLS` - Clear terminal screen
- `DATE` - Show current date and time
- `ECHO [text]` - Display text

## Running Locally

1. Clone the repository
2. Open `index.html` in a web browser
3. Click the power button on the computer to boot the terminal

For development with Netlify functions:
```bash
npm install netlify-cli -g
netlify dev
```

## Band Information

- **Name**: Terminate and Stay Resident (TSR)
- **Genre**: Electronic / Synthwave / Indie
- **Album**: Carrier Wave (2024)
- **Tracks**: 15 original compositions

## License

Copyright 2025 Terminate and Stay Resident