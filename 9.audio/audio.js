/* Add class and btn class to audio tags */
const sounds = ["applause","boo","gasp","tada","victory","wrong"];

sounds.forEach((item) => {
    // Create a button for audios
    const btn = document.createElement('button');
    btn.classList.add("btn");
    btn.innerText = item;
    // Add onclick function to play audio
    btn.addEventListener('click', () => {
        // Stop any current audios, then play the current sound
        stopAudio();
        document.getElementById(item).play();
    })
    // Wrap into buttons div
    document.getElementById('buttons').appendChild(btn);
})

function stopAudio(){
    sounds.forEach(item => {
        const song = document.getElementById(item);

        song.pause();
        song.currentTime = 0;
    })
}