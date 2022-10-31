const inputColor = document.querySelector("#validation-input");

const onBlur = (event) => {
  if (event.currentTarget.value.length === Number(inputColor.dataset.length)) {
    inputColor.classList.remove("invalid");
    inputColor.classList.add("valid");
  } else {
    inputColor.classList.add("invalid");
    inputColor.classList.remove("valid");
  }
};

inputColor.addEventListener("blur", onBlur);
