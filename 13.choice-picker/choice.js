const choices = document.getElementById('choices');
const tags = document.querySelectorAll('.choice-tags');
const tagContainer = document.querySelector('.tag-container');

choices.focus();
choices.addEventListener('input', () => { generateTags(); });
document.addEventListener('keyup',(event) => {
    if(event.key === 'Enter'){
        generateTags();
        chooseRandom();
    }
});

function generateTags(){
    let tags = choices.value.split(',');

    // Clear old tags
    tagContainer.innerHTML = "";

    // Generate tags based on split input
    tags.forEach((t) => {
        if(t){
            let tagEl = document.createElement('div');
            tagEl.classList.add('choice-tags');
            tagEl.innerText = t;
            tagContainer.appendChild(tagEl);
            // tagContainer.innerHTML += `<div class='choice-tags'>${t}</div>\n`
        }
    })
}

function chooseRandom(){
    choices.value = "";

    let times = 20;

    const interval = setInterval(() => {
        let target = selectRandomTag();
        highlightTag(target);
        setTimeout(() => {
            unHighlightTag(target);
        }, 100);
    }, 100)

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            let target = selectRandomTag();
            highlightTag(target);
        }, 100);
    }, times * 100)
}

function selectRandomTag(){
    let tags = document.querySelectorAll('.choice-tags');
    return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag){
    tag.classList.add('active');
}

function unHighlightTag(tag){
    tag.classList.remove('active');
}