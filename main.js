/* lear */
/* Emoji Slider */

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("blurred");

  const slider = document.querySelector(".slider");
  const rangeInput = document.getElementById("range-input");

  rangeInput.addEventListener("mousemove", () => {
    if (rangeInput.value <= 33) {
      document.body.style.background = "#c13c30";
      slider.style.transform = "translateX(255px)";
    } else if (rangeInput.value > 33 && rangeInput.value <= 66) {
      document.body.style.background = "#dd9a2d";
      slider.style.transform = "translateX(0)";
    } else {
      document.body.style.background = "#d6d62b";
      slider.style.transform = "translateX(-255px)";
    }
  });
});
