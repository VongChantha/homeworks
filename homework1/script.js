// ===== Functions =====

function checkNumber(value) {
  return !isNaN(value) && value !== "";
};

function checkPositiveNumber(value) {
  return Number.isInteger(Number(value)) && Number(value) > 0;
}

function checkDecimal(value) {
  return !isNaN(value) && value.includes(".");
}

function checkPositiveDecimal(value) {
  return !isNaN(value) && Number(value) > 0 && value.includes(".");
}

function checkEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function checkBoolen(value) {
  return value === true || value === false || value === "true" || value === "false";
}

// ===== UI Logic =====

function showResult(elementId, isValid) {
  const el = document.getElementById(elementId);
  el.textContent = isValid ? "Result: TRUE" : "Result: FALSE";
  el.className = "result " + (isValid ? "true" : "false");
}

function validate(type) {
  switch (type) {
    case "number":
      showResult("numberResult",
        checkNumber(document.getElementById("numberInput").value));
      break;

    case "positiveNumber":
      showResult("positiveNumberResult",
        checkPositiveNumber(document.getElementById("positiveNumberInput").value));
      break;

    case "decimal":
      showResult("decimalResult",
        checkDecimal(document.getElementById("decimalInput").value));
      break;

    case "positiveDecimal":
      showResult("positiveDecimalResult",
        checkPositiveDecimal(document.getElementById("positiveDecimalInput").value));
      break;

    case "email":
      showResult("emailResult",
        checkEmail(document.getElementById("emailInput").value));
      break;

    case "boolean":
      showResult("booleanResult",
        checkBoolen(document.getElementById("booleanInput").value));
      break;
  }
}