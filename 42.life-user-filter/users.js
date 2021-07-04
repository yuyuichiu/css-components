const userList = document.querySelector('.user-container');
const search = document.getElementById('search')
let users = [];

// Create users with random user API
getRandomUser(10);

search.addEventListener('input', filterUser);


async function getRandomUser(count) {
    for(let i = 0; i < count; i++){
        let user = await fetch('https://randomuser.me/api/').then(res => res.json());
        users.push(user.results[0]);
    }

    users.forEach((u) => { displayUsers(u) })
    userList.querySelector(".loading").remove();
    search.disabled = false;
    search.focus();
}

function displayUsers(user) {
    let userDisplay = document.createElement('div');
    userDisplay.classList.add('user');
    userDisplay.innerHTML = `
        <img src="${user.picture.thumbnail}" class="icon">
        <h3 class="name">${user.name.first} ${user.name.last}</h3>
        <p class="location">${user.location.city}, ${user.location.country}</p>
    `;

    userList.appendChild(userDisplay);
}

function filterUser() {
    let query = search.value.toLowerCase();
    let usershowcase = document.querySelectorAll('.user')

    usershowcase.forEach((user) => {
        if(user.innerText.toLowerCase().includes(query)){
            user.classList.remove('hide');
        } else {
            user.classList.add('hide');
        }
    })
}