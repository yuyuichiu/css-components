/* To add span tag for each word */
const labels = document.querySelectorAll('.form-control > label');

labels.forEach((item) => {
    item.innerHTML = item.innerText
        .split("")
        .map((letter, idx) => `<span style='transition-delay:${idx*50}ms'>${letter}</span>`)
        .join('');
});