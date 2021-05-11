const boxes = document.querySelectorAll(".box");

window.addEventListener('scroll', checkBoxes);

// Run scroll function at the start to show what is initially on screen
checkBoxes();

function checkBoxes(){
    // A fixed standard to detect viewport height
    // value is slightly lowered to ensure the animation happens on visible area
    const triggerBottom = window.innerHeight / 5 * 4;
    console.log(triggerBottom);
    console.log(boxes[3].getBoundingClientRect());

    // Loop through each boxes to check viewport pos
    boxes.forEach(b => {
        const boxTop = b.getBoundingClientRect().top;
        
        if(boxTop < triggerBottom) {
            b.classList.add('show');
        }
        else{
            b.classList.remove('show');
        }
    })
}