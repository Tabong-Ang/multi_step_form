// Select elements
const nextBtn = document.querySelectorAll("#next");
const formStyle = document.querySelectorAll(".form-style");
const goBack = document.querySelectorAll("#back");
const inputErrorSpan = document.querySelectorAll(".error");
const inputElements = document.querySelectorAll("input[type='text'], input[type='email'], input[type='tel']");

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
    let formValid = true;

    inputElements.forEach(input => {
      const span = input.nextElementSibling;
      if (input.type === 'text' && /\d/.test(input.value)) {
        formValid = false;
        if (span && span.tagName === "SPAN") {
          span.style.visibility = "visible";
          span.textContent = "Name can't contain a number";
          input.style.border = "1px solid var(--Strawberry-red)";
        }
      } else if (!input.validity.valid) {
        formValid = false;
        if (span && span.tagName === "SPAN") {
          span.style.visibility = "visible";
          span.textContent = "Please enter a valid value";
          input.style.border = "1px solid var(--Strawberry-red)";
        }
      } else {
        if (span && span.tagName === "SPAN") {
          span.style.visibility = "hidden";
          span.textContent = ""; // Clear the error message for valid inputs
        }
        input.style.border = ""; // Remove border for valid input
      }
    });

    if (formValid && index < formStyle.length - 1) {
      index++;
      showPage(index);
    }
  });
});

// Add input event listeners to clear errors as the user types
inputElements.forEach(input => {
  input.addEventListener("input", () => {
    const span = input.nextElementSibling;
    if (span && span.tagName === "SPAN") {
      span.style.visibility = "hidden";
      span.textContent = ""; // Clear error message while typing
      input.style.border = ""; // Remove error border while typing
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

// Show the first page initially
showPage(index);
