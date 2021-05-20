const countAmt = document.querySelectorAll(".count-amt");

// Plan: Step 20, from 0 to target
countAmt.forEach((item) => {
    const target = item.getAttribute("data-target");
    const increment = target / 101;

    const countTowards = () => {
        let c = +item.innerText;
        if(c < target){
            item.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(countTowards,1);
        }
        else{
            // To eliminate rounding errors
            item.innerText = target;
        }
    };

    // Begin counting towards target
    countTowards();
})