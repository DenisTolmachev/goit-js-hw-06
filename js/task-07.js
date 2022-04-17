const inputSizeController = document.querySelector("#font-size-control");
const textValue = document.querySelector("#text");

inputSizeController.value = 16;

inputSizeController.addEventListener("input", () => {
  textValue.style.fontSize = String(inputSizeController.value + "px");
});
