const posts = document.querySelectorAll(".post");
const container = document.querySelector(".container");

let likes = 0;
let lastClicked = null;

posts.forEach((post) => {
    // Double click like function
    post.addEventListener('click',function(e){ doubleClickHeart.call(this,e) });
    post.addEventListener('touch',function(e){ doubleClickHeart.call(this,e) });
})

function doubleClickHeart(e){
    let clickDelayMs = 250;

    let clickTime = new Date();
    if(lastClicked && clickTime - lastClicked <= clickDelayMs){
        // Like count increment
        let likeCount = Number(this.querySelector(".like-count").innerText);
        this.querySelector(".like-count").innerText = `${likeCount += 1}`;

        // Insert Heart Click Effect
        let heart = document.createElement('div');
        heart.className = "fas fa-heart heart";
        heart.style.top = `${e.pageY-15}px`;
        heart.style.left = `${e.pageX-15}px`;

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        },450);

        // Reset double click indicator
        lastClicked = null
    } else {
        lastClicked = clickTime;
    }
}