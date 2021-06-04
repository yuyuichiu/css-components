const button = document.getElementById("button");
const toastArea = document.getElementById("toasts");
/* Custom list of silly messages to be chosen randomly */
let msg = [
    "Hot singles in your area!",
    "This stock grows 100x in a year!!!",
    "Why watch when you can MAKE one?",
    "Lee Ka Sing just announced this shocking news!",
    "Bitcoin is the future of the currency",
    "Bill Gates saids to invest in this...",
    "You cannot believe this just happened..."
]
let rainbowColors = ['#9400D3','#4B0082','#0000FF','#50DF33','#EEEE00',"#FF7F00","#FF0000"]

// Onclick events
button.addEventListener('click', showNotification);

function showNotification(){
    let rand = Math.floor(Math.random() * msg.length);
    let randRgb = rainbowColors[Math.floor(Math.random() * rainbowColors.length)];

    // Generate notification with a random color
    let notification = document.createElement('div');
    notification.classList.add('toast');
    notification.style.color = randRgb;
    notification.innerHTML = `${msg[rand]}<i class="fas fa-times close" onclick="removeNotification(this)"></i>`;

    // Show that notification for a while, then make it self-destruct
    toastArea.appendChild(notification);
    setTimeout(() => {notification.style.opacity = 0}, 2500);
    setTimeout(() => {
        notification.remove();
    },3000)
}

function removeNotification(obj){
    obj.parentElement.remove();
}