const getinfoForm = document.getElementById("getinfo-form");
const getinfoButton = document.getElementById("getinfo-form-submit");
const getinfoErrorMsg = document.getElementById("getinfo-error-msg");

getinfoButton.addEventListener("click", (e) => {
    e.preventDefault();
    const firstName = getinfoForm.firstName.value;
    const lastName = getinfoForm.lastName.value;
    const orgName = getinfoForm.orgName.value;
    const email = getinfoForm.email.value;
    const phoneNumber = getinfoForm.phoneNumber.value;

    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");

    if (firstName === "" || lastName === "" || orgName === "" || email === "" || phoneNumber === "") {
        getinfoErrorMsg.style.opacity = 1;
        getinfoErrorMsg.textContent = "Missing required fields";
    } 
    else {
        location = "../homepage/homepage.html"
    }
    // add user info to database
})