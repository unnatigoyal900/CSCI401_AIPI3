const signupForm = document.getElementById("signup-form");
const signupButton = document.getElementById("signup-form-submit");
const signupErrorMsg = document.getElementById("signup-error-msg");

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    signupErrorMsg.style.opacity = 0;
    const username = signupForm.username.value;
    const password = signupForm.password.value;

    // (1) require both fields to be filled
    // (2) check if user is already in the database
    // (3) if yes, ask for a different username
    // (4) if no, continue to next step of signup

    if (username === "" || password === "") { // (1)
        signupErrorMsg.style.opacity = 1;
        signupErrorMsg.textContent = "Missing username and/or password";
        return;
    }

    fetch('http://localhost:3000/check_user_exists/' + username, { // (2)
        method: 'GET',
        mode: 'cors',
    })
    .then(response => response.text())
    .then(result => {
        if (result === "Found") { // (3)
            signupErrorMsg.style.opacity = 1;
            signupErrorMsg.textContent = "Username has already been taken";
        } else { // (4)
            sessionStorage.setItem("username", username);
            sessionStorage.setItem("password", password);
            location = "../signup/getinfo.html"
        }
        
    })
    .catch(error => {
    console.error(error);
    });
    
})