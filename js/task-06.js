const textInput = document.querySelector("#validation-input");
const textInputDataLenght = parseInt(textInput.getAttribute("data-length"));

const inputCheck = (event) => {
  if (event.currentTarget.value.length === textInputDataLenght) {
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
  } else {
    textInput.classList.add("invalid");
    textInput.classList.remove("valid");
  }
};

textInput.addEventListener("blur", inputCheck);
