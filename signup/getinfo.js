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

    var username = sessionStorage.getItem("username");
    var password = sessionStorage.getItem("password");

    if (firstName === "" || lastName === "" || orgName === "" || email === "" || phoneNumber === "") {
        getinfoErrorMsg.style.opacity = 1;
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
        
        // code for adding user 
        /*
        username = "hannah_banana";
        password = "09090";
        firstName = "Hannah";
        lastName = "Peel";
        orgName= "Bananas";
        phoneNumber = "5101010105";
        email = "hannah_banana@gmail.com";
        */
    } 
    else {
        // add user info to database
        const joined = [username, password, firstName, lastName, orgName, phoneNumber, email].join('/');
        fetch('http://localhost:3000/add_user/' + joined, {
            method: 'PUT',
            mode: 'cors',
        })
        .catch(error => {
        console.error(error);
        });
        location = "../homepage/homepage.html"
    }
})