function checkPassword(event) {
    if (event.key === "Enter") {
        var passwordInput = document.getElementById("password");
        var enteredPassword = passwordInput.value;

        if (enteredPassword === "kapoen") {
            window.location = "video.html";
            passwordInput.value = "";
        } else {
            passwordInput.style.borderColor = "red";
            passwordInput.style.animation = "shake 0.5s";

            setTimeout(function () {
                passwordInput.style.borderColor = "";
                passwordInput.style.animation = "";
                passwordInput.value = "";
            }, 500);
        }
    }
}

function ja() {
    window.location = "password.html";
}

function nee() {
    window.location = "cat.jpeg";
}