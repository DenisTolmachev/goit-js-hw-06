const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

function updateValue () {
   value.textContent = counterValue
};

decrementBtn.addEventListener('click', () => {
   counterValue -= 1;
   updateValue();
});
incrementBtn.addEventListener('click', () => {
   counterValue += 1;
   updateValue();
;}); 