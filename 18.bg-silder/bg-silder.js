const body = document.body;
const sliders = document.querySelectorAll('.slider');
const steps = document.getElementById('steps');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');

var activeIdx = 0;
// For swipe detection
var startX = null;
var swipeX = null;

steps.innerText = `Steps: ${activeIdx + 1} / ${sliders.length}`;

// Swipe Events
body.addEventListener('touchstart',(e) => { 
    // console.log("Start",startX);
    startX = e.touches[0].screenX;
});

body.addEventListener('touchmove',(e) => {
    // update latest x-axis data
    swipeX = e.touches[0].screenX;
});

body.addEventListener('touchend',() => {
    // Detect whether or not a valid swipe action exist
    if(swipeX && swipeX - startX > 100){
        // console.log("Right Swipe Triggered",swipeX - startX);
        sliderMoveLeft();
    }
    else if(swipeX && startX - swipeX > 100){
        // console.log("Left Swipe Triggered",startX - swipeX);
        sliderMoveRight();
    }

    // Clear swipeX memory
    swipeX = null;
    startX = null;
});

// Click Events for buttons
leftBtn.addEventListener('click', sliderMoveLeft);
rightBtn.addEventListener('click', sliderMoveRight);

// Initialize background photo
bodyBackground();

// === Functions ===
function sliderMoveLeft(){
    activeIdx--;
    if(activeIdx < 0){ activeIdx = sliders.length - 1 }
    activeSliderImage();
    bodyBackground();
}

function sliderMoveRight(){
    activeIdx++;
    if(activeIdx > sliders.length-1){ activeIdx = 0 }
    activeSliderImage();
    bodyBackground();
}

// To amend background image of the body
function bodyBackground(){
    body.style.backgroundImage = sliders[activeIdx].style.backgroundImage;
}

// To amend image of gallery
function activeSliderImage(){
    sliders.forEach((item) => {
        item.classList.remove('active');
    });

    sliders[activeIdx].classList.add('active');
    steps.innerText = `Steps: ${activeIdx + 1} / ${sliders.length}`;
}