// Select elements
const nextBtn = document.querySelectorAll("#next");
const formStyle = document.querySelectorAll(".form-style");
const goBack = document.querySelectorAll("#back");
const inputErrorSpan = document.querySelectorAll(".error");
const inputName = document.querySelector("input[type='text']");
const inputEmail = document.querySelector("input[type='email']");
const inputTel = document.querySelector("input[type='tel']");

// Show error message
function showError(input, message) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = message;
  inputErrorSpan.forEach(span => {
    span.style.visibility = "visible";
  });
}

// Hide error message
function hideError(input) {
  const errorSpan = input.nextElementSibling;
  errorSpan.textContent = "";
  inputErrorSpan.forEach(span => {
    span.style.visibility = "hidden";
  });
}

// Show the form at the specified index
let index = 0;
const showPage = (idx) => {
  formStyle.forEach((form, i) => {
    form.classList.toggle("active", i === idx);
  });
};

// Add click event listeners to the next buttons
nextBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();
    if (typeof inputName.value !== "string" || inputName.value.trim() === "") {
      showError(inputName, "Please enter a valid name");
    } else if (!inputEmail.validity.valid) {
      showError(inputEmail, "Please enter a valid email");
    } else {
      if (index < formStyle.length - 1) {
        index++;
        showPage(index);
      }
      hideError(inputName);
      hideError(inputEmail);
    }
  });
});

// Add click event listeners to the back buttons
goBack.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      showPage(index);
    }
  });
});

// Add input event listeners to hide error messages while typing
[inputName, inputEmail, inputTel].forEach((input) => {
  input.addEventListener("input", () => {
    hideError(input);
  });
});

// Show the first page initially
showPage(index);
