// setup ascii grid 
const asciiContainer = document.getElementById("ascii");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var grid = [];
var gridlines = [];

var gridlength = screenWidth / 11;
var gridheight = screenHeight / 35;
var fillchar = '.'
if (getRandomInt(0,10) > 4) { fillchar = '_'; } else { fillchar = '.'; }                
addgridline('CarrierWave');
addgridline('Engage');
addgridline('Skyline');
addgridline(`Light${fillchar}Speed`);
addgridline('June');
addgridline(`Ride${fillchar}Scratch`);
addgridline(`Letting${fillchar}Go`);
addgridline(`Cambria`);
addgridline(`Waiting`);
addgridline(`Dreaming`);
addgridline(`Two${fillchar}Three`);
addgridline(`Stray`);
addgridline(`Locked${fillchar}In`);
addgridline(`Transmission`);
addgridline(`In${fillchar}The${fillchar}Night`);
addgridline(`Encounter`);
               
                             
                                                                                
                                   
                                   
var opacity = 1;                                                    
for (let i = 0; i < gridheight; i++){
    // add div 
    let div = document.createElement("div");
    div.id = 'row'+i;
    div.className = 'asciirow';
    div.style.opacity = opacity;
    opacity -= 0.03;
    gridlines.push(div);
    asciiContainer.appendChild(div);

    if (grid[i] === undefined){ grid.push([]); }
    
    while (grid[i].length < gridlength) {
        grid[i].push(fillchar);
    }
    div.innerHTML = grid[i].join('');
}

function updateascii(){
    for (let l = 0; l < gridlines.length; l++){
        let lastChar = grid[l][grid[l].length - 1];
        for (let c = grid[l].length - 1; c > 0; c--){
            grid[l][c] = grid[l][c - 1];
        }
        grid[l][0] = lastChar;
        gridlines[l].innerHTML = grid[l].join('');
    }
}

setInterval(updateascii, 300);


function addtexttoline(line, text){
    for (let i = 0; i < text.length; i++){
        grid[line].push(text[i]);
    }
    console.log(grid[line]);
}

function addgridline(text){
    grid.push([]);

    let startidx = getRandomInt(0,gridlength) - text.length;
    if (startidx < 0){
        startidx = 0;
    }
    for (let j = 0; j < startidx; j++){
        grid[grid.length - 1].push(fillchar);
    }
    for (let i = 0; i < text.length; i++){
        grid[grid.length - 1].push(text[i]);
    }
}