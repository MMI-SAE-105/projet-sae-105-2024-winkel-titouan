document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('video');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');

    playButton.addEventListener('click', function () {
        video.play();
    });

    pauseButton.addEventListener('click', function () {
        video.pause();
    });
});