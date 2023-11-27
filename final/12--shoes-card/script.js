const waterAnm = document.querySelector(".water-animation");
const backGround = document.querySelector(".background");
const checkMark = document.querySelector(".checkmark");
const sizes = document.querySelectorAll("[data-size]");
const buyBtn = document.querySelector(".buy-btn");
const shoe = document.querySelector(".shoe");

buyBtn.addEventListener("click", function () {
  waterAnm.classList.add("bought-animation");
  setTimeout(() => checkMark.classList.add("show-checkmark"), 3000);
});

document.addEventListener("click", function (e) {
  const clicked = e.target;
  const hasStyle = clicked.dataset.style;
  const hasSize = clicked.dataset.size;

  if (hasStyle) {
    shoe.src = `shoe--${clicked.textContent}.png`;
    backGround.style.backgroundColor = clicked.dataset.color;
  }

  if (hasSize) {
    sizes.forEach((size) => size.classList.remove("choosed"));
    clicked.classList.add("choosed");
  }
});
