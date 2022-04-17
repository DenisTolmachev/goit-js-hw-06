function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  bodyDocument: document.body,
  colorValue: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

const changeColor = () => {
  const color = getRandomHexColor();
  refs.bodyDocument.style.backgroundColor = color;
  refs.colorValue.textContent = color;
};

refs.changeColorBtn.addEventListener("click", changeColor);
