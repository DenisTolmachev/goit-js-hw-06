const allCategories = document.querySelectorAll('li.item');
console.log('Number of categories:', allCategories.length);

allCategories.forEach(categories =>  {
   const categoriesTitle = categories.querySelector('h2')
   console.log('Category:', categoriesTitle.innerHTML);
   const categoriesElement = categories.querySelectorAll('li');
   console.log('Elements:', categoriesElement.length);
})