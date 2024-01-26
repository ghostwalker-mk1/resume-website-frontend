document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("bg-video");

  // Set a timeout to hide the loader after 5 seconds
  setTimeout(function () {
    document.getElementById("loader").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  }, 5000);

  // Check if the video is fully loaded
  video.addEventListener("loadedmetadata", function () {
    // If the video is loaded before the timeout, the timeout above will be ignored
    document.getElementById("loader").style.display = "none";
    document.getElementById("overlay").style.display = "none";
  });
});

