const form = document.getElementById("registerForm");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  let valid = true;

  // Username
  if (username.value.trim() === "") {
    showError(username, "Username is required");
    valid = false;
  } else {
    clearError(username);
  }

  // Email
  if (email.value.trim() === "") {
    showError(email, "Email is required");
    valid = false;
  } else if (!isValidEmail(email.value)) {
    showError(email, "Email is not valid");
    valid = false;
  } else {
    clearError(email);
  }

  // Password
  if (password.value === "") {
    showError(password, "Password is required");
    valid = false;
  } else {
    clearError(password);
  }

  // Confirm Password
  if (confirmPassword.value === "") {
    showError(confirmPassword, "Please confirm your password");
    valid = false;
  } else if (confirmPassword.value !== password.value) {
    showError(confirmPassword, "Passwords do not match");
    valid = false;
  } else {
    clearError(confirmPassword);
  }

  if (valid) {
    alert("Registration successful!");
    form.reset();
  }
}

function showError(input, message) {
  const errorText = input.nextElementSibling;
  input.classList.add("error-border");
  errorText.textContent = message;
}

function clearError(input) {
  const errorText = input.nextElementSibling;
  input.classList.remove("error-border");
  errorText.textContent = "";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}