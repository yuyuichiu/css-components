// Edit the content of gallery through JavaScript
const descriptions = document.querySelectorAll(".description");
const photos = document.querySelectorAll(".photo");
const up = document.getElementById("up");
const down = document.getElementById("down");
const left = document.querySelector(".left");
const right = document.querySelector(".gallery");

let activeSlideIndex = 0;
let desTitle = ["Blossom","Night Forest","Solar Light","Lake"];
let desSub = ["in spring","with a light","on the cold lands","under the sunset"];

// Upload description to html
(function(){
    // Upload descriptions
    for(let i = 0; i < descriptions.length; i++){
        descriptions[descriptions.length - 1 - i].innerHTML = `
            <h1>${desTitle[i]}</h1>
            <small>${desSub[i]}</small>
        `
    }
})()

up.addEventListener('click',() => {
    activeSlideIndex--;
    if(activeSlideIndex < 0){ activeSlideIndex = photos.length - 1 }
    moveGallery();
})

down.addEventListener('click',() => {
    activeSlideIndex++;
    if(activeSlideIndex > photos.length - 1){ activeSlideIndex = 0 }
    moveGallery();
})


function moveGallery(){
    // right => slide down when down
    // Move description and photo, on separate directions
    left.style.transform = `translate(0,${-300 + activeSlideIndex * 100}vh)`;
    right.style.transform = `translate(0,${activeSlideIndex * -100}vh)`;
}