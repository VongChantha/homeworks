// ✅ Commission Function
function calculateCommissionAmount(sale) {
    if (sale >= 6000000) {
        return sale * 0.10;
    } else if (sale >= 3000000) {
        return sale * 0.05;
    } else if (sale >= 1500000) {
        return sale * 0.03;
    } else {
        return sale * 0.01;
    }
}

// ✅ Button Click Logic
function calculateCommission() {
    const sale = Number(document.getElementById("saleInput").value);
    const result = document.getElementById("result");

    if (sale <= 0 || isNaN(sale)) {
        result.textContent = "Please enter a valid sale amount.";
        result.style.color = "red";
        return;
      }

    const commission = calculateCommissionAmount(sale);
    result.textContent = "Commission: " + commission.toLocaleString() + " Riel";
    result.style.color = "green";
}