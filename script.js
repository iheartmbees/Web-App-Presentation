document.getElementById("registrationForm").addEventListener("submit", function(event) {
    let valid = true;

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();

    let formError = document.getElementById("formError");
    formError.classList.add("hidden");
    formError.textContent = "";

    document.getElementById("usernameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";

    let messages = [];

    if (username.length < 3) {
        document.getElementById("usernameError").textContent = "Username must be at least 3 characters.";
        messages.push("Invalid username");
        valid = false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").textContent = "Enter a valid email address.";
        messages.push("Invalid email");
        valid = false;
    }

    if (password.length < 6) {
        document.getElementById("passwordError").textContent = "Password must be at least 6 characters.";
        messages.push("Weak password");
        valid = false;
    }

    if (!valid) {
        event.preventDefault();
        formError.textContent = "Please correct the errors before submitting.";
        formError.classList.remove("hidden");
    }
});
