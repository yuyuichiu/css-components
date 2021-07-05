const ratings = document.querySelectorAll('.rating');
const send = document.querySelector(".send")

ratings.forEach((rate) => {
    rate.addEventListener('click',function() {
        ratings.forEach((r) => { r.classList.remove('selected') })
        this.classList.add('selected')
    })
})

send.addEventListener('click', () => {
    if(document.querySelector(".rating.selected")){
        document.querySelector('.panel-container').classList.toggle('hide');
        document.querySelector('.received-container').classList.toggle('hide');
    }
})