const key = document.getElementById('key');
const keyCode = document.getElementById('keyCode');
const code = document.getElementById('code');
const copyKey = document.getElementById('copyKey');
const copyCode = document.getElementById('copyCode');
const copyKeyCode = document.getElementById('copyKeyCode');

// Detect Keys
document.addEventListener('keydown', editKeys);

function editKeys(e){
    key.innerHTML = e.key === ' ' ? '\" \"' : e.key;
    keyCode.innerText = e.keyCode;
    code.innerText = e.code;
}