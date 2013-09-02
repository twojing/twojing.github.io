var windowHeight;

if (document.documentElement && document.documentElement.clientHeight) {
  windowHeight = document.documentElement.clientHeight;
} else {
  windowHeight = window.innerHeight;
}

if (document.querySelector) {

  var cropperElements = document.querySelectorAll(".cropper");

  var i, currentHeight, difference;

  for (i in cropperElements) {
    element = cropperElements[i];
    currentHeight = element.clientHeight;
    if (currentHeight > windowHeight) {
      element.style.height = windowHeight + "px";
      difference = currentHeight - windowHeight;
      half = difference / 2;
      element.style.paddingTop = -half + "px";
    }
  }

}
