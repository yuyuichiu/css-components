const displayNum = document.getElementById("displaying");
const replayBtn = document.getElementById("replay");

let animation = setInterval(numSpin,1000);

replayBtn.addEventListener('click', function(){
    document.querySelector(".counter").style.display = "flex";
    displayNum.parentElement.style.animation = "spinNumber 1s infinite";
    displayNum.innerText = "3";

    animation = setInterval(numSpin,1000);
});

function numSpin(){
    if(displayNum.innerText > 0){
        displayNum.innerText = Number(displayNum.innerText) - 1;
    } else {
        displayNum.parentElement.style.animation = "none";
        displayNum.parentElement.parentElement.style.display = "none";
        clearInterval(animation);
    }
}
