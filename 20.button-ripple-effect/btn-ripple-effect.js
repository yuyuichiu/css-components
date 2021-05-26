const rippleBtn = document.querySelectorAll(".ripple");

rippleBtn.forEach((item) => {
    document.addEventListener("mousedown",function(e){
        // Record relative position of the target
        tarPos = { x: item.getBoundingClientRect().x,
                    y: item.getBoundingClientRect().y }

        // ClientXY to get pointer viewport relative location
        // Offset to obtain the distance for absolute top and left px
        let offset = {x: Math.round(e.clientX - tarPos.x),
                        y: Math.round(e.clientY - tarPos.y)}

        // Refresh the item by allocating new HTML, which plays ripple animation
        item.innerHTML = `${item.innerText}<span class='circle' style='top:${offset.y}px;left:${offset.x}px;'></span>`;

        // Alternatively we can appendChild instead, then remove it after a few seconds with .remove() in setTimeOut
    })
})