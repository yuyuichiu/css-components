const numbers = document.querySelectorAll('.number')

numbers[0].focus()

numbers.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {

        if(e.key >= 0 && e.key <= 9){
            numbers[idx].value = ""
            setTimeout(() => numbers[idx + 1].focus(), 10)
        } else if (e.key === 'Backspace') {
            setTimeout(() => {
                numbers[idx - 1].focus();
                numbers[idx - 1].value = '';
            }, 10)
        }
    })
})