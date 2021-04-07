var audio = new Audio("audio/bestest.mp3");
function playBestest() {
    var speed = Math.random() * 1.7 + 0.3;
    audio.currentTime = 0;
    audio.playbackRate = speed;
    audio.play();
    console.log("Bestest at " + (speed*100) + "%");
}
