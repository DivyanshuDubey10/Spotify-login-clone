const emailInput = document.getElementById("email");
const emailMessage = document.getElementById("emailMessage");
emailInput.addEventListener("input", function () {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === "") {

        emailInput.classList.remove("valid");
        emailInput.classList.remove("invalid");

        emailMessage.textContent = "";

        return;
    }
    if(emailPattern.test(email)){
        emailInput.classList.remove("invalid")
        emailInput.classList.add("valid");
        emailMessage.textContent = "Valid Email Address";
        emailMessage.style.color = "#1ED760"
    } else{
        emailInput.classList.remove("valid");
        emailInput.classList.add("invalid");

        emailMessage.textContent = "Please enter a valid Email.";
        emailMessage.style.color = "#ff4d4d";
    }
});

