let increase = document.getElementById('increase');
let decrease = document.getElementById('decrease');
let userSize = document.getElementById('size');
let userColor = document.getElementById("color");
let userClear = document.getElementById("clear");

const canvas = document.getElementById('canvas');
// ctx returns context of canvas drawing board
const ctx = canvas.getContext('2d');

let penSize = 20;

let mouseDown = false;
let from = null;

canvas.addEventListener('mousedown', (e) => {
    mouseDown = true;
    from = {x: e.offsetX, y: e.offsetY }
});

canvas.addEventListener('mouseup', () => { mouseDown = false });
canvas.addEventListener('mouseleave', () => { mouseDown = false });

canvas.addEventListener('mousemove',(e) => {
    if(!mouseDown){return}

    let to = {x: e.offsetX, y: e.offsetY };
    // Draw a rounded connection line
    drawLine(from.x, from.y , to.x, to.y);

    from = to; 
})

// User Interfaces
userColor.addEventListener('input',function(){
    ctx.fillStyle = this.value;
    ctx.strokeStyle = this.value;
})

increase.addEventListener('click',() => {
    if(Number(userSize.innerText) >= 50){ return }
    userSize.innerText = Number(userSize.innerText) + 5;
    penSize = Number(userSize.innerText);
})

decrease.addEventListener('click',() => {
    if(Number(userSize.innerText) <= 10){ return }
    userSize.innerText = Number(userSize.innerText) - 5;
    penSize = Number(userSize.innerText);
})

userClear.addEventListener('click', clearScreen);


function drawLine(x, y, x2, y2){
    ctx.lineCap = "round"; // round, butt or square
    ctx.lineJoin = "round";
    ctx.lineWidth = penSize * 2;
    
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

function clearScreen(){
    mouseDown = false;
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

// function drawDot(x, y, size){
//     ctx.beginPath();
//     ctx.arc(x,y,size,Math.PI * 2, 0, true);
//     ctx.fill();
// }