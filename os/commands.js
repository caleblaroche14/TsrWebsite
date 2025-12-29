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
          AddTerminalLine('\t' + key + '\\');
        } else {
          AddTerminalLine('\t' + key);
        }
      });
    }
  },
  {
    command: "CD",
    description: "Change directory",
    boxWrap: false,
    execute(args) {
      let currentDir = GetCurrentDirectory();

      if (args.length === 0) {
        return "Please specify a directory.";
      }
      
      // add if it is valid
      if (args[0] === "..") {
        if (/^[A-Z]:$/i.test(dir)) {
          return "Already at root directory.";
        }
        
        let directoryLen = currentDir['id'].split('/').length;
        SetCurrentDirectory(currentDir['id'].split('/').splice(0, directoryLen - 1).join('/'));
        return;
      }

      // check if directory exists
      if (!currentDir.children || !currentDir.children[args[0].toUpperCase()]) {
        return `The system cannot find the path specified: ${args[0]}`;
      }
      if (currentDir.children[args[0].toUpperCase()]['type'] !== 'directory') {
        return `${args[0]} is not a directory.`;
      }
      SetCurrentDirectory(currentDir.children[args[0].toUpperCase()]['id']);
      
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

