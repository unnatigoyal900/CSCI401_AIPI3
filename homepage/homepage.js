const homeButton = document.getElementById("home-button");
const dashButton = document.getElementById("dash-button");
const profileButton = document.getElementById("profile-button");

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