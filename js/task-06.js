const textInput = document.querySelector('#validation-input');
const textInputDataLenght = parseInt(textInput.getAttribute('data-length'));



textInput.addEventListener("blur", (event) => {
   event.currentTarget.value.length === textInputDataLenght ?  
   textInput.classList.add('valid') : 
   textInput.classList.add('invalid')
});