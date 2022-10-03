const numberOfCategories = document.querySelector('#categories');

console.log('Number of categories:', numberOfCategories.children.length);

const categories = numberOfCategories.querySelectorAll('.item');

categories.forEach(category => {
  console.log('Category:', category.children[0].textContent);
  console.log('Elements:', category.children[1].childElementCount);
});
