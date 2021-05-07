const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress");
const circles = document.querySelectorAll(".progress-steps");
/* Adjust this based on default active count */
var current = 2;

prevBtn.addEventListener('click',() => {
    current--;
    if(current < 1){ current = 1};
    // CSS effects for the bar
    let step = Math.floor(((current-1) / (circles.length-1)) * 100);
    progressBar.style.width = `${step}%`;
    // Activate / Deactivate circle active color
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.remove('active');
        if(current >= i+1){ circles[i].classList.add('active'); }
    }

    // Activate Previous button if current > 1
    if(current === 1){ prevBtn.disabled = true };
    // Disable next button when step reached maximum
    if(current < circles.length){ nextBtn.disabled = false; };

})

nextBtn.addEventListener('click',() => {
    current++;
    if(current > circles.length){ current = circles.length };
    // CSS effects for the bar
    let step = Math.floor(((current-1) / (circles.length-1)) * 100);
    progressBar.style.width = `${step}%`;
    // Activate / Deactivate circle active color
    for(let i = 0; i < circles.length; i++){
        circles[i].classList.remove('active');
        if(current >= i+1){ circles[i].classList.add('active'); }
    }

    // Activate Previous button if current > 1
    if(current > 1){ prevBtn.disabled = false };
    // Disable next button when step reached maximum
    if(current === circles.length){ nextBtn.disabled = true; };
})