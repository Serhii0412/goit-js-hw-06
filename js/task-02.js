const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");
const arr = [];

const ingr = ingredients.map((ingredient) => {
  const items = document.createElement("li");
  items.classList.add("item");
  items.textContent = ingredient;
  arr.push(items);
  console.log(items.textContent);
});
list.append(...arr);

// for(let i = 0; i < ingredients.length; i += 1){

// const items = document.createElement("li");
// items.classList.add("item");
// items.textContent = ingredients[i];
// console.log(items);
// console.log(ingredients[i]);
// arr.push(items);
// };

// list.append(...arr);
