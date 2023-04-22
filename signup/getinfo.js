const getinfoForm = document.getElementById("getinfo-form");
const getinfoButton = document.getElementById("getinfo-form-submit");
const getinfoErrorMsg = document.getElementById("getinfo-error-msg");

getinfoButton.addEventListener("click", (e) => {
    e.preventDefault();
    var firstName = getinfoForm.firstName.value;
    var lastName = getinfoForm.lastName.value;
    var orgName = getinfoForm.orgName.value;
    var email = getinfoForm.email.value;
    var phoneNumber = getinfoForm.phoneNumber.value;

    // (1) get username and password from previous page
    // (2) require all fields to be filled
    // (3) add the user

    var username = sessionStorage.getItem("username"); // (1)
    var password = sessionStorage.getItem("password");

    if (firstName === "" || lastName === "" || orgName === "" || email === "" || phoneNumber === "") { // (2)
        getinfoErrorMsg.style.opacity = 1;
        getinfoErrorMsg.textContent = "Missing required fields";
        /*
        const username = "table_mabel";
        const columnName = "organization";
        const params = [username, columnName].join('/');
        fetch('http://localhost:3000/get_user_info/' + params, {
            method: 'GET',
            mode: 'cors',
        })
        .then(response => response.text())
        .then(result => {
            getinfoErrorMsg.textContent = result;
        })
        .catch(error => {
        console.error(error);
        });
        */
    } 
    else {
        const joined = [username, password, firstName, lastName, orgName, phoneNumber, email].join('/');
        fetch('http://localhost:3000/add_user/' + joined, { // (3)
            method: 'PUT',
            mode: 'cors',
        })
        .catch(error => {
        console.error(error);
        });
        location = "../homepage/homepage.html"
    }
})