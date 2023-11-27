const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");
const previewColor = document.querySelector(".preview__color");
const hexValue = document.querySelector(".hex__value");
const imgCtn = document.querySelector(".img__ctn");
const colorInput = document.querySelector(".color__input");
const copyBtn = document.querySelector(".copy");
const copyMessage = document.querySelector(".copy__message");
let pickedColor;

const image = new Image();
image.src = "./img.png";
image.crossOrigin = "Anonymous";

image.addEventListener("load", () => {
  ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
  canvas.addEventListener("click", pickColor);
});

function pickColor(e) {
  const x = e.offsetX;
  const y = e.offsetY;
  const pixelData = ctx.getImageData(x, y, 1, 1).data;
  pickedColor = `rgb(${pixelData[0]}, ${pixelData[1]}, ${pixelData[2]})`;
  previewColor.style.backgroundColor = pickedColor;
  hexValue.textContent = pickedColor;
}

copyBtn.addEventListener("click", () => {
  colorInput.value = pickedColor;
  colorInput.select();
  document.execCommand("copy");
  copyMessage.classList.add("copy-animation");
  setTimeout(() => copyMessage.classList.remove("copy-animation"), 1200);
});
