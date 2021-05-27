const fill = document.querySelector('.fill');
const emptyBoxes = document.querySelectorAll('.box');

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for(const box of emptyBoxes){
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', dragDrop);
}

function dragStart(e){
    this.classList.add("hold");
    setTimeout(() => { this.className = "empty" }, 1);
}

function dragEnd(e){
    this.className = "fill";
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    this.classList.add('hovered');
}

function dragLeave(e){
    this.classList.remove('hovered');
}

function dragDrop(e){
    this.classList.remove('hovered');
    this.append(fill);
}

// dragstart => begin of a drag
// dragend   => end of a drag
// dragover  => Continuously Triggered when an dragged object is on the target
// dragenter => Similar to over, but only triggered once at start
// dragleave => WHen an dragged object exits the target object
// drop      => 