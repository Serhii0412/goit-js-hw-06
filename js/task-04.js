let counterValue = 0;
const evtPlus = document.querySelector(`[data-action="increment"]`);
const evtMinus = document.querySelector(`[data-action="decrement"]`);

const span = document.querySelector("#value");

const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};

const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};

evtPlus.addEventListener("click", increment);
evtMinus.addEventListener("click", decrement);

console.log(counterValue);
console.log(evtPlus);
console.log(evtMinus);

const stl = document.querySelector("#counter");
stl.style.padding = "50px";
