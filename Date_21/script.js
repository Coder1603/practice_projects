const fill = document.querySelector(".fill");
const emptys = document.querySelectorAll(".empty");

emptys.forEach((empty, index) => {
  empty.ondragleave = function () {
    emptys.forEach((empty) => {
      empty.innerHTML = "";
    });
    empty.innerHTML = `<div class="fill" draggable="true"></div>`;

    empty.classList.remove("hovered");
  };
  empty.ondragover = function () {
    emptys.forEach((empty) => {
      empty.classList.remove("hovered");
    });
    empty.classList.add("hovered");
  };
});
