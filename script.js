
var dir = "C:";
var programActive = false;
var commandHistory = [];
var commandIdx = -1;
var volume = 0.7; // default volume at 70%

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
    commandHistory.push(inputStr);
    commandIdx = commandHistory.length;
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

function BootSequence(){
    setTimeout(() => { AddTerminalLine("Booting OS..."); }, 100);
    setTimeout(() => { AddTerminalLine("Loading modules..."); }, 300);
    setTimeout(() => { AddTerminalLine("Starting services..."); }, 500);
    setTimeout(() => { AddTerminalLine("System ready."); }, 700);

    setTimeout(()=> {AddTerminalLine(" _____ ____  ____  ");}, 900);
    setTimeout(()=> {AddTerminalLine("|_   _/ ___||  _ \\ ");}, 1100);
    setTimeout(()=> {AddTerminalLine("  | | \\___ \\| |_) |");}, 1300);
    setTimeout(()=> {AddTerminalLine("  | |  ___) |  _ < ");}, 1440);
    setTimeout(()=> {AddTerminalLine("  |_| |____/|_| \\_\\");}, 1534);
}
// setTimeout(() => { RunCommand("player"); }, 2000);
//setTimeout(() => { RunCommand("cd albums"); }, 2010);
//setTimeout(() => { RunCommand("cd carrierwave"); },2020); 
//setTimeout(() => { RunCommand("txtview ABOUT.txt"); }, 2030);

// add eventlistener for input on up arrow that fills the input with the last command
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && commandIdx > 0) {
            commandIdx--;
            commandInput.value = commandHistory[commandIdx];
        }
        console.log(commandHistory);
    }
});

// add same for down arrow to get the next command
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') {
        e.preventDefault();
        commandIdx++;
        if (commandHistory.length > 0 && commandIdx < commandHistory.length) {
            commandInput.value = commandHistory[commandIdx];
        }
        console.log(commandHistory);
    }
});

function StartComputer(){
    let computer = document.getElementById("computer");
    computer.classList.remove("hidden");
    programActive = true;
    BootSequence();
    SetupVolume();
}

function ShutDownComputer(){
    let computer = document.getElementById("computer");
    computer.classList.add("hidden");
    programActive = false;
    const terminalContent = document.getElementById("terminal-window");
    terminalContent.innerHTML = '';
    dir = "C:";
    commandHistory = [];
    commandIdx = -1;
}

function OpenPlayerOnly(){
    let computer = document.getElementById("computer");
    computer.classList.remove("hidden");
    programActive = true;
    RunCommand("player");
    SetupVolume();
}

function GoToYoutubeChannel(){
    window.open("https://www.youtube.com/@TerminateAndStayResident", "_blank");
}

// generate random number between two inputs
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

function SetupVolume(){
    var voltiles = document.getElementsByClassName("voltile");
    for (let i = 0; i < voltiles.length; i++) {
            console.log(voltiles[i]);
        if (volume * 10 > i) {
            voltiles[i].innerHTML = '▓';
        }else{
            voltiles[i].innerHTML = '░';
        }
    }
    
}