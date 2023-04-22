const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    // (1) require both fields to be filled
    // (2) check if username matches password
    // (3) if no, reject login
    // (4) if yes, continue to home page

    if (username === "" || password === "") { // (1)
        loginErrorMsg.style.opacity = 1;
        loginErrorMsg.textContent = "Missing username and/or password";
        return;
    }

    const params = [username, password].join('/');
    fetch('http://localhost:3000/validate_password/' + params, { // (2)
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.text())
    .then(result => {
        if (result === "Invalid") { // (3)
            loginErrorMsg.style.opacity = 1;
            loginErrorMsg.textContent = "Invalid username and/or password";
        } else { // (4)
            sessionStorage.setItem("username", username);
            location = "../homepage/homepage.html";
        }  
    })
    .catch(error => {
    console.error(error);
    });
})