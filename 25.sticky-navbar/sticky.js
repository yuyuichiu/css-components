const nav = document.querySelector(".nav");

document.addEventListener('scroll',(e) => {
    if(window.scrollY > 250){
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
})