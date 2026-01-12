// setup ascii grid 
const asciiContainer = document.getElementById("ascii");
var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var grid = [];
var gridlines = [];

var gridlength = screenWidth / 11;
var gridheight = screenHeight / 35;
var fillchar = '.' 
var targetFps = 5;
var lastFrameTime = 0; 
addgridline(`#######${fillchar}${fillchar}${fillchar}######${fillchar}${fillchar}${fillchar}#######${fillchar}${fillchar}${fillchar}`);
addgridline(`#######${fillchar}${fillchar}#######${fillchar}${fillchar}${fillchar}########${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}##!${fillchar}${fillchar}${fillchar}${fillchar}!##${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}##!${fillchar}${fillchar}###${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}!#!${fillchar}${fillchar}${fillchar}${fillchar}!#!${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}!#!${fillchar}${fillchar}#!#${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}#!!${fillchar}${fillchar}${fillchar}${fillchar}!!##!!${fillchar}${fillchar}${fillchar}${fillchar}#!#!!#!${fillchar}${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}!!!${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}!!#!!!${fillchar}${fillchar}${fillchar}!!#!#!${fillchar}${fillchar}${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}!!=${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}!=!${fillchar}${fillchar}!!=${fillchar}=!!${fillchar}${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}=!=${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}!=!${fillchar}${fillchar}${fillchar}=!=${fillchar}${fillchar}!=!${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}${fillchar}==${fillchar}${fillchar}${fillchar}${fillchar}====${fillchar}==${fillchar}${fillchar}${fillchar}==${fillchar}${fillchar}${fillchar}===${fillchar}${fillchar}`);
addgridline(`${fillchar}${fillchar}${fillchar}=${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}==${fillchar}=${fillchar}=${fillchar}${fillchar}${fillchar}${fillchar}${fillchar}=${fillchar}${fillchar}${fillchar}=${fillchar}=${fillchar}${fillchar}`);

addgridline(`Terminte${fillchar}and${fillchar}Stay${fillchar}Resident`)        
addgridline(`CarrierWave`);
addgridline('Engage');
addgridline(`${fillchar}${fillchar}${fillchar}${fillchar}Skyline`);
addgridline(`Light${fillchar}Speed`);
addgridline('June');
addgridline(`Ride`);
addgridline(`Letting${fillchar}Go`);
addgridline(`Cambria`);
addgridline(`CAN${fillchar}YOU${fillchar}HEAR${fillchar}ME?`);         
addgridline(`Waiting`);
addgridline(`Dreaming`);
addgridline(`Two${fillchar}Three`);
addgridline(`Stray`);
addgridline(`Locked${fillchar}In`);
addgridline(`send${fillchar}${fillchar}me${fillchar}${fillchar}${fillchar}another${fillchar}Transmission`);
addgridline(`In${fillchar}The${fillchar}Night`);
addgridline(`Encounter`);
addgridline(`this${fillchar}time${fillchar}ill${fillchar}listen`);                 

                                        
                                                                                                          
                                   
                                   
var opacity = 1;                                                    
for (let i = 0; i < grid.length; i++){
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

var verticalCounter = 0;
var verticalInterval = 5; 

function updateascii(){
    verticalCounter++;
    
    if (verticalCounter % verticalInterval === 0){
        let lastRow = grid[grid.length - 1];
        for (let i = grid.length - 1; i > 0; i--){
            grid[i] = grid[i - 1];
        }
        grid[0] = lastRow;
    }
    for (let l = 0; l < grid.length; l++){
        let lastChar = grid[l][grid[l].length - 1];
        for (let c = grid[l].length - 1; c > 0; c--){
            grid[l][c] = grid[l][c - 1];
        }
        grid[l][0] = lastChar;
    }

    for (let i = 0; i < gridlines.length; i++){
        gridlines[i].innerHTML = grid[i].join('');
    }
}

function animate(){
    let currentTime = performance.now();
    if (currentTime - lastFrameTime >= (1000 / targetFps)) {
        if (!computerOn){updateascii();}
        lastFrameTime = currentTime;
    }
    requestAnimationFrame(animate);
}
animate();


function addgridline(text){
    grid.push([]);
    
    let startidx = getRandomInt(0,gridlength) - text.length;
    if (startidx < 0 || grid.length < 11){
        startidx = 0;
    }
    for (let j = 0; j < startidx; j++){
        grid[grid.length - 1].push(fillchar);
    }
    for (let i = 0; i < text.length; i++){
        grid[grid.length - 1].push(text[i]);
    }
}