const form = document.querySelector(".login-form");

const formLogIn = {};

form.addEventListener("submit", submit);

function submit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    alert("Всі поля мають бути заповнені");
  } else {
    formLogIn.email = form.elements.email.value;
    formLogIn.password = form.elements.password.value;
    console.log(formLogIn);
    form.reset();
  }
}
