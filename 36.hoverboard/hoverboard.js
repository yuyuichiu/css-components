const hoverBoard = document.getElementById("hoverboard");
let sqCount = 16 * 16;  // the amount of squares to add on the board
let listOfColors = ['#e74c3c','#8e44ad','#3498db','#e67e22','#2ecc71',"yellow"];


let rangedRand = (min,max) => Math.floor(Math.random() * (max - min + 1) + min);

for(let i = 0; i < sqCount; i++){
    // Constructing the square element
    let square = document.createElement('div');
    square.classList.add('square');

    // Show a random color on hover enter (mouse/point are both ok to use)
    square.addEventListener('mouseenter',() => {
        let randColor = listOfColors[rangedRand(0,listOfColors.length-1)];
        square.style.backgroundColor = randColor;
    })

    // Revert to original color on hover leave
    square.addEventListener('mouseleave',() => {
        square.style.backgroundColor = `#333`;
    })

    // Add square to the board
    hoverBoard.appendChild(square);
}