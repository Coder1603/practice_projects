const body = document.querySelector("body");
const slides = document.querySelectorAll(".slide");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

let idx = 0;
setBgToBody(idx);
slides[idx].classList.add("active");

leftArrow.onclick = function () {
  slides[idx].classList.remove("active");
  if (idx == 0) {
    idx = slides.length - 1;
  } else {
    idx--;
  }
  slides[idx].classList.add("active");
  setBgToBody(idx);
  console.log(idx);
};

rightArrow.onclick = function () {
  slides[idx].classList.remove("active");
  if (idx < slides.length - 1) {
    idx++;
  } else {
    idx = 0;
  }
  slides[idx].classList.add("active");
  setBgToBody(idx);

  console.log(idx);
};

function setBgToBody(idx) {
  body.style.backgroundImage = slides[idx].style.backgroundImage;
}
