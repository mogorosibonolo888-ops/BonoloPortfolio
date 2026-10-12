const contactForm = document.querySelector("form");
const formMessage = document.querySelector("#form-message");


contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

formMessage.textContent = "Thank you for contacting me!";
});


