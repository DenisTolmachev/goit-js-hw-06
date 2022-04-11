const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsContainer = document.querySelector('#ingredients');
const ingredientsEl = ingredients.map(ingredient => {
   const ingredientsItem = document.createElement('li');
   ingredientsItem.textContent = ingredient;

   return ingredientsItem;
});

ingredientsContainer.append(...ingredientsEl);









