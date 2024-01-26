var currentState = 1;

function fadeIn(element) {
  element.style.transition = "opacity 2s";
  element.style.opacity = 1;
}

function fadeOut(element) {
  element.style.transition = "opacity 0.5s";
  element.style.opacity = 0;
}

function toggleStyles() {
  var video = document.getElementById('bg-video');
  var container = document.getElementById('container');

  // Fade out effect
  fadeOut(container);
  fadeOut(video);

  setTimeout(function () {
    // Change styles and content
    var stylesheet = document.getElementById('stylesheet');
    stylesheet.href = (currentState === 1) ? 'dark.css' : 'light.css';
    
    video.src = (currentState === 1) ? 'tokyo_night_wangan_compressed.mp4' : 'dest.mp4';

    currentState = (currentState === 1) ? 2 : 1;

    var toggleButton = document.getElementById('toggleButton');
    toggleButton.textContent = (currentState === 1) ? 'Dark Mode' : 'Light Mode';

    // Fade in effect
    fadeIn(container);
    fadeIn(video);

    video.play();
  }, 500); // Adjust the delay as needed
}

document.addEventListener("DOMContentLoaded", function () {
  // Initial fade in
  fadeIn(document.getElementById('container'));
  fadeIn(document.getElementById('bg-video'));
});

