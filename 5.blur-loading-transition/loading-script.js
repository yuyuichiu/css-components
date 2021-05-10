const load = document.querySelector(".loading-txt");
const bg = document.querySelector(".page-pic");
var count = 0;

var loading = setInterval(loadTimer , 15);

function loadTimer(){
    count++;
    if(count > 99){
        clearInterval(loading);
        // Remove load out of the screen completely after 100%
        load.style.height = 0;
        // Adjust title to "reload to see again"
        document.title = "Reload to see again"
    }

    load.innerText = `${count}%`;
    bg.style.filter = `blur(${scale(count, 0, 100, 70, 0)}px)`;
    load.style.opacity = `${scale(count, 0, 100, 1, 0)}`;
}

// Convert a range of number into another specified range
// e.g. (0 to 100) into range of (1 to 0), so 45 will be converted to 0.55
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}