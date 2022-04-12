const nameInputValue = document.querySelector('#name-input');
const nameOutputValue = document.querySelector('#name-output');


nameInputValue.addEventListener('input', (event) => {
   nameInputValue.value === "" ?
   nameOutputValue.textContent = "Anonymus" :
   nameOutputValue.textContent = event.currentTarget.value;
});