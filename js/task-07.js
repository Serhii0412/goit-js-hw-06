const input = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

const onInput = (event) => {
  text.style.fontSize = event.currentTarget.value + "px";
};

input.addEventListener("input", onInput);
console.log(input);
