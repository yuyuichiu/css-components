const output = document.querySelector(".person");
const generateBtn = document.getElementById("getperson");

function getData(){
    // XML request in 4 steps
    let request = new XMLHttpRequest();
    let url = "https://randomuser.me/api";
    
    request.responseType = 'json';
    // request.addEventListener("load", updatePersonInfo)
    request.open("GET", url);
    
    request.send(null);

    request.onload = () => {
        console.log(request.response)
        updatePersonInfo(request.response)
        request.abort();
    }
}

function updatePersonInfo(data) {
    console.log("hi");
    let result = data.results[0];

    output.innerHTML = "";
    output.innerHTML = `
        <h1>Generate a random person!</h1>
        <img src="${result.picture.large}" class="icon"></img>
        <div class="name">${result.name.first + " " + result.name.last}</div>
        <div class="email">${result.email}</div>
    `;
}

generateBtn.addEventListener('click', () => {
    console.log('clicked');
    getData();
});

getData();