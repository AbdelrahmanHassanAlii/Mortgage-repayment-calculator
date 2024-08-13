//function to clear the form
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("mortgage-form").reset();
});

// Add event listener to calculate button
document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const mortgageAmount = document.getElementById("mortgage-amount").value;
    const mortgageTerm = document.getElementById("mortgage-term").value;
    const interestRate = document.getElementById("interest-rate").value;
    const mortgageType = document.querySelector(
      'input[name="mortgage-type"]:checked'
    )?.value;

    // Print values to console
    console.log("Mortgage Amount:", mortgageAmount);
    console.log("Mortgage Term (Years):", mortgageTerm);
    console.log("Interest Rate (%):", interestRate);
    console.log("Mortgage Type:", mortgageType);
  });
