const nextBtn = document.querySelectorAll("#next");
const formStyle = document.querySelectorAll(".form-style");
const goBack = document.querySelectorAll("#back");

let index = 0;
const showPage = (idx) => {
  formStyle.forEach((form, i) => {
    form.classList.toggle("active", i === idx);
  });
};

nextBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (index < formStyle.length - 1) {
      index++;
      showPage(index);
    }
  });
});

goBack.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (index > 0) {
      index--;
      showPage(index);
    }
  });
});
showPage(index);
