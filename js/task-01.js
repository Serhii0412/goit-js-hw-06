const items = document.querySelectorAll('.item');
console.log(`Number of categories: ${items.length}`);

const list = document.querySelectorAll('li');
  for(let i = 0; i < items.length; i += 1){
    console.log("Category: " + items[i].querySelector('h2').textContent);
    console.log("Elements: " + items[i].querySelectorAll('ul li').length);
  };