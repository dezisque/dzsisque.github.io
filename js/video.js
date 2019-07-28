const video = document.getElementById('bgVideo');
video.addEventListener('ended', () => {
  video.currentTime = 1.5;
  video.play();
})
