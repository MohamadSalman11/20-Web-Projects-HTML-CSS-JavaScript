const pls = document.querySelectorAll(".PLS p");
const search = document.querySelector(".search");

function filter() {
  const value = search.value.trim().toUpperCase();
  pls.forEach((pl) => {
    const parent = pl.closest("li");

    if (pl.textContent.startsWith(value)) parent.style.display = "flex";
    else parent.style.display = "none";
  });
}

document.addEventListener("input", filter);
