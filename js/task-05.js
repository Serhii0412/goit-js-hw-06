const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  if ((output.textContent = event.currentTarget.value)) {
    console.log(input);
  } else {
    output.textContent = "Anonymous";
  }
});
