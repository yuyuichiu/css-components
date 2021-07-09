const range = document.getElementById('slider')

range.addEventListener('input', (e) => {
    const value = +e.target.value
    const label = e.target.previousElementSibling
    label.innerHTML = value

    let range_width = getComputedStyle(e.target).getPropertyValue('width')
    range_width = +range_width.substring(0, range_width.length - 2);
    let slider_width = document.querySelector('label').style.width.substring(0,-2)

    let labelMove = scale(value, 0, 100, -range_width / 2, range_width / 2)
    labelMove = value > 50 ? labelMove - slider_width / 2 : labelMove + slider_width / 2

    label.style.left = `${labelMove}px`
});

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}