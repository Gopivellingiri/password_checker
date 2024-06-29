const pswd_1 = document.querySelector("#pswd_1");
const pswd_2 = document.querySelector("#pswd_2");
const errorText = document.querySelector(".error-text");
const showButton = document.querySelector(".show");
const btn = document.querySelector("button");

const togglePasswordVisibility = () => {
  const isPassword = pswd_1.type === "password" && pswd_2.type === "password";
  const buttonText = isPassword ? "Hide" : "Show";

  pswd_1.type = isPassword ? "text" : "password";
  pswd_2.type = isPassword ? "text" : "password";
  showButton.textContent = buttonText;
};

const hidePasswordToggle = () => {
  showButton.style.display = "none";
};

const showSuccess = (message) => {
  errorText.textContent = message;
  errorText.classList.add("matched");
  errorText.style.display = "block";
};

const showError = (message) => {
  errorText.textContent = message;
  errorText.classList.remove("matched");
  errorText.style.display = "block";
};

const checkPasswords = () => {
  if (pswd_1.value === pswd_2.value) {
    showSuccess("Perfect! Passwords are the Same");
  } else {
    showError("Oops! Passwords are not the same.");
  }
};

const active = () => {
  const isValidLength = pswd_1.value.length >= 6;

  btn.disabled = !isValidLength;
  btn.classList.toggle("active", isValidLength);
  pswd_2.disabled = !isValidLength;

  if (!isValidLength) {
    hidePasswordToggle();
  }
};

const handlePswd2Input = () => {
  active();
  if (pswd_2.value !== "") {
    showButton.style.display = "block";
    showButton.onclick = togglePasswordVisibility;
  } else {
    hidePasswordToggle();
  }
};

const handleSubmit = (event) => {
  event.preventDefault();
  checkPasswords();
};

pswd_1.addEventListener("input", active);
pswd_2.addEventListener("input", handlePswd2Input);
btn.addEventListener("click", handleSubmit);

active();
