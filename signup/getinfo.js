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

        /*
        // code for adding user 
        const username = "hannah_banana";
        const password = "09090";
        const first_name = "Hannah";
        const last_name = "Peel";
        const organization = "Bananas";
        const phone_number = "5101010105";
        const email = "hannah_banana@gmail.com";
        const joined = [username, password, first_name, last_name, organization, phone_number, email].join('/');
        fetch('http://localhost:3000/add_user/' + joined, {
            method: 'PUT',
            mode: 'cors',
        })
        .catch(error => {
        console.error(error);
        }); */
    } 
    else {
        // add user info to database
        location = "../homepage/homepage.html"
    }
})