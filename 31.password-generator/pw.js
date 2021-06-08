const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copy");
const output = document.getElementById("password");
const pwLength = document.getElementById("pw-length");
const pwUpper = document.getElementById("pw-upper");
const pwLower = document.getElementById("pw-lower");
const pwNumber = document.getElementById("pw-number");
const pwSymbol = document.getElementById("pw-symbol");

const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowerChars = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = [0,1,2,3,4,5,6,7,8,9];
const symbols = "!@#$%^&()<>?+-_".split("");

generateBtn.addEventListener('click', generatePassword);
copyBtn.addEventListener('click', copyPassword);

function generatePassword(){
    // Guard cases
    if(Number(pwLength.value) < 0){ 
        output.value = "Invalid Length"
        return
    }
    if(!pwUpper.checked && !pwLower.checked && !pwNumber.checked && !pwSymbol.checked){
        output.value = "Select at least 1 constants";
        return
    }

    // Summarizes all possible characters
    let pw = "";
    let pwChars = [];
    let randIdx = 0;

    if(pwUpper.checked){ pwChars = pwChars.concat(upperChars) }
    if(pwLower.checked){ pwChars = pwChars.concat(lowerChars) }
    if(pwNumber.checked){ pwChars = pwChars.concat(numbers) }
    if(pwSymbol.checked){ pwChars = pwChars.concat(symbols) }

    // Generate password based on available characters
    for(let i = 0; i < Number(pwLength.value); i++){
        randIdx = Math.floor(Math.random() * pwChars.length);
        pw = pw + pwChars[randIdx];
    }

    output.value = pw;
}

function copyPassword(){
    // Guard case
    if(output.value === ""){ return }

    // Select, then copy the text, and finally deselect
    output.select();
    output.setSelectionRange(0,99999);

    document.execCommand('copy');
    document.getSelection().removeAllRanges()

    // Add a tooltip to remind user with the message of "Copied"
    let tooltip = document.createElement("div");
    tooltip.classList.add('tooltip');
    tooltip.innerText = "Copied";
    copyBtn.parentElement.appendChild(tooltip);
    setTimeout(() => {
        tooltip.remove();
    },1000)
}