// Function to clear the form
document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("mortgage-form").reset();
  resetErrorMessages();
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
  messageContainer.style.display = "block";
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
  console.log("Calculating...");
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
