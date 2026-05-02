const createBtn = document.getElementById("createBtn");

const teacherCode = document.getElementById("teacherCode");
const fullName = document.getElementById("fullName");
const contact = document.getElementById("contact");
const warning = document.getElementById("warning");

createBtn.addEventListener("click", function () {
  let isValid = true;

  // Clear warning
  warning.textContent = "";

  // Teacher Code
  if (teacherCode.value.trim() === "") {
    showError(teacherCode, "TeacherCode is required");
    isValid = false;
  } else {
    clearError(teacherCode);
  }

  // Full Name (min 5 chars)
  if (fullName.value.trim() === "") {
    showError(fullName, "FullName is required");
    isValid = false;
  } else if (fullName.value.length < 5) {
    showError(fullName, "FullName must be at least 5 character.");
    isValid = false;
  } else {
    clearError(fullName);
  }

  // Contact
  if (contact.value.trim() === "") {
    showError(contact, "Contact is required");
    isValid = false;
  } else {
    clearError(contact);
  }

  // Final result
  if (!isValid) {
    warning.textContent = "Warning! Invalid input(s).";
  } else {
    alert("Teacher created successfully!");
  }
});

function showError(input, message) {
  input.classList.add("error-border");
  input.nextElementSibling.textContent = message;
}

function clearError(input) {
  input.classList.remove("error-border");
  input.nextElementSibling.textContent = "";
}