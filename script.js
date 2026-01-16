
var dir = "C:";
var programActive = false;
var computerOn = false;
var commandHistory = [];
var commandIdx = -1;
var volume = 0.7; // default volume at 70%
const room = document.getElementById("room");
const terminal = document.getElementById('terminal');
const terminalinput = document.getElementById('text-input');
const blackdiv = document.getElementById('blackdiv');


// setup init page 


// the smaller the window, show more to the left of the room 

function updateRoomPosition(){
    let windowWidth = window.innerWidth;
    if (windowWidth < 600){
        room.classList.add('roommobile');
        room.classList.remove('roomdesktop');
    }else{
        room.classList.add('roomdesktop');
        room.classList.remove('roommobile');
    }
    console.log(windowWidth);;
}

window.addEventListener("resize", function(){
    updateRoomPosition();
});
updateRoomPosition();


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
const customCursor = document.getElementById('custom-cursor');
const directoryElement = document.getElementById('directory');

// Initialize prompt and cursor once DOM is ready
function initCursor() {
    directoryElement.textContent = dir + '>';
    customCursor.style.visibility = 'visible';
    updateCursorPosition();
}

// Function to update cursor position
function updateCursorPosition() {
    const text = commandInput.value.substring(0, commandInput.selectionStart);
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = '20px DOS, monospace';
    
    const directoryWidth = context.measureText(directoryElement.textContent).width;
    const textWidth = context.measureText(text).width;
    
    customCursor.style.left = `${directoryWidth + textWidth + 8}px`;
}

commandInput.addEventListener('input', updateCursorPosition);
commandInput.addEventListener('click', updateCursorPosition);
commandInput.addEventListener('keyup', updateCursorPosition);
commandInput.addEventListener('focus', updateCursorPosition);

commandInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    RunCommand(commandInput.value);
    commandInput.value = '';
    updateCursorPosition();
  }
});

// Position cursor correctly on load
initCursor();

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


// add eventlistener for input on up arrow that fills the input with the last command
commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0 && commandIdx > 0) {
            commandIdx--;
            commandInput.value = commandHistory[commandIdx];
        }
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
    }
});

function StartComputer(){
    
    if (!computerOn){{
        ShowBlackDiv();
        ZoomOnComputer();
        setTimeout(() => {
            let computer = document.getElementById("computer");
            computer.classList.remove("hidden");
            BootSequence();
            SetupVolume();
            programActive = true;
            // focus the input box after boot sequence
            setTimeout(() => {
                const inputBox = document.getElementById("text-input");
                inputBox.focus();

            }, 100);
            
        }, 2000);
    };}
    

    computerOn = true;

}

function ShutDownComputer(){
    computerOn = false;
    let computer = document.getElementById("computer");
    computer.classList.add("hidden");
    programActive = false;
    const terminalContent = document.getElementById("terminal-window");
    terminalContent.innerHTML = '';
    dir = "C:";
    commandHistory = [];
    commandIdx = -1;
    ZoomOffComputer();
    HideBlackDiv();
}

function OpenPlayerOnly(){
    StartComputer();
    setTimeout(()=>{RunCommand("PLAYER");},5000);
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
        if (volume * 10 > i) {
            voltiles[i].innerHTML = '▓';
        }else{
            voltiles[i].innerHTML = '░';
        }
    }
    
}

function toggleProgramVisual(){
    programActive = !programActive;
    terminal.classList.toggle("hidden");
    terminalinput.classList.toggle("noinput");
}

function ZoomOnComputer(){
    document.getElementById("room").classList.add("zoomoncomputer");
}

function ZoomOffComputer(){
    document.getElementById("room").classList.remove("zoomoncomputer");
}

function ShowBlackDiv(){
    blackdiv.classList.add("nothiddenSlow");
    blackdiv.classList.remove("hiddenFast");
}

function HideBlackDiv(){
    blackdiv.classList.remove("nothiddenSlow");
    blackdiv.classList.add("hiddenFast");
}