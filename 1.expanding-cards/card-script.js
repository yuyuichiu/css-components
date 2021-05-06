// Get all panels into "panels" variable as array
const panels = document.querySelectorAll(".panel");

panels.forEach(function(p){
    p.addEventListener('click',function(){
        panels.forEach(function(p){ p.classList.remove('active'); })
        p.classList.add('active');
    })
})
