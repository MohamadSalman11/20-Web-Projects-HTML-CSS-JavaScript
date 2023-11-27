const circles = [...document.querySelectorAll(".circle")];
const timer = document.querySelector(".timer");
let timerSec = 10;
let colorNr = 0;
let opacity = 0.6;
let newColor;
let randomNr;
const colors = [
  "(128, 255, 212, opacity)",
  "(255, 183, 0, opacity)",
  "(239, 37, 60, opacity)",
  "(36, 200, 255, opacity)",
  "(22, 218, 100, opacity)",
  "(112, 45, 190, opacity)",
  "(245, 236, 204, opacity)",
  "(255, 214, 10, opacity)",
  "(154, 141, 152, opacity)",
  "(120, 73, 54, opacity)",
];

function setNewTime() {
  timerSec -= 1;
  timer.textContent = timerSec;
  if (timerSec < 0) {
    alert("Losing today means winning tomorrow 😎😎");
    init();
    setNewColor();
  }
}

function setNewColor() {
  newColor = `rgb${colors[colorNr]}`;
  randomNr = Math.floor(Math.random() * circles.length);
  changeColor();
  setOpacity();
  colorNr += 1;
  opacity += 0.05;
  timerSec = 11;
}

function changeColor() {
  circles.forEach((circle) => {
    circle.style.backgroundColor = newColor.replace("opacity", 1);
  });
}

function setOpacity() {
  circles[randomNr].style.backgroundColor = newColor.replace(
    "opacity",
    opacity
  );
}

function checkColor(e) {
  const color = e.target.closest(".circle");
  if (!color) return;
  const currentColor = color.style.backgroundColor;
  // check if choosed the right or false color
  if (currentColor.includes("rgba")) setNewColor();
  else {
    alert("Losing today means winning tomorrow 😎😎");
    init();
    setNewColor();
  }
}

function init() {
  timerSec = 11;
  opacity = 0.55;
  colorNr = 0;
}

setNewColor();
setInterval(setNewTime, 1000);
document.addEventListener("click", checkColor);
