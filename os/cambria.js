let terminalpgimg = document.getElementById("terminalbg-img");
let cambriaMode = false;

function randomScreenFlicker(){
    if (!cambriaMode){return};
    console.log("flicker"); 
    terminalpgimg.classList.add('notopaque');
    terminalpgimg.classList.remove('opaque');

    setTimeout(() => {
        terminalpgimg.classList.add('opaque');
        terminalpgimg.classList.remove('notopaque');

        // small change of a few mere fast flickers
        let extraFlickerChance = Math.random();
        if (extraFlickerChance < .25){
            setTimeout(() => {
                terminalpgimg.classList.add('notopaque');
                terminalpgimg.classList.remove('opaque');
                setTimeout(() => {
                    terminalpgimg.classList.add('opaque');
                    terminalpgimg.classList.remove('notopaque');
                }, 100);
            }, 100);
        }
    }, 100);

}

setInterval(() => {
    let flickerChance = Math.random();
    // flicker very rarely
    if (flickerChance < 0.02){
        randomScreenFlicker();
    }
}, 100);