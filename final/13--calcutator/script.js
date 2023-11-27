const preOperation = document.querySelector(".previous-operation");
const result = document.querySelector(".result");
const calcBtn = document.querySelector(".calc-button");
const deleteBtn = document.querySelector(".delete-button");

function addSign(sign) {
  result.innerHTML += sign;
}

function calculate() {
  // Filter result
  const filteredRes = result.innerHTML
    .replaceAll("x", "*")
    .replaceAll("÷ ", "/");
  // Calc resulte
  result.innerHTML = eval(filteredRes);
}

function deleteSign() {
  const text = result.innerHTML;
  if (text.endsWith(" ")) result.innerHTML = text.slice(0, -2);
  else result.innerHTML = text.slice(0, -1);
}

function calcPercantage() {
  const finalResult =
    eval(
      result.textContent
        .split("%")
        .map((item) => {
          return eval(item);
        })
        .join(" * ")
    ) / 100;

  result.innerHTML = finalResult;
}

// ** Events **
deleteBtn.addEventListener("click", deleteSign);

calcBtn.addEventListener("click", () => {
  preOperation.textContent = result.textContent;
  // Calc percentage
  if (result.textContent.includes("%")) {
    calcPercantage();
    return;
  }
  calculate();
});

document.addEventListener("click", (e) => {
  // Add Sign
  const sign = e.target.dataset.sign;
  if (sign) addSign(sign);

  // Empty result
  if (e.target.className === "delete-all") result.innerHTML = "";
});
