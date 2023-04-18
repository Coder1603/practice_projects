const cupSmalls = document.querySelectorAll(".cup-small");
const liters = document.querySelector(".container-water span");
const percentage = document.querySelector(".container-bottom span");
const containerBottom = document.querySelector(".container-bottom");
const containerTop = document.querySelector(".container-top");

cupSmalls.forEach((cupSmall, index) => {
  cupSmall.addEventListener("click", () => fillSmallCup(index));
});

const fillSmallCup = function (index) {
  if (cupSmalls[index].classList.contains("fill-water")) {
    index--;
  }
  cupSmalls.forEach((cupSmall, index2) => {
    if (index2 <= index) {
      cupSmall.classList.add("fill-water");
    } else {
      cupSmall.classList.remove("fill-water");
    }
  });
  active(index);
};

const active = function (index) {
  containerBottom.style.height = `${((index + 1) * 250) / 20}%`;
  containerTop.style.height = `${100 - ((index + 1) * 250) / 20}%`;
  percentage.innerHTML = `${((index + 1) * 250) / 20}%`;
  liters.innerHTML = `${2 - (index + 1) * 0.25}l`;
  if (index < 0) {
    document.querySelector(".container-bottom span").style.display = "none";
  } else {
    document.querySelector(".container-bottom span").style.display = "flex";
  }
};
