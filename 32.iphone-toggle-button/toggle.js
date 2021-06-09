const toggles = document.querySelectorAll(".toggle");
const good = document.getElementById("good");
const cheap = document.getElementById("cheap");
const fast = document.getElementById("fast");

toggles.forEach(toggle => toggle.addEventListener('change', (e) => {
    toggleLogic(e.target);
}))

function toggleLogic(theClickedOne){
    if(good.checked && cheap.checked && fast.checked){
        if(theClickedOne.id === "good"){
            cheap.checked = false;
        } else if (theClickedOne.id === "cheap"){
            fast.checked = false;
        } else {
            good.checked = false;
        }
    }
}