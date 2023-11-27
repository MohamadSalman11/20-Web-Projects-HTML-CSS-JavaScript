const uploadBtn = document.querySelector(".upload__button");
const fileInput = document.querySelector(".file__input");
const imgPreview = document.querySelector(".img__preview");
const whiteBg = document.querySelector(".white__background");
const downloadBtn = document.querySelector(".download__button");
const downloadEl = document.querySelector(".download");
const title = document.querySelector(".title");
const API__KEY = "1GzgmsrvbBtqahvPAbf9kR4w";

uploadBtn.addEventListener("click", function () {
  fileInput.click();
});

// LOAD IMG FROM DEVICE
function loadImg() {
  title.classList.add("hidde");
  whiteBg.classList.add("show");
  downloadBtn.classList.remove("show");
  const file = fileInput.files[0];
  console.log(file);
  if (!file) return;
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.addEventListener("load", (e) => {
    imgPreview.src = e.target.result;
    imgPreview.classList.add("show");
    const formData = new FormData();
    formData.append("image_file", file);
    removeBg(formData);
  });
}
// REMOVE BACKGROUND FROM IMG
async function removeBg(formData) {
  try {
    const res = await fetch("https://api.remove.bg/v1.0/removebg", {
      method: "POST",
      headers: {
        "X-Api-Key": API__KEY,
      },
      body: formData,
    });
    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    imgPreview.src = url;
    whiteBg.classList.remove("show");
    downloadBtn.classList.add("show");
  } catch (err) {
    console.log(err);
  }
}
// DOWNLOAD TEH IMAGE
const downloadImg = () => {
  downloadEl.href = imgPreview.src;
  downloadEl.click();
};

downloadBtn.addEventListener("click", downloadImg);
fileInput.addEventListener("change", loadImg);
