const inputSizeController = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

//Установка положення повзунка в мінімальне значення
inputSizeController.value = 0;

const textSizeChenge = (event) => {
  textValue.style.fontSize = `${event.currentTarget.value}px`;
};

inputSizeController.addEventListener("input", textSizeChenge);
