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
  ).style.backgroundColor = "var(--slate-400-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".mortgage-amount-input-container").style.border =
      "1px solid red";
    document.querySelector(
      ".mortgage-amount-input-container .static-text"
    ).style.backgroundColor = "red";
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
  ).style.backgroundColor = "var(--slate-400-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".mortgage-term-input-container").style.border =
      "1px solid red";
    document.querySelector(
      ".mortgage-term-input-container .static-text"
    ).style.backgroundColor = "red";
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
  ).style.backgroundColor = "var(--slate-400-color)";

  if (value === "") {
    messageContainer.textContent = "This field is required";
  } else if (isNaN(Number(value))) {
    messageContainer.textContent = "Value must be a number";
  } else if (Number(value) < 0) {
    messageContainer.textContent = "Value cannot be negative";
  }

  if (messageContainer.textContent !== "") {
    document.querySelector(".interest-rate-input-container").style.border =
      "1px solid red";
    document.querySelector(
      ".interest-rate-input-container .static-text"
    ).style.backgroundColor = "red";
  }

  messageContainer.style.display = "block";
};

// Function to check the values and handle error messages
const validateForm = () => {
  validateMortgageAmount();
  validateMortgageTerm();
  validateInterestRate();
};

// Add event listener to calculate button
document
  .getElementById("calculate")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the form from submitting
    validateForm();
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
      "var(--slate-400-color)";
  });
};
