const imgBox = document.querySelector(".imgBox");
const qrImg = document.querySelector(".qr_img");
const qrText = document.querySelector(".input");
const generateBtn = document.querySelector(".generate__btn");

function generateQr() {
  if (!qrText.value) return;
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`;
  imgBox.classList.add("show");
}

generateBtn.addEventListener("click", generateQr);
