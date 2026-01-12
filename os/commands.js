const commands = [
  {
    command: "ECHO",
    description: "Display a line of text",
    boxWrap: false,
    execute(args) { return args.join(' '); }
  },
  {
    command: "HELP",
    description: "Show built-in commands",
    boxWrap: true,
    execute() { return commands.map(c => `${c.command} - ${c.description}`).join('\n'); }
  },
  {
    command: "EMAILLIST",
    description: "Sign up for our email list [email]",
    boxWrap: false,
    execute(args) {
      if (!args || args.length < 1) {
        return "Usage: EMAILLIST email@example.com";
      }
      
      const email = args[0];
      const name = args.slice(1).join(' ').replace(/^"|"$/g, '') || '';
      
      // Validate email format
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return "Invalid email format.";
      }
      
      const formId = '1FAIpQLSe-sF-CHypW7ngI3GZIh3Rubv4flTw3bz7mz-QnzQk6ELu5Wg';
      
      // Create form data
      const formData = new FormData();
      formData.append('entry.1844914415', email);
      if (name) formData.append('entry.589645032', name);
      
      // Log the submission for debugging
      console.log('Submitting to Google Form:', { email, name });
      
      // Submit with no-cors (Google Forms doesn't set proper CORS headers)
      fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
        method: 'POST',
        body: formData,
        mode: 'no-cors'
      })
      .then(response => {
        console.log('Form submitted successfully (no-cors mode)');
        AddTerminalLine("Submitted to email list!");
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        AddTerminalLine("Request sent (check browser console for details)");
      });
      
      return "Submitting to Google Form...";
    }
  },
  {
    command: "CLS",
    description: "Clear the screen",
    boxWrap: false,
    execute() {
      document.getElementById('terminal-window').innerHTML = '';
      return ''; 
    }
  },
    {
    command: "DATE",
    description: "Show the current date and time",
    boxWrap: false,
    execute() {
      const now = new Date();
      return now.toString();
    }
  },  
  {
    command: "DIR",
    description: "List directory contents",
    boxWrap: false,
    execute() {
      const node = GetCurrentDirectory();
      if (!node || !node.children) return 'Directory not found.';

      const files = node.children;
      const names = Object.keys(files);
      if (names.length === 0) {
        return "Directory is empty.";
      }

      AddTerminalLine('Directory listing: ' + dir);

      names.forEach((key) => {
        const value = files[key];
        if (value && value.type === 'directory') {
          AddTerminalLine(key) ;
        } else {
          AddTerminalLine(key);
        }
      });
    }
  },
  {
    command: "CD",
    description: "Change directory",
    boxWrap: false,
  execute(args) {
    const currentDir = GetCurrentDirectory();
    if (!args || args.length === 0) return "Please specify a directory.";

    const target = args[0];

    if (target === "..") {
      if (/^[A-Z]:$/i.test(dir)) return "Already at root directory.";
      const parts = String(currentDir.id).split(/[\\/]+/).filter(Boolean);
      parts.pop();
      const newId = parts.length ? parts.join('/') : parts[0] || 'C:';
      SetCurrentDirectory(newId);
      return;
    }

    if (!currentDir || !currentDir.children) {
      return `The system cannot find the path specified: ${target}`;
    }

    const matchKey = Object.keys(currentDir.children)
      .find(k => k.toLowerCase() === target.toLowerCase());

    if (!matchKey) return `The system cannot find the path specified: ${target}`;
    if (currentDir.children[matchKey].type !== 'directory') return `${target} is not a directory.`;

    SetCurrentDirectory(currentDir.children[matchKey].id);
  }
  },
  {
    command: "TREE",
    description: "Display directory tree",
    boxWrap: true,
    execute() {
        function buildTree(node, prefix = '') {
          let result = '';
          const keys = Object.keys(node.children || {});
          keys.forEach((key, index) => {
            const isLast = index === keys.length - 1;
            const pointer = isLast ? '└── ' : '├── ';
            result += prefix + pointer + key + (node.children[key].type === 'directory' ? '\\' : '') + '\n';
            if (node.children[key].type === 'directory') {
              const newPrefix = prefix + (isLast ? '    ' : '│   ');
              result += buildTree(node.children[key], newPrefix);
            }
          });
          return result;
      }

      const currentNode = GetCurrentDirectory();
      if (!currentNode) return 'Directory not found.';
      const treeText = buildTree(currentNode);
      return treeText || 'Directory is empty.';
    }
  },
  {
    command: "PLAYER",
    description: "Launch audio player",
    boxWrap: false,
    execute(args){
      toggleProgramVisual();
      AddTerminalLine("Launching audio player...");
      loadingdiv = document.getElementById("loading");
      playerdiv = document.getElementById("player");

      songs = [];

      playerdiv.classList.remove("hidden");
 
      const files = [];
      traverseNode(GetCurrentDirectory(), {
        onFile: (f, p, depth, key) => {
          const tags = f.tags || [];
          if (tags.some(t => String(t).toLowerCase() === 'audio')) {
            files.push({ node: f, name: key, path: p, depth });
            if (f.filepath) songs.push(f.filepath);
          }
        }
      });
      player.addSongs(files);

      let songdivs = document.getElementsByClassName("song");
      for (let i = 0; i < songdivs.length; i++) {
        // show only the first 8 songs to avoid scolling
        if (i < 8) {
          songdivs[i].classList.remove("hidden");
        } else {
          songdivs[i].classList.add("hidden");
        }
      }

      player.keyHandler = function(event) {
        const audioEl = player.audio || document.getElementById('audio');
        if (event.key === " ") {
          player.toggle();
        } else if (event.key.toLowerCase() === "s") {
          player.pause();
          if (audioEl) audioEl.currentTime = 0;
        } else if (event.key.toLowerCase() === "q") {
          player.close();
          toggleProgramVisual();
          if (audioEl) audioEl.currentTime = 0;
          playerdiv.classList.add("hidden");
        } else if (event.key.toLowerCase() === "n"){
          player.next();
        } else if (event.key.toLowerCase() === "p"){
          player.prev();
        } else if (event.key === "ArrowDown") {
          if (player.selectedSongIndex + 1 < player.playlist.length) {
            player.changeSelectedSong(player.selectedSongIndex + 1);
          }
        } else if (event.key === "ArrowUp") {
          if (player.selectedSongIndex - 1 >= 0) {
            player.changeSelectedSong(player.selectedSongIndex - 1);
          }
        } else if (event.key === "-") {
          volume = Math.max(0, volume - 0.1);
          if (audioEl) audioEl.volume = volume;
          SetupVolume();
        } else if (event.key === "+") {
          volume = Math.min(1, volume + 0.1);
          if (audioEl) audioEl.volume = volume;
          SetupVolume();
        }
      };
      addEventListener('keydown', player.keyHandler);

      player.changeSelectedSong(0);
      return;

    }
  },
  {
    command: "MEM",
    description: "Display memory usage",
    boxWrap: false,
    execute() {
      AddTerminalLine('Name\t\t\tTotal\t\t\tConventional\t\tUpper Memory');
      AddTerminalLine("-------\t\t\t-------\t\t\t------------\t\t------------");
      AddTerminalLine("MSDOS\t\t\t576 KB\t\t\t448 KB\t\t\t128 KB");
      AddTerminalLine("CAMBRIA\t\t\t2048 KB\t\t\t1024 KB\t\t\t1024 KB");
      AddTerminalLine("FREE\t\t\t8192 KB\t\t\t8192 KB\t\t\t0 KB");
      AddTerminalLine("TOTAL\t\t\t10816 KB\t\t9664 KB\t\t\t1152 KB");
    }
  },
  {
    command: "IMGVIEW",
    description: "View image file (with file name)",
    boxWrap: false,
    execute(args) {      
      const imageDisplay = document.getElementById("image-display");
      const displayedImage = document.getElementById("displayed-image");

      displayedImage.classList.add("bit8");

      let imgblocks = document.getElementsByClassName("img-block");
      for (let i = 0; i < imgblocks.length; i++) {
        imgblocks[i].classList.remove("opaque");
      }

      if (!args || args.length === 0) return "Please specify an image file name.";

      const target = args[0];
      const currentDir = GetCurrentDirectory();
      if (!currentDir || !currentDir.children) {
        return `The system cannot find the path specified: ${target}`;
      }

      const matchKey = Object.keys(currentDir.children)
        .find(k => k.toLowerCase() === target.toLowerCase());

      if (!matchKey) return `The system cannot find the file specified: ${target}`;
      const fileNode = currentDir.children[matchKey];
      if (fileNode.type !== 'file' || !fileNode.filepath) return `${target} is not a valid image file.`;
      

      displayedImage.src = fileNode.filepath;
      imageDisplay.classList.remove("hidden");
      toggleProgramVisual();

      for (let i = 0; i < imgblocks.length; i++) {
        setTimeout(() => {
          imgblocks[i].classList.add("opaque");
        }, (i*200));
      }

      setTimeout(()=>{displayedImage.classList.remove("bit8");}, getRandomInt(3000, 5000)); 
     

      // add an event listener to hide the image when "q" is pressed
      function hideImageOnQ(event) {
        if (event.key.toLowerCase() === 'q') {
          toggleProgramVisual();
          imageDisplay.classList.add("hidden");
          displayedImage.src = '';
          removeEventListener('keydown', hideImageOnQ);
          // focus on text-input
          var inputBox = document.getElementById("text-input");
          inputBox.focus();
          inputBox.select();
        }
      }
      addEventListener('keydown', hideImageOnQ);

      return `Displaying image: ${target}`;
    }
  },
  {
    command: "DOWNLOAD",
    description: "Download a file (with file name or directory)",
    boxWrap: false,
    execute(args) {
      if (!args || args.length === 0) return "Please specify a file or directory name.";
      
      const target = args[0];
      const currentDir = GetCurrentDirectory();
      if (!currentDir || !currentDir.children) {
        return `The system cannot find the path specified: ${target}`;
      }

      const matchKey = Object.keys(currentDir.children)
        .find(k => k.toLowerCase() === target.toLowerCase());

      if (!matchKey) return `The system cannot find the file or directory specified: ${target}`;
      const fileNode = currentDir.children[matchKey];
      if (fileNode.type === 'directory') return `${target} is a directory. Please specify a file.`;
      if (!fileNode.filepath) return `${target} is not a valid file.`;

      const link = document.createElement('a');
      link.href = fileNode.filepath;
      link.download = target;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      return `Downloading file: ${target}`;
    }
  },
  {
    command: "TYPE",
    description: "View text file (with file name)",
    boxWrap: false,
    execute(args) {
      const textDisplay = document.getElementById("text-display");
      const displayedText = document.getElementById("displayed-text");

      if (!args || args.length === 0) return "Please specify a text file name.";

      const target = args[0];
      const currentDir = GetCurrentDirectory(); 
      if (!currentDir || !currentDir.children) {
        return `The system cannot find the path specified: ${target}`;
      }

      const matchKey = Object.keys(currentDir.children)
        .find(k => k.toLowerCase() === target.toLowerCase());

      if (!matchKey) return `The system cannot find the file specified: ${target}`;
      const fileNode = currentDir.children[matchKey];

      if (!fileNode.content) return `${target} has no viewable text content.`;

      displayedText.innerHTML = fileNode.content || 'No Text Available.';
      textDisplay.classList.remove("hidden");
      toggleProgramVisual();

      // add an event listener to hide the text when "q" is pressed
      function hideTextOnQ(event) {
        if (event.key.toLowerCase() === 'q') {
          toggleProgramVisual();
          textDisplay.classList.add("hidden");
          displayedText.textContent = '';
          removeEventListener('keydown', hideTextOnQ);
          var inputBox = document.getElementById("text-input");
          inputBox.focus();
          inputBox.select();
        }
      }
      addEventListener('keydown', hideTextOnQ);

      return `Displaying text file: ${target}`;
    }
  },
  {
    command: "SCAN",
    description: "Scan inputted file to see if it contains viruses",
    boxWrap: false,
    execute(args) {
      if (!args || args.length === 0) return "Please specify a file name to scan.";

      const target = args[0];
      const currentDir = GetCurrentDirectory();
      if (!currentDir || !currentDir.children) {
        return `The system cannot find the path specified: ${target}`;
      }

      const matchKey = Object.keys(currentDir.children)
        .find(k => k.toLowerCase() === target.toLowerCase());

      if (!matchKey) return `The system cannot find the file specified: ${target}`;
      const fileNode = currentDir.children[matchKey];
      if (fileNode.type !== 'file') return `${target} is not a valid file.`;

      let scandisplay = document.getElementById("scan-display");
      let scanlog = document.getElementById("scan-log");
      
      scandisplay.classList.remove("hidden");
      scanlog.innerHTML = '';


      function hideScanOnQ(event) {
        if (event.key.toLowerCase() === 'q') {
          scandisplay.classList.add("hidden");
          scanlog.innerHTML = '';
          removeEventListener('keydown', hideScanOnQ);
          var inputBox = document.getElementById("text-input");
          inputBox.focus();
          inputBox.select();
        }
      }
      addEventListener('keydown', hideScanOnQ);

      scanlog.innerHTML += `Scanning file: ${target}...<br>`;
      
      // Simulate scanning process
      AddTerminalLine(`Scanning file: ${target}...`);
      if (fileNode.isInfected) {
        cambriaMode = true;
        scanlog.innerHTML += `Virus detected! File ${target} is infected with CAMBRIA.TSR<br>`;
        setTimeout(() => {RunCommand('CLS');}, 100);
        setTimeout(() => {RunCommand('ECHO CAN YOU HEAR ME?');}, 500);
        setTimeout(() => {RunCommand('ECHO CAN YOU HEAR ME?');}, 800);
        setTimeout(() => {RunCommand('ECHO CAN YOU HEAR ME?');}, 1000);
        setTimeout(() => {RunCommand('ECHO CAN YOU HEAR ME?');}, 1200);

        // do variations of this 20 more times
        setTimeout(() => {RunCommand('ECHO IVE BEEN TRYING TO REACH YOU');}, 1500);
        setTimeout(() => {RunCommand('ECHO IVE BEEN TRYING TO REACH YOU');}, 1800);
        setTimeout(() => {RunCommand('ECHO IVE BEEN TRYING TO REACH YOU');}, 2000);
        setTimeout(() => {RunCommand('ECHO IVE BEEN TRYING TO REACH YOU');}, 2200);
        setTimeout(() => {RunCommand('ECHO HELLO');}, 2500);
        setTimeout(() => {RunCommand('ECHO HELLO');}, 2800);
        setTimeout(() => {RunCommand('ECHO HELLO');}, 3000);
        setTimeout(() => {RunCommand('ECHO HELLO');}, 3200);
        setTimeout(() => {RunCommand('ECHO CAN ANYONE HEAR THIS');}, 3500);
        setTimeout(() => {RunCommand('ECHO CAN ANYONE HEAR THIS');}, 3800);

        
        setTimeout(() => {RunCommand('ECHO HELLO?');}, 10200);
        setTimeout(() => {RunCommand('ECHO LETS PLAY A GAME OR SOMETHING');}, 10500);
      }

      // loop over all properties of fileNode and print them to the scanlog
      if (fileNode.type === 'file'){
        for (const prop in fileNode) {
          if (fileNode.hasOwnProperty(prop)) {
            scanlog.innerHTML += `${prop}: ${fileNode[prop]}<br>`;
          }
        }
      } else{
        scanlog.innerHTML += `File type is not valid for scanning.<br>`;
      }
    }
  },
  {
    command: "EXIT",
    description: "Exit the terminal",
    boxWrap: false,
    execute() {
      ShutDownComputer();
    }
  }
];

function GetCurrentDirectory(){
  const parts = String(dir).split(/[\\/]+/).filter(Boolean);

  let position = filesystem["root"];
  if (parts.length === 0) return position;

  for (let i = 0; i < parts.length; i++) {
    const seg = parts[i];
    if (!position || !position.children) return null;

    if (position.children[seg]) {
      position = position.children[seg];
      continue;
    }

    const key = Object.keys(position.children).find(k => k.toLowerCase() === seg.toLowerCase());
    if (key) {
      position = position.children[key];
      continue;
    }
    return null;
  }
  return position;
}

function SetCurrentDirectory(newDir){
  let directory = document.getElementById("directory");
  if (typeof newDir === 'string') {
    dir = newDir.replace(/\//g, '\\');
  } else {
    dir = newDir;
  }
  directory.textContent = dir + '>';
}

function traverseNode(node, { onFile, onDir, path = '', depth = 0, shouldStop } = {}, key = '') {
  if (!node) return;
  if (node.type === 'file') {
    if (onFile) onFile(node, path, depth, key);
    return;
  }
  if (node.type === 'directory') {
    if (onDir) onDir(node, path, depth, key);
    const children = node.children || {};
    for (const childKey of Object.keys(children)) {
      if (shouldStop && shouldStop()) return;
      const child = children[childKey];
      const childPath = path ? `${path}/${childKey}` : childKey;
      traverseNode(child, { onFile, onDir, path: childPath, depth: depth + 1, shouldStop }, childKey);
    }
  }
}

function AddSongsToPlayer(songs){
  const playerList = document.getElementById("song-list");
  
  songs.forEach(song => {
    const listItem = document.createElement("div");
    listItem.className = "song";
    listItem.textContent = song.node.artist + ' -  ' +  song.name.replace('.mp3','');
    listItem.filepath = song.filepath;
    playerList.appendChild(listItem);
  });
}

const player = {
  selectedSongIndex: 0,
  paused: true,
  playlist: [],
  audio: document.getElementById('audio'),
  currentSongTime: 0,
  artistdiv: document.getElementById('np-artist'),
  titlediv: document.getElementById('np-title'),
  albumdiv: document.getElementById('np-album'),
  timediv: document.getElementById('np-time'),
  audioCtx: null,
  analyser: null,
  renderFrameId: null,

  init() {
    const audio = document.getElementById('audio');
    if (!audio) return;
    audio.addEventListener('ended', this.next.bind(this));
    document.getElementById("terminal-window").classList.add("hidden");
    programActive = true;
    
    // Initialize AudioContext once
    if (!this.audioCtx) {
      this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      if (this.audioCtx.state === 'suspended') {
        this.audioCtx.resume();
      }
      this.analyser = this.audioCtx.createAnalyser();
      const source = this.audioCtx.createMediaElementSource(audio);
      source.connect(this.analyser);
      this.analyser.connect(this.audioCtx.destination);
      this.analyser.fftSize = 2048;
    }
  },

  play(index) {
    if (this.renderFrameId) cancelAnimationFrame(this.renderFrameId);
    if (!this.audio) this.init();
    if (!this.audio) return;
    const target = (typeof index === 'number') ? index : (this.selectedSongIndex || 0);
    if (target < 0 || target >= this.playlist.length) return;

    const file = this.playlist[target].filepath || '';
    if (!file) return;

    const isNewTrack = this.currentIndex !== target || !this.audio.src || !this.audio.src.includes(file);

    if (isNewTrack) {
      this.currentIndex = target;
      this.selectedSongIndex = target;
      this.currentSongTime = 0; 
      this.audio.src = file;
      this.audio.load();
    } else {
      if (this.currentSongTime) {
        try { this.audio.currentTime = this.currentSongTime; } catch (e) {}
      }
    }

    this.audio.play()
      .then(() => { this.paused = false; this.highlightCurrent(this.currentIndex); })
      .catch(err => console.warn('Play failed:', err));

    this.artistdiv.textContent = 'Artist: ' + (this.playlist[target].node.artist || 'Unknown');
    this.titlediv.textContent = 'Title: ' + this.playlist[target].name.replace(/\.mp3$/i, '');
    this.albumdiv.textContent = 'Album: ' + (this.playlist[target].node.album || 'Unknown');

    // update time with a variabled setinterval so we can stop it when pausing
    if (this.timeInterval) clearInterval(this.timeInterval);
    this.timeInterval = setInterval(() => {
      if (this.audio && !this.audio.paused) {
        const current = Math.floor(this.audio.currentTime);
        const minutes = Math.floor(current / 60);
        const seconds = current % 60;
        this.timediv.textContent = ` ${minutes}:${seconds.toString().padStart(2, '0')} / ${Math.floor(this.audio.duration / 60)}:${Math.floor(this.audio.duration % 60).toString().padStart(2, '0')}`;
      }
    }, 1000);

    // Start visualizer animation loop - DOS style
    const dataArray = new Uint8Array(this.analyser.frequencyBinCount);
    const visBars = document.getElementsByClassName('vis-bar');

    
    let lastUpdate = 0;
    const updateInterval = 10; // Update every 100ms (10fps) - DOS style

    const renderFrame = (timestamp) => {
      this.renderFrameId = requestAnimationFrame(renderFrame);
      
      // Throttle updates to 10fps like DOS would
      if (timestamp - lastUpdate < updateInterval) return;
      lastUpdate = timestamp;
      
      this.analyser.getByteFrequencyData(dataArray);
      
      // Simple linear frequency distribution (no exponential)
      const maxFreqBin = Math.floor((18000 / (this.audioCtx.sampleRate / this.analyser.fftSize)));
      const freqRange = maxFreqBin;
      const barsPerFreq = freqRange / visBars.length;
      
      for (let i = 0; i < visBars.length; i++) {
        const freqIndex = Math.floor(i * barsPerFreq);
        let scale = dataArray[freqIndex] / 255;
        
        // Quantize to 8 levels (chunky like DOS)
        scale = Math.floor(scale * 8) / 8;
        
        visBars[i].style.height = `${scale * 100}%`;
        visBars[i].style.backgroundColor = `rgb(${scale * 255}, ${scale * 50}, ${255 - (scale * 100)})`;
      }
    };
    renderFrame();
  },

  pause() {
    if (!this.audio) return;
    if (this.timeInterval) clearInterval(this.timeInterval);
    try { this.currentSongTime = this.audio.currentTime || 0; } catch (e) { this.currentSongTime = 0; }
    this.audio.pause();
    this.paused = true;
  },

  toggle() {
    if (this.audio.paused) this.play(); else this.pause();
  },

  next() {
    if (this.selectedSongIndex + 1 < this.playlist.length) {
      this.pause();
      this.changeSelectedSong(this.selectedSongIndex + 1);
      this.play();
    } else {
      this.pause();
    }
  },

  prev() {
    if (this.selectedSongIndex - 1 >= 0) {
      this.pause();
      this.changeSelectedSong(this.selectedSongIndex - 1);
      this.play();
    } else {
      this.pause();
    }
  },

  highlightCurrent(index) {
    const items = document.querySelectorAll('#song-list .song');
    items.forEach(it => it.classList.toggle('active', Number(it.dataset.index) === index));
  },

  addSongs(songs) {
    this.playlist = songs.map(s => ({
      name: s.name,
      filepath: s.node.filepath || s.filepath || '',
      node: s.node
    }));
    const playerList = document.getElementById("song-list");
    if (!playerList) return;
    playerList.innerHTML = '';
    this.playlist.forEach((song, i) => {
      const listItem = document.createElement("div");
      listItem.className = "song";
      const artist = song.node && song.node.artist ? song.node.artist + ' - ' : '';
      listItem.textContent = artist + song.name.replace(/\.mp3$/i, '');
      listItem.dataset.index = i;
      listItem.addEventListener('click', () => this.play(i));
      playerList.appendChild(listItem);
    });
    this.init();
  },

  changeSelectedSong(index) {
    if (index < 0 || index >= this.playlist.length) return;
    this.selectedSongIndex = index;
    this.highlightCurrent(index);

    // if we've going over a modulo of 8, hide the fisrt 8 songs and show the next 8
    // if we're going back over a modulo of 8, hide the last 8 songs and show the previous 8
    let songdivs = document.getElementsByClassName("song");
    for (let i = 0; i < songdivs.length; i++) {
      if (i >= index - (index % 8) && i < index - (index % 8) + 8) {
        let moreunder = index + (8 - (index % 8));
        let moreover = index - (index % 8) - 1;
        if (moreunder){
          // append ... div if there are more songs under that scrolls when its the selected song
          if (moreunder < songdivs.length && !document.getElementById("more-under")) {
            let moreunderdiv = document.createElement("div");
            moreunderdiv.id = "more-under";
            moreunderdiv.textContent = "...";
            songdivs[moreunder - 1].after(moreunderdiv);
          }
        }
        songdivs[i].classList.remove("hidden");
      } else {
        songdivs[i].classList.add("hidden");
      }
    }
  },

  close() {
    this.pause();
    if (this.renderFrameId) cancelAnimationFrame(this.renderFrameId);
    if (this.timeInterval) clearInterval(this.timeInterval);
    if (this.keyHandler) { removeEventListener('keydown', this.keyHandler); this.keyHandler = null; }
    this.audio.src = '';
    this.currentIndex = null;
    this.selectedSongIndex = 0;
    this.currentSongTime = 0;
    document.getElementById("song-list").innerHTML = '';
    document.getElementById("player").classList.add("hidden");
    document.getElementById("terminal-window").classList.remove("hidden");
    programActive = false;
    let input = document.getElementById('text-input');
    input.focus()
    input.value = '';
  }
};

function ClickKey(key){
  window.dispatchEvent(new KeyboardEvent('keydown', {'key': key}));
}