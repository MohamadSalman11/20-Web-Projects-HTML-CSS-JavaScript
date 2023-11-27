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
