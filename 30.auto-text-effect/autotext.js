let autotext = document.getElementById("autotext");
let textCursor = document.querySelector(".writer");
let replayButton = document.getElementById("replay");
var textTimeout;
var stage = 0;

// Customizable Area (use | for line-breaks, time in ms)
var textToDisplay = "Welcome to my website!";
var typeSpeed = 125;
var startDelay = 500;


textToDisplay = textToDisplay.split("").map(x => x === " " ? "&nbsp;" : x);

setTimeout(() => {
    textTimeout = setInterval(textAnimation, typeSpeed); 
}, startDelay); 

replayButton.addEventListener('click', replayTextAnimation);


function textAnimation(){
    // Edit the text in DOM
    stage++;
    autotext.innerHTML = textToDisplay.slice(0,stage).join("");

    // Stop interval after all text are written out
    if(stage == textToDisplay.length){
        clearInterval(textTimeout);
        textCursor.style.animation = "flash 2s infinite";
    }
}

function replayTextAnimation(){
    clearInterval(textTimeout);
    autotext.innerText = "";
    stage = 0;
    textCursor.style.animation = "none";
    textTimeout = setInterval(textAnimation, typeSpeed);
}