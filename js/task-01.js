const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

items.forEach((el) => {
  const title = el.querySelector("h2").innerHTML;
  const itemsLength = el.querySelectorAll("li").length;
  console.log(`Category: ${title}`);
  console.log(`Elements: ${itemsLength}`);
});

// const list = document.querySelectorAll('li');
//   for(let i = 0; i < items.length; i += 1){
//     console.log("Category: " + items[i].querySelector('h2').textContent);
//     console.log("Elements: " + items[i].querySelectorAll('ul li').length);
//   };
