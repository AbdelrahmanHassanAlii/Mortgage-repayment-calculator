// Function to clear the form
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("mortgage-form").reset();
  resetErrorMessages();
  clearResults();
});

// Function to validate the mortgage amount
const validateMortgageAmount = () => {
  const value = document.getElementById("mortgage-amount").value;
  const messageContainer = document.querySelector(
    ".mortgage-amount-error-message"
  );

  messageContainer.textContent = "";
  document.querySelector(".mortgage-amount-input-container").style.border =
    "1px solid var(--slate-400-color)";
  document.querySelector(
    ".mortgage-amount-input-container .static-text"
  ).style.backgroundColor = "var(--slate-200-color)";
  document.querySelector(
    ".mortgage-amount-input-container .static-text"
  ).style.color = "var(--slate-800-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".mortgage-amount-input-container").style.border =
      "1px solid var(--red-color)";
    document.querySelector(
      ".mortgage-amount-input-container .static-text"
    ).style.backgroundColor = "var(--red-color)";
    document.querySelector(
      ".mortgage-amount-input-container .static-text"
    ).style.color = "var(--light-color)";
  }

  messageContainer.style.display = "block";
};

// Function to validate the mortgage term
const validateMortgageTerm = () => {
  const value = document.getElementById("mortgage-term").value;
  const messageContainer = document.querySelector(
    ".mortgage-term-error-message"
  );

  messageContainer.textContent = "";
  document.querySelector(".mortgage-term-input-container").style.border =
    "1px solid var(--slate-400-color)";
  document.querySelector(
    ".mortgage-term-input-container .static-text"
  ).style.backgroundColor = "var(--slate-200-color)";
  document.querySelector(
    ".mortgage-term-input-container .static-text"
  ).style.color = "var(--slate-800-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".mortgage-term-input-container").style.border =
      "1px solid var(--red-color)";
    document.querySelector(
      ".mortgage-term-input-container .static-text"
    ).style.backgroundColor = "var(--red-color)";
    document.querySelector(
      ".mortgage-term-input-container .static-text"
    ).style.color = "var(--light-color)";
  }

  messageContainer.style.display = "block";
};

// Function to validate the interest rate
const validateInterestRate = () => {
  const value = document.getElementById("interest-rate").value;
  const messageContainer = document.querySelector(
    ".interest-rate-error-message"
  );

  messageContainer.textContent = "";
  document.querySelector(".interest-rate-input-container").style.border =
    "1px solid var(--slate-400-color)";
  document.querySelector(
    ".interest-rate-input-container .static-text"
  ).style.backgroundColor = "var(--slate-200-color)";
  document.querySelector(
    ".interest-rate-input-container .static-text"
  ).style.color = "var(--slate-800-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".interest-rate-input-container").style.border =
      "1px solid var(--red-color)";
    document.querySelector(
      ".interest-rate-input-container .static-text"
    ).style.backgroundColor = "var(--red-color)";
    document.querySelector(
      ".interest-rate-input-container .static-text"
    ).style.color = "var(--light-color)";
  }

  messageContainer.style.display = "block";
};

// Function to check if a radio option is selected and handle error messages
const validateRadio = () => {
  const checkedRadio = document.querySelector(
    'input[name="mortgage-type"]:checked'
  );

  const messageContainer = document.querySelector(".options-error-message");

  messageContainer.textContent = "";

  if (!checkedRadio) {
    messageContainer.textContent = "Please select a mortgage type.";
    messageContainer.style.display = "block";
  } else {
    messageContainer.style.display = "none";
  }
};

// Function to check the values and handle error messages
const validateForm = () => {
  validateMortgageAmount();
  validateMortgageTerm();
  validateInterestRate();
  validateRadio();
};

// Function to calculate the mortgage
const calculateMortgage = () => {
  // Get the input values
  const mortgageAmount = Number(
    document.getElementById("mortgage-amount").value
  );
  const mortgageTerm = Number(document.getElementById("mortgage-term").value);
  const interestRate = Number(document.getElementById("interest-rate").value);
  const mortgageType = document.querySelector(
    'input[name="mortgage-type"]:checked'
  ).value;

  // Calculate the monthly repayment
  const monthlyRepayment = calculateMonthlyRepayment(
    mortgageAmount,
    mortgageTerm,
    interestRate
  );

  // Calculate the total repayment over the term
  const totalRepayment = calculateTotalRepayment(
    monthlyRepayment,
    mortgageTerm,
    mortgageType
  );

  // Display the results
  const top = document.querySelector(".right-bottom .top");
  const middle = document.querySelector(".right-bottom .middle");
  const bottom = document.querySelector(".right-bottom .bottom");

  // Update the results section
  top.innerHTML = "<p>Your results</p>";
  middle.innerHTML =
    "<p class='result-middle-text'>Your results are shown below based on the information you provided. To adjust the result, edit the form and click 'Calculate repayment' again.</p>";
  middle.style.color = "var(--slate-300-color)";
  middle.style.fontSize = "0.9rem";

  // Check if a result card already exists
  let card = document.querySelector(".result-card");

  if (!card) {
    // Create a new card if it doesn't exist
    card = document.createElement("div");
    card.classList.add("result-card");

    // Top section of card
    const resultTop = document.createElement("div");
    resultTop.classList.add("result-card-top");

    const resultTopText = document.createElement("p");
    resultTopText.classList.add("result-card-top-text");
    resultTopText.textContent = "Your monthly repayment";

    const resultTopValue = document.createElement("p");
    resultTopValue.classList.add("result-card-top-value");

    resultTop.appendChild(resultTopText);
    resultTop.appendChild(resultTopValue);
    card.appendChild(resultTop);

    // Bottom section of card
    const resultBottom = document.createElement("div");
    resultBottom.classList.add("result-card-bottom");

    const resultBottomText = document.createElement("p");
    resultBottomText.classList.add("result-card-bottom-text");
    resultBottomText.textContent = "Total you'll repay over the term";

    const resultBottomValue = document.createElement("p");
    resultBottomValue.classList.add("result-card-bottom-value");

    resultBottom.appendChild(resultBottomText);
    resultBottom.appendChild(resultBottomValue);
    card.appendChild(resultBottom);

    bottom.appendChild(card);
  }

  // Update the card values
  card.querySelector(
    ".result-card-top-value"
  ).textContent = `£${monthlyRepayment.toFixed(2)}`;
  card.querySelector(
    ".result-card-bottom-value"
  ).textContent = `£${totalRepayment.toFixed(2)}`;
};

// Function to calculate the monthly repayment
const calculateMonthlyRepayment = (
  mortgageAmount,
  mortgageTerm,
  interestRate
) => {
  const monthlyInterestRate = interestRate / 100 / 12;
  const numPayments = mortgageTerm * 12;
  const numerator =
    monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numPayments);
  const denominator = Math.pow(1 + monthlyInterestRate, numPayments) - 1;
  const monthlyRepayment = mortgageAmount * (numerator / denominator);
  return monthlyRepayment;
};

// Function to calculate the total repayment
const calculateTotalRepayment = (
  monthlyRepayment,
  mortgageTerm,
  mortgageType
) => {
  if (mortgageType === "Repayment") {
    const totalRepayment = monthlyRepayment * mortgageTerm * 12;
    return totalRepayment;
  } else {
    const totalRepayment = monthlyRepayment * (mortgageTerm * 12);
    return totalRepayment;
  }
};

// Add event listener to calculate button
document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault();
    validateForm();
    // Check if any validation errors exist
    const errorMessages = document.querySelectorAll(".error-message");
    const hasErrors = Array.from(errorMessages).some(
      (message) => message.textContent !== ""
    );

    if (!hasErrors) {
      calculateMortgage();
    }
  });

// Function to reset error messages and styles
const resetErrorMessages = () => {
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((message) => {
    message.textContent = "";
    message.style.display = "none";
  });

  const inputContainers = document.querySelectorAll(".input-container");
  inputContainers.forEach((container) => {
    container.style.border = "1px solid var(--slate-400-color)";
    container.querySelector(".static-text").style.backgroundColor =
      "var(--slate-200-color)";
    container.querySelector(".static-text").style.color =
      "var(--slate-800-color)";
  });
};

// Function to clear the results
const clearResults = () => {
  const top = document.querySelector(".right-bottom .top");
  const middle = document.querySelector(".right-bottom .middle");
  const bottom = document.querySelector(".right-bottom .bottom");

  top.innerHTML = "";
  middle.innerHTML = `              <div class="image">
                <img
                  src="./assets/images/illustration-empty.svg"
                  alt="Illustration"
                />
              </div>
              <div class="middle">
                <p class="title">Results shown here</p>
              </div>
              <div class="bottom">
                <p class="paragraph">
                  Complete the form and click “calculate repayments” to see what
                  your monthly repayments would be.
                </p>
              </div>`;
  bottom.innerHTML = "";
};
