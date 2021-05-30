const card = document.querySelector('.card');

setTimeout(writeData,2000);

function writeData(){
    card.innerHTML = `
        <div class="card-image">
            <img src="computer-image.jpg">
        </div>
        <div class="card-content">
            <h3 class="title">Card Loaded!</h3>
            <p class="description">
                Reload to see the animation again!
            </p>
            <div class="icon animated-bg" id="profile-img">
                <img src="user.png">
            </div>
            <div class="author">Peter Pan</div>
            <div class="date">29 May, 2021</div>
        </div>
    `;

    console.log("loaded");
}