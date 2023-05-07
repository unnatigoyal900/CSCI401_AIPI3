const homeButton = document.getElementById("home-button");
const dashButton = document.getElementById("dash-button");
const profileButton = document.getElementById("profile-button");
const logoutButton = document.getElementById("logout-button");

homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../homepage/homepage.html"
})

profileButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../profilepage/profilepage.html"
})
dashButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../results/result.html"
})
logoutButton.addEventListener("click", (e) => {
    e.preventDefault();
    location = "../pre_homepage/pre_homepage.html"
})