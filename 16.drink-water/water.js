const mainCup = document.querySelector('.cup');
const remained = document.getElementById('remained');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const smallCup = document.querySelectorAll('.cup-small');
const roadPoints = ["250 ml", "500 ml", "750 ml", "1 L", "1250 ml", "1500 ml", "1750 ml", "2 L"];
var waterLevel = 0;

// add click event to small cups
// go to that level based on SUMMED water level
smallCup.forEach((item) => {
    item.addEventListener('click', () => {
        hightLightCups(item);
        updateBigCup();
    });
});

function hightLightCups(tar){
    // Adjust Total Water Level, up to maximum of 8(2L way-mark)
    waterLevel += roadPoints.indexOf(tar.innerText) + 1;
    waterLevel = waterLevel > 8 ? 8 : waterLevel;

    // Small Cup display, effected by water level
    for(let i = 0; i < smallCup.length; i++){
        smallCup[i].classList.remove('full');
        if(i < waterLevel){ smallCup[i].classList.add('full'); }
    }
}

function updateBigCup(tar){
    // Update Big Cup based on water level
    percentage.innerText = `${100/8 * waterLevel}%`
    liters.innerText = roadPoints[8 - waterLevel - 1] ? roadPoints[8 - waterLevel - 1] : "";
    remained.style.height = `${100-(100/8 * waterLevel)}%`;
}