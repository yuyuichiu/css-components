const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    boxesContainer.classList.toggle('big');
});

// Add the image boxes to the DOM
let seg = 125;

for(let i = 0; i < 4; i++){
    for(let j = 0; j < 4; j++){
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.backgroundPosition = `-${seg * j}px -${seg * i}px`;

        boxesContainer.appendChild(box);
    }
}