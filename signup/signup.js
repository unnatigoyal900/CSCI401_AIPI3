const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    if (username === "" || password === "") {
        signupErrorMsg.style.opacity = 1;
        signupErrorMsg.textContent = "Missing username and/or password";
    } 
    /*
    else if (username already exists)  {
        signupErrorMsg.style.opacity = 1;
        signupErrorMsg.textContent = "Username already in use";
    }
    */
    else {
        sessionStorage.setItem("username", username);
        sessionStorage.setItem("password", password);
        location = "../signup/getinfo.html"
    }
})