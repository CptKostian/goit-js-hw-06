const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];
const listItems = [];

ingredients.forEach(ingredient => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');

  listItems.push(listItem);
});

const listOfIngredients = document.querySelector('#ingredients');
listOfIngredients.append(...listItems);
