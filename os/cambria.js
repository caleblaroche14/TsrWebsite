let terminalpgimg = document.getElementById("terminalbg-img");
let cambriaMode = false;

function randomScreenFlicker(){
    setTimeout(() => {toggleDivVisibility(terminalpgimg)},500);
}

function toggleDivVisibility(div,img){
    if (!cambriaMode){return};
    div.classList.add('opaque');
    div.classList.remove('notopaque');
    setTimeout(() => {
        div.classList.remove('opaque');
        div.classList.add('notopaque');
    },getRandomInt(50,4000));
}

setInterval(() => {
    let flickerChance = Math.random();
    if (flickerChance < 0.005){ // 0.05% chance every 10ms
        randomScreenFlicker();
    }
}, 10);