const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsList = document.querySelector('#ingredients');

const createIngredientsList = list => {
  return list.map(ingredient => {
    const item = document.createElement('li');
    item.textContent = ingredient;
    return item;
  });
};

const elements = createIngredientsList(ingredients);

ingredientsList.append(...elements);