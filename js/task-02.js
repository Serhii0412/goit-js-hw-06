const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector("#ingredients");
const arr = [];


for(let i = 0; i < ingredients.length; i += 1){

const items = document.createElement("li");
items.classList.add("item");
items.textContent = ingredients[i];
console.log(items);
console.log(ingredients[i]);
arr.push(items);
};

list.append(...arr);