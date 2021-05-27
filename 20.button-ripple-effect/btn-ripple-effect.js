const rippleBtn = document.querySelectorAll(".ripple");

rippleBtn.forEach((item) => {
    item.addEventListener("mousedown",function(e){
        // Record relative position of the target
        let tarPos = {
            x: item.getBoundingClientRect().x,
            y: item.getBoundingClientRect().y
        }

        // ClientXY to get pointer viewport relative location
        // Offset to obtain the distance for absolute top and left px
        let offset = {
            x: Math.round(e.clientX - tarPos.x),
            y: Math.round(e.clientY - tarPos.y)
        }

        // Refresh the item by allocating new HTML, which plays ripple animation
        let ripple = document.createElement('span');
        ripple.classList.add('circle');
        ripple.style.top = offset.y + "px";
        ripple.style.left = offset.x + "px";
        // Add ripple effect to the button
        // The "this" keyword will point to our item if used in regular func
        // NOT work under arrow functions
        this.appendChild(ripple);
        // Clean up after animation is done
        setTimeout(() => {
            ripple.remove();
        }, 500);

        // If we don't want repeating effects, we can edit the innerHTML instead
        // item.innerHTML = `${item.innerText}<span class='circle' style='top:${offset.y}px;left:${offset.x}px;'></span>`;
    });
});