const submitButton = document.querySelector("button");
const errorIcon = document.querySelector(".email-error-icon");
const errorMessage = document.querySelector(".email-error-message");

function submitForm() {
  const userInput = document.querySelector("input.email-box").value;
  if (isValidEmail(userInput)) {
    alert("Thank you for signing up!");
  } else {
    // The email is not valid, so display an error message
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    userInput.classList.add("email-error-border");
  }
}

function isValidEmail(userInput) {
  // A simple regular expression that matches most valid email addresses
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(userInput);
}

submitButton.addEventListener("hover", () => {});
submitButton.addEventListener("click", submitForm);

window.onload = function () {
  gsap.from(".hero", {
    duration: 2.5,
    x: 200,
    opacity: 0,
    ease: "expo.out",
  });

  gsap.from(".copy-heading > h1", {
    duration: 3.5,
    y: 100,
    opacity: 0,
    ease: "expo.out",
    stagger: 0.2,
  });
};
