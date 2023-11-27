const popupCtn = document.querySelector(".popup__ctn");
const popup = document.querySelector(".popup");

function showPopup() {
  popupCtn.classList.add("show");
  popup.classList.add("zoom-in");
  popup.classList.remove("zoom-out");
}

function hiddePopup() {
  popup.classList.add("zoom-out");
  setTimeout(() => {
    popupCtn.classList.remove("show");
  }, 400);
}

document.addEventListener("click", (e) => {
  if (e.target.closest(".movie")) showPopup();
  if (e.target.className === "close") hiddePopup();
});
