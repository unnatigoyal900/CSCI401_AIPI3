const homeButton = document.getElementById("home-button");
const loginButton = document.getElementById("login-button");
const getstartedButton = document.getElementById("get-started-button");


homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../pre_homepage/pre_homepage.html"
})

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../login/login.html"
})
getstartedButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../login/login.html"
})