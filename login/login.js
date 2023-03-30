const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // search database for key value pair
    const matchFound = Boolean(username === "user" && password === "12345"); // REPLACE
    if (matchFound) {
        location = "../homepage/homepage.html"
    } else {
        loginErrorMsg.style.opacity = 1;
        loginErrorMsg.textContent = "Invalid username and/or password";
    }
})