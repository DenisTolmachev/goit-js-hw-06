function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controlInput = document.querySelector("#controls>input");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxContainer = document.querySelector("#boxes");
let width = 30;
let height = 30;

function createBoxes(amount) {
  const boxes = [];

  for (let i = 0; i < amount; i += 1) {
    const box = document.createElement("div");
    box.style.width = width + "px";
    box.style.height = height + "px";
    box.style.backgroundColor = getRandomHexColor();
    width += 10;
    height += 10;
    boxes.push(box);
  }
  return boxContainer.append(...boxes);
}

function destroyBoxes() {
  const allBoxes = boxContainer.querySelectorAll("div");
  allBoxes.forEach((box) => box.remove());
  width = 30;
  height = 30;
}

createBtn.addEventListener("click", () => createBoxes(controlInput.value));
destroyBtn.addEventListener("click", destroyBoxes);
