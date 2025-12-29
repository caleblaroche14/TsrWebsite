# TSR Website - Terminate and Stay Resident

A DOS-style terminal emulator website for the band **Terminate and Stay Resident**.

## Features

- 🖥️ Authentic DOS terminal interface
- 📱 Responsive design (desktop shows computer SVG, mobile shows full-screen terminal)
- 🎵 Music playback with `play` command
- 📀 Album and track listings
- 🖼️ Album artwork viewer
- 📖 Band lore/story
- 👥 Artist information
- ⬇️ Download functionality
- 🔊 Volume control

## Commands

| Command | Description |
|---------|-------------|
| `help` | Show all available commands |
| `albums` | List all albums |
| `tracks <album#>` | List tracks from an album |
| `play <track#>` | Play a specific track |
| `play album <album#>` | Play an entire album |
| `stop` | Stop playback |
| `pause` | Pause/resume playback |
| `volume <0-100>` | Set playback volume |
| `artwork <album#>` | View album artwork |
| `download <track#>` | Download a track |
| `download album <album#>` | Download an album |
| `lore` | Read the band's story |
| `band` | View band member info |
| `band <member#>` | View specific member info |
| `social` | View social media links |
| `clear` / `cls` | Clear the terminal |
| `dir` | Show directory listing |
| `ver` | Version information |
| `about` | About this interface |

## Setup

1. **Add your music files** to `/assets/music/`:
   - `track01.mp3`, `track02.mp3`, etc.

2. **Add album artwork** to `/assets/`:
   - `album1.jpg`, `album2.jpg`, etc.

3. **Update `terminal.js`** with your actual:
   - Band name and info
   - Album titles and years
   - Track names and durations
   - File paths to your music
   - Social media links
   - Band member information
   - Lore/story text

## File Structure

```
TsrWebsite/
├── index.html          # Main HTML file
├── styles.css          # All styling (CRT effects, terminal look)
├── terminal.js         # Terminal logic and band data
├── README.md           # This file
└── assets/
    ├── doscomputer.svg # DOS computer graphic
    ├── album1.jpg      # Album artwork (add your own)
    ├── album2.jpg      # Album artwork (add your own)
    └── music/          # Audio files (add your own)
        ├── track01.mp3
        ├── track02.mp3
        └── ...
```

## Customization

### Changing Colors
Edit the CSS variables in `styles.css`:
- Main green: `#33ff33`
- Background: `#0a0a0a`
- Yellow (commands): `#ffff33`
- Cyan (info): `#33ffff`
- Magenta (headers): `#ff33ff`

### Adding More Commands
Add new entries to the `COMMANDS` object in `terminal.js`.

### Updating Band Data
Edit the `BAND_DATA` object at the top of `terminal.js`.

## Browser Support

Works on all modern browsers. Uses:
- CSS Grid/Flexbox
- ES6+ JavaScript
- Web Audio API
- Google Fonts (VT323)

## License

Created for Terminate and Stay Resident.

---

*Stay resident. Stay vigilant. The next interrupt is coming.*
