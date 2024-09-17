const form = document.getElementById("registerform");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const result = document.getElementById("result");
const passportInput = document.getElementById("passport");

console.log(result);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  console.log(event);

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const passport = passportInput.value.trim();

    if(validatePassport(passport)) {
        result.textContent = "Passport req";
        return;
    }

  if (name === "") {
    result.textContent = "Name req";
    return;
  }

  if (validateEmail(email)) {
    result.textContent = "Email req";
    return;
  }

  result.textContent = `Name ${name}, Email: ${email}`;
});

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function validatePassport(passport) {
    const regexPassport = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regexPassport.test(passport);
}