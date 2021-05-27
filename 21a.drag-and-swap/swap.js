const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".container");

draggables.forEach(function(item){
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

containers.forEach(function(c){
    c.addEventListener('dragover',dragOver);
})

function dragStart(e){
    this.classList.add("dragging");
}

function dragEnd(e){
    this.classList.remove("dragging");
}

function dragOver(e){
    // Enable Dropping
    e.preventDefault();
    // Get the target element to put our dragging element beforehand
    const afterTarget = getDragAfterElement(this, e.clientY);
    // get current dragging element
    const dragging = document.querySelector(".dragging");
    // Add dragging into the container
    if(afterTarget == null){
        this.appendChild(dragging);
    } else {
        this.insertBefore(dragging, afterTarget);
    }
}

function getDragAfterElement(container, clientY){
    // Get all non-dragging items as an array
    const notDrags = [...container.querySelectorAll('.draggable:not(.dragging)')];
    // Reduce the array into a single target
    return notDrags.reduce((result, current) => {
        const box = current.getBoundingClientRect();
        const offset = clientY - box.top - box.height / 2;
        // negative => mouse object below current target
        if(offset < 0 && offset > result.offset){
            // If target is above our mouse object, set result to it
            // As offset near zero == closest, we just need to compare negative infinity
            return {offset: offset, element: current}
        }
        else{
            // If not meet criteria, return original
            return result
        }
    },{offset: Number.NEGATIVE_INFINITY}).element; // Initial value will be stored in result
}