// Select elements
const nextBtn = document.querySelectorAll("#next");
const formStyle = document.querySelectorAll(".form-style");
const goBack = document.querySelectorAll("#back");
const inputErrorSpan = document.querySelectorAll(".error");
const inputElements = document.querySelectorAll(
  "input[type='text'], input[type='email'], input[type='tel']"
);
const numBgFill = document.querySelectorAll("#num-bg-fill");
const errorMessage = document.querySelector(".errorMessage");

// Show the form at the specified index
let index = 0;
const showPage = (idx) => {
  formStyle.forEach((form, i) => {
    form.classList.toggle("active", i === idx);
  });

  numBgFill.forEach((num, i) => {
    if (i <= idx) {
      num.style.backgroundColor = "var(--Pastel-blue)";
    } else {
      num.style.backgroundColor = "transparent";
    }
  });
};

// Add click event listeners to the next buttons
nextBtn.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    let formValid = true;

    inputElements.forEach((input) => {
      const span = input.nextElementSibling;
      if (input.type === "text" && /\d/.test(input.value)) {
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
inputElements.forEach((input) => {
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

const toggle = document.getElementById("toggle");
const spans = document.querySelectorAll(".toggle-switch span");
const subscriptionType = document.querySelectorAll("#arcade, #advanced, #pro");
let onlineYear = document.querySelector("#online-year");
let largerYear = document.querySelector("#larger-year");
let customizeYear = document.querySelector("#customize-year");
let subscriptionTypeAmount = document.querySelector(".amount");
let selectedPlan = null;

toggle.addEventListener("change", () => {
  subscriptionType.forEach((subscription) => {
    let subscriptionAmt = subscription.nextElementSibling;
    let subscriptionBonus = subscriptionAmt.nextElementSibling;
    subscriptionBonus.style.color = "var(--Marine-blue)";
    if (toggle.checked) {
      document.querySelector("#yearly-span").style.color = "var(--Marine-blue)";
      document.querySelector("#monthly-span").style.color = "";
      if (subscription.id === "arcade") {
        subscriptionAmt.innerHTML = "$90/yr";
        subscriptionBonus.innerHTML = "2 months free";
        subscriptionTypeAmount.innerHTML = "$90/yr"
        onlineYear.innerHTML = "+$10/yr";
        largerYear.innerHTML = "+$20/yr";
        customizeYear.innerHTML = "+$20/yr";
      } else if (subscription.id === "advanced") {
        subscriptionAmt.innerHTML = "$120/yr";
        subscriptionBonus.innerHTML = "2 months free";
        onlineYear.innerHTML = "+$10/yr";
        largerYear.innerHTML = "+$20/yr";
        customizeYear.innerHTML = "+$20/yr";
      } else if (subscription.id === "pro") {
        subscriptionAmt.innerHTML = "$150/yr";
        subscriptionBonus.innerHTML = "2 months free";
        onlineYear.innerHTML = "+$10/yr";
        largerYear.innerHTML = "+$20/yr";
        customizeYear.innerHTML = "+$20/yr";
      }
      spans[1].classList.add("active");
      spans[0].classList.remove("active");
    } else {
      document.querySelector("#monthly-span").style.color = "var(--Marine-blue)";
      document.querySelector("#yearly-span").style.color = "";
      if (subscription.id === "arcade") {
        subscriptionAmt.innerHTML = "$9/mo";
        subscriptionBonus.innerHTML = "";
        onlineYear.innerHTML = "+$1/mo";
        largerYear.innerHTML = "+$2/mo";
        customizeYear.innerHTML = "+$2/mo";
      } else if (subscription.id === "advanced") {
        subscriptionAmt.innerHTML = "$12/mo";
        subscriptionBonus.innerHTML = "";
        onlineYear.innerHTML = "+$1/mo";
        largerYear.innerHTML = "+$2/mo";
        customizeYear.innerHTML = "+$2/mo";
      } else if (subscription.id === "pro") {
        subscriptionAmt.innerHTML = "$15/mo";
        subscriptionBonus.innerHTML = "";
        onlineYear.innerHTML = "+$1/mo";
        largerYear.innerHTML = "+$2/mo";
        customizeYear.innerHTML = "+$2/mo";
      }
      spans[0].classList.add("active");
      spans[1].classList.remove("active");
    }
  });
  updateSubscriptionType();
});

const optionBox = document.querySelectorAll(".option_box");

optionBox.forEach((box) => {
  box.addEventListener("click", () => {
    optionBox.forEach((item) => {
      item.classList.remove("active");
    });
    box.classList.add("active");
    selectedPlan = box.textContent;
    updateSubscriptionType();
  });
});

const inputCheckBoxes = document.querySelectorAll("input[type='checkbox']");
let localTypeSele = document.querySelector("#local-1");
let storageTypeSele = document.querySelector("#local-2");
let customizeTypeSele = document.querySelector("#local-3");
let onlineServiceLabel = document.querySelector("#online-label");
let storageServiceLabel = document.querySelector("#storage-label");
let customizeServiceLabel = document.querySelector("#customize-label");
let local_1_span = document.querySelector("#local-1-span");
let storage_1_span = document.querySelector("#local-2-span");
let customize_1_span = document.querySelector("#local-3-span");

let serviceOptionDiv = document.querySelector(".service-option");
let serviceOptionDiv2 = document.querySelector(".service-option-2");

inputCheckBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    if (document.querySelector("#online").checked) {
      localTypeSele.innerHTML = onlineServiceLabel.textContent;
      local_1_span.innerHTML = onlineYear.textContent;
      serviceOptionDiv.style.border = "2px solid var(--purple)";
    } else {
      localTypeSele.innerHTML = ""
      local_1_span.innerHTML = "";
      serviceOptionDiv.style.border = "";
    }
    if (document.querySelector("#storage").checked) {
      storageTypeSele.innerHTML = storageServiceLabel.textContent;
      storage_1_span.innerHTML = largerYear.textContent;
      serviceOptionDiv2.style.border = "2px solid var(--purple)";
    } else {
      storageTypeSele.innerHTML = "";
      storage_1_span.innerHTML = "";
      serviceOptionDiv2.style.border = "";
    }
    if (document.querySelector("#storage").checked) {
      customizeTypeSele.innerHTML = customizeServiceLabel.textContent;
      customize_1_span.innerHTML = customizeYear.textContent;
      serviceOptionDiv2.style.border = "2px solid var(--purple)";
    } else {
      customizeTypeSele.innerHTML = "";
      customize_1_spaninnerHTML = "";
      serviceOptionDiv2.style.border = "";
    }
  });
});

function updateSubscriptionType() { 
  if (selectedPlan) { 
    const billingCycle = toggle.checked ? "Yearly" : "Monthly"; 
    const planName = selectedPlan.split(' $')[0]; // Split the text at the amount to get the plan name 
    document.querySelector(".subscription-type").innerHTML = `${planName} (${billingCycle})`;
  } 
}

let changeSubscriptype = document.querySelector(".change-type");

changeSubscriptype.addEventListener("click", () => {
  // Navigate to the second page
  index = 1; // Assuming the second page has an index of 1
  showPage(index);
});

const totalAmount = document.querySelector(".total-amount");

// Function to extract numeric value from a string
const getNumericValue = (element) => {
  const value = element.innerHTML.replace(/[^\d.]/g, ''); // Remove non-numeric characters
  return parseFloat(value) || 0; // Convert to number, default to 0 if NaN
};

// Calculate the total amount
const calculateTotalAmount = () => {
  const subscriptionAmount = getNumericValue(subscriptionTypeAmount);
  const localAmount = getNumericValue(local_1_span);
  const storageAmount = getNumericValue(storage_1_span);
  const customizeAmount = getNumericValue(customize_1_span);
  const billingCycle = toggle.checked ? "/yr" : "/mo"; 
  const total = subscriptionAmount + localAmount + storageAmount + customizeAmount;
  totalAmount.innerHTML = `+$${total} ${billingCycle}`; // Display the total amount with 2 decimal places
};

// Create a MutationObserver instance to watch for changes in the elements
const observer = new MutationObserver(calculateTotalAmount);

// Specify the target nodes to observe
const targets = [subscriptionTypeAmount, local_1_span, storage_1_span, customize_1_span];
targets.forEach(target => {
  observer.observe(target, { childList: true, subtree: true, characterData: true });
});

// Call the function to calculate and display the total amount initially
calculateTotalAmount();





// Show the first page initially
showPage(index);
