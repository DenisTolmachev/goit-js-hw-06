function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyDocument: document.body,
  colorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", () => {
  refs.bodyDocument.style.backgroundColor = getRandomHexColor();
  refs.colorValue.textContent = getRandomHexColor();
});
