function calculateEMI() {
  const principal = parseFloat(document.getElementById('loanAmount').value);
  const annualInterest = parseFloat(document.getElementById('interestRate').value);
  const tenure = parseInt(document.getElementById('tenure').value);

  if (isNaN(principal) || isNaN(annualInterest) || isNaN(tenure)) {
    document.getElementById('result').innerText = 'Please enter valid values.';
    return;
  }

  const monthlyInterest = annualInterest / 12 / 100;
  const emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) / (Math.pow(1 + monthlyInterest, tenure) - 1);

  const emiRounded = emi.toFixed(2);
  document.getElementById('result').innerText = `Your EMI is ₹${emiRounded}`;
}
