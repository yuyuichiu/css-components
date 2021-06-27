const pwInput = document.getElementById('pw');


pwInput.addEventListener('input', updatePasswordLevel);

function updatePasswordLevel(){
    console.log('hi');
    const weak = document.getElementById('weak');
    const medium = document.getElementById('medium');
    const strong = document.getElementById('strong');
    const levelTxt = document.getElementById('pwlevel');
    /* 
    Rule to determine password strong level:
    -- Medium: at least 8 char
    -- Strong: at least 12 char, capital & lowercase letter and number
    */
   const strongCheck = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])\w{12,}/;
   const mediumCheck = /\w{8,}/;

    // Clear old password level display
    weak.classList.remove('active');
    medium.classList.remove('active');
    strong.classList.remove('active');

    // Check password and measure level
    let pw = pwInput.value;

    if (!pw) { levelTxt.innerText = "-"; return }
    
    weak.classList.add('active');
    levelTxt.innerText = "Weak";

    if (mediumCheck.test(pw)) {
        medium.classList.add('active');
        levelTxt.innerText = "Medium";
    }

    if (strongCheck.test(pw)) {
        strong.classList.add('active');
        levelTxt.innerText = "Strong";
    }
}

