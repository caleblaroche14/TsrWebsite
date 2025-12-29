
var dir = "C:";

function AddTerminalLine(data){
    const terminalContent = document.getElementById("terminal-window");
    const newLine = document.createElement("div");
    newLine.className = "terminal-line";
    newLine.textContent = data;

    let directory = document.getElementById("directory");
    directory.textContent = dir + '>';

   
    terminalContent.appendChild(newLine);
}

function RunCommand(inputStr){
    inputStr = inputStr;
    let commandStr = inputStr.split(' ')[0];
    let params = inputStr.split(' ').slice(1);

    var command = commands.find(c => c.command.toUpperCase() === commandStr.toUpperCase());
    if (command){
        AddTerminalLine(dir + '> ' + inputStr);
        let output = command.execute(params);
        if (output) {
            if (!command.boxWrap){
                AddTerminalLine(output);
                return;
            }
            PrintLinesInBox(output);
        }
    } else{
        AddTerminalLine(`${commandStr} does not exist. Type 'help' for a list of commands.`);
    }
}

const commandInput = document.getElementById('text-input');
commandInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    RunCommand(commandInput.value);
    commandInput.value = '';
  }
});

setTimeout(() => { AddTerminalLine("Booting OS..."); }, 100);
setTimeout(() => { AddTerminalLine("Loading modules..."); }, 300);
setTimeout(() => { AddTerminalLine("Starting services..."); }, 500);
setTimeout(() => { AddTerminalLine("System ready."); }, 700);