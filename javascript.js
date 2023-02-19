const form = document.querySelector(".form");
const formData = [
  document.querySelector(".form-first-name"),
  document.querySelector(".form-last-name"),
  document.querySelector(".form-email"),
  document.querySelector(".form-password"),
];
const formErrorImage = [
    document.querySelector(".error-first-name-image"),
    document.querySelector(".error-last-name-image"),
    document.querySelector(".error-email-image"),
    document.querySelector(".error-password-image"),
];
const formErrorDescription=[
    document.querySelector(".error-first-name-description"),
    document.querySelector(".error-last-name-description"),
    document.querySelector(".error-email-description"),
    document.querySelector(".error-password-description"),
]

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formData.forEach((item,index) => {
    if (item.value.length === 0) {
        
      item.style.border = "1px solid red";
      formErrorImage[index].classList.remove("hidden");
      formErrorDescription[index].classList.remove("hidden");
    }
   
    else {
        item.style.border = "1px solid green";
        formErrorImage[index].classList.add("hidden");
        formErrorDescription[index].classList.add("hidden");
    }
  });
});