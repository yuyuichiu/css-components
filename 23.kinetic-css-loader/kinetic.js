const triangleUp = document.querySelector(".triangle.up");
const triangleLeft = document.querySelector(".triangle.left");
let rotationTop = 180;
let rotationLeft = 180;
let loopIndex = 0;

setInterval(() => {
    if(!document.hidden){
        if(loopIndex % 2 === 0){
            triangleUp.style.transform = `rotate(${rotationTop}deg)`
            rotationTop += 180;
            setTimeout(() => {
                triangleLeft.style.borderLeftColor = "#ccc";
                triangleUp.style.borderTopColor = "#fff";
            },300);
        } else {
            triangleLeft.style.transform = `rotate(${rotationLeft}deg)`
            rotationLeft += 180;
            setTimeout(() => {
                triangleUp.style.borderTopColor = "#ccc";
                triangleLeft.style.borderLeftColor = "#fff";
            },300);
        }
        loopIndex++;
    }
}, 500);