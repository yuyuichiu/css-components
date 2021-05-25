const toggler = document.querySelector(".toggle");
const hour = document.querySelector(".needle.hour");
const minute = document.querySelector(".needle.minute");
const second = document.querySelector(".needle.second");

const weekdays = ["Sunday", "Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
const months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];

var rotationCounter = { s: 0 }

document.querySelector('html').classList.add('dark');
updateDate();
updateClock();

let now = new Date();
while(true){
    // Update every second while matching actual second in world time
    if(now.getSeconds() !== new Date().getSeconds()){
        setInterval(updateClock,1000);
        setInterval(updateDate,1000);
        break;
    }
}

toggler.addEventListener('click', () => {
    let html = document.querySelector('html');
    html.classList.toggle('dark');
});

// === Functions ===
// To convert range of numbers to a representable range & value
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

function updateClock(){
    // Get Date info
    let now = new Date();
    let secondRotation = Math.ceil(scale(now.getSeconds(), 0, 60, 0, 360));
    let minuteRotation = Math.ceil(scale(now.getMinutes(), 0, 60, 0, 360));
    let hourRotation = scale(now.getHours() % 12 * 60 + now.getMinutes(), 0, 720, 0, 360);

    // Rotation Angle Adjustment (add accumulated 360 angles to value)
    if(secondRotation === 0){ rotationCounter.s += 1; }
    secondRotation += rotationCounter.s * 360;

    // Update Clock display by rotation
    second.style.transform = `translate(0,-50%) rotate(${secondRotation}deg)`;
    minute.style.transform = `translate(0,-50%) rotate(${minuteRotation}deg)`;
    hour.style.transform = `translate(0,-50%) rotate(${hourRotation}deg)`;
}

function updateDate(){
    const timeTxt = document.querySelector(".time");
    const dateTxt = document.querySelector(".date");
    let now = new Date();
    // The time
    let newHour = (now.getHours()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let newMinute = (now.getMinutes()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    let newSecond = (now.getSeconds()).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false});
    timeTxt.innerText = `${newHour}:${newMinute}:${newSecond}`;
    document.title = `${newHour}:${newMinute}:${newSecond}`;

    // The Date
    let newWeekday = now.getDay();
    newWeekday = weekdays[newWeekday-1];
    let newMonth = now.getMonth();
    newMonth = months[newMonth - 1];
    let newDay = now.getDate();
    dateTxt.innerHTML = `${newWeekday}, ${newMonth} ${newDay}`;
}
