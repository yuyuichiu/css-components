const button = document.getElementById("button");
const toastArea = document.getElementById("toasts");
/* Custom list of messages to be chosen randomly */
let msg = [
    "Hot singles in your area!",
    "This stock grows 100x in a year!!!",
    "Why watch when you can MAKE one?",
    "Lee Ka Sing just announced this shocking news!",
    "Bitcoin is the future of the currency",
    "Bill Gates saids to invest in this...",
    "You cannot believe this just happened..."
]
button.addEventListener('click', showNotification);

function showNotification(){
    let rand = Math.floor(Math.random() * msg.length);
    let randRgb = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`

    // Generate notification with a random color
    let notification = document.createElement('div');
    notification.classList.add('toast');
    notification.style.color = randRgb;
    notification.innerText = msg[rand];

    // Show that notification for a while, then make it self-destruct
    toastArea.appendChild(notification);
    setTimeout(() => {notification.style.opacity = 0}, 2500);
    setTimeout(() => {
        notification.remove();
    },3000)
}