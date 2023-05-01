const homeButton = document.getElementById("home-button");
const dashButton = document.getElementById("dash-button");
const profileButton = document.getElementById("profile-button");
const logoutButton = document.getElementById("logout-button");
const saveButton = document.getElementById("save_changes");


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
saveButton.addEventListener("click", (e) => {
    e.preventDefault();
    const modifyForm = document.getElementById("modify-form");

    var username1 = sessionStorage.getItem("username");
    var firstName = document.getElementById("inputFirstName").value;
    var lastName = document.getElementById("inputLastName").value;
    var orgName =document.getElementById("inputOrgName").value;
    var phoneNumber = document.getElementById("phonenum").value;
    var email = document.getElementById("inputEmailAddress").value;
    
    const joined = [username1, firstName, lastName, orgName, phoneNumber, email].join('/');
    fetch('http://localhost:3000/modify_user/' + joined, {
        method: 'PUT',
        mode: 'cors',
    })
    .then(result => {
        location = "../profilepage/profilepage.html";
    })
    .catch(error => {
    console.error(error);
    });
 })
 