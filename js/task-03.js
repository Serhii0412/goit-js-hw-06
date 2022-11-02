const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const list = document.querySelector(".gallery");

const markupImg = images
  .map(
    ({ url, alt }) =>
      `<li class = "gallery__item">
    <img src="${url}" alt="${alt}" width="400px" height="250px" class="gallery__img"></li>`
  )
  .join("");

console.log(markupImg);
list.insertAdjacentHTML("beforeend", markupImg);

const stl = document.querySelector(".gallery");
stl.style.display = "flex";
stl.style.flexWrap = "wrap";
stl.style.gap = "20px";
stl.style.listStyle = "none";
stl.style.paddingTop = "30px";
stl.style.justifyContent = "center";
