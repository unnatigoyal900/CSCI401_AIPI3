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
        location = "../signup/getinfo.html"
    }
    // add username and password to database
})