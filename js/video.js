const video = document.getElementById('bgVideo');
video.addEventListener('ended', () => {
  video.currentTime = 0.1;
  video.play();
})
