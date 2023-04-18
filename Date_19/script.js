const body = document.querySelector("body");
const modeBtn = document.querySelector("#mode-btn");
const number = document.querySelector(".number");
const dateBlock = document.querySelector(".date");
const needleHours = document.querySelector(".needle.hour");
const needleMinutes = document.querySelector(".needle.minute");
const needleSeconds = document.querySelector(".needle.second");

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

modeBtn.onclick = function () {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark mode")) {
    modeBtn.innerHTML = "Dark mode";
  } else {
    modeBtn.innerHTML = "Light mode";
  }
};

setInterval(() => getCurrentTime(), 1000);

function getCurrentTime() {
  const currentTime = new Date();
  const currentHours = currentTime.getHours();
  const currentMinutes = currentTime.getMinutes();
  const currentSeconds = currentTime.getSeconds();
  const date = currentTime.getDate();
  const month = currentTime.getMonth();
  const day = currentTime.getDay();

  console.log(currentHours, currentMinutes, currentSeconds);

  number.innerHTML = `${currentHours}:${
    currentMinutes <= 9 ? `0${currentMinutes}` : currentMinutes
  } PM`;
  dateBlock.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;
  needleSeconds.style.transform = `rotate(${180 + currentSeconds * 6}deg`;
  needleMinutes.style.transform = `rotate(${
    180 + (currentSeconds + currentMinutes * 60) * 0.1
  }deg`;
  needleHours.style.transform = `rotate(${
    180 + (currentSeconds + currentMinutes * 60 + currentHours * 60 * 60) / 120
  }deg`;
}

getCurrentTime();

// Kim giây - 60s=360deg - 1s=6deg
// Kim phút - 3600s=360deg - 1s=0.1deg
// Kim giờ - 86.400s=360deg - 1s=1/240deg
