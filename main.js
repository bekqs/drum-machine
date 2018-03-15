function play(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return; //Stop the function
    audio.currentTime = 0; //Rewind to the start
    audio.play();

    key.classList.add('push');
};

function removeTransition(e) {
    if(e.propertyName !== 'transform') return; //skip if it's not a transform
    this.classList.remove('push');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play);