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
        updatePersonInfo(request.response)
        request.abort();
    }
}

function updatePersonInfo(data) {
    let result = data.results[0];

    output.innerHTML = "";
    output.innerHTML = `
        <h1>Generate a random person!</h1>
        <img src="${result.picture.large}" class="icon"></img>
        <div class="name">${result.name.first + " " + result.name.last}</div>
        <div class="email">${result.email}</div>
    `;
    generateBtn.innerHTML = "Generate Person";
    generateBtn.disabled = false;
}

generateBtn.addEventListener('click', () => {
    generateBtn.innerHTML = "Generating...";
    generateBtn.disabled = true;
    getData();
});

getData();


// playing with fetch api with configs
function fetchGov(){
    let url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBRzIkLqS59M_6neW0HHrGfv_eFdrJqK2E"
    fetch(url, {
        method: 'POST',
        // mode: 'no-cors'
    })
    .then(response => response.json())
    .then(data => console.log({lat: data.location.lat, lng: data.location.lng}));
}