const encryptedInp = document.querySelector(".encrypted__input");
const decryptedInp = document.querySelector(".decrypted__input");
const decodeBtn = document.querySelector(".decode__button");
const clearBtn = document.querySelector(".clear__button");

const Atbash = {
  Z: "A",
  Y: "B",
  X: "C",
  W: "D",
  V: "E",
  U: "F",
  T: "G",
  S: "H",
  R: "I",
  Q: "J",
  P: "K",
  O: "L",
  N: "M",
  M: "N",
  L: "O",
  K: "P",
  J: "Q",
  I: "R",
  H: "S",
  G: "T",
  F: "U",
  E: "V",
  D: "W",
  C: "X",
  B: "Y",
  A: "Z",
};

function decryptText() {
  const encryptedText = encryptedInp.value;
  const decrptedText = decrypt(encryptedText);
  decryptedInp.value = decrptedText;
}

function decrypt(text) {
  const newText = text.toUpperCase();
  const encletters = newText.split("");
  const decLetters = [];

  encletters.forEach((letter) => {
    const decLetter = Atbash[letter];
    const newLetter = decLetter ? decLetter : "space";
    decLetters.push(newLetter);
  });

  return decLetters.join("").replaceAll("space", " ");
}

function clearInputs() {
  encryptedInp.value = "";
  decryptedInp.value = "";
}

decodeBtn.addEventListener("click", decryptText);
clearBtn.addEventListener("click", clearInputs);
