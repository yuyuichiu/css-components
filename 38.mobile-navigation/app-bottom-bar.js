const navOptions = document.querySelectorAll('.navbar-bottom .nav-item');
const appPics = document.querySelectorAll(".content img");

// click event to switch sections
navOptions.forEach((option) => {
    option.addEventListener('click', changeSection)
})

function changeSection() {
    // Toggle only clicked option to active
    navOptions.forEach((option) => { option.classList.remove('active') });
    this.classList.add('active');

    // Switch images
    appPics.forEach((pic) => {
        pic.classList.remove('show');
        if(pic.dataset.content === this.dataset.content){
            pic.classList.add('show');
        }
    })
}