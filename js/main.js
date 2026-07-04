// Machine Canvas — small progressive-enhancement script.
// Nothing on this site depends on this file to function: forms are native
// HTML/Netlify Forms, nav is a CSS checkbox toggle, FAQ is <details>.
// This only makes the before/after sliders follow the range input smoothly.
(function () {
  document.querySelectorAll(".ba-slider").forEach(function (slider) {
    var input = slider.querySelector("input[type=range]");
    var wrap = slider.querySelector(".ba-before-wrap");
    var line = slider.querySelector(".ba-handle-line");
    var dot = slider.querySelector(".ba-handle-dot");
    if (!input || !wrap) return;
    var update = function () {
      var v = input.value;
      wrap.style.clipPath = "inset(0 " + (100 - v) + "% 0 0)";
      if (line) line.style.left = v + "%";
      if (dot) dot.style.left = v + "%";
    };
    input.addEventListener("input", update);
    update();
  });
})();
