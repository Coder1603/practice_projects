const toolDecrease = document.querySelector(".tool-decrease");
const toolIncrease = document.querySelector(".tool-increase");
const numberSize = document.querySelector(".number-size");

let index = 10;

numberSize.textContent = index;

toolDecrease.onclick = function () {
  if (index > 5) {
    index -= 5;
    numberSize.textContent = index;
  }
};
toolIncrease.onclick = function () {
  if (index < 50) {
    index += 5;
    numberSize.textContent = index;
  }
};
