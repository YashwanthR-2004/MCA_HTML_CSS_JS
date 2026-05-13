// Saving the registration details from the signup page

let signupform = document.getElementById("signupform");

if (signupform) {
    signupform.addEventListener("submit", function (e) {

        e.preventDefault();

        // Reading the data from input boxes
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        //validate the input
        let pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%&!])(?=.*\d).{8,}$/

        if (name == "" || email == "" || password == "") {
            alert("All Fields Required");
            return false;
        }
        if (!pattern.test(password)) {
            alert("password must contain 1 capital letter, 1 small letter,1 special chaaracter, 1 digit and minimum 8 length");
            return false;
        }
        
        // JavaScript object creation
        let user = {
            name: name,
            email: email,
            password: password
        };

        // Store data in localStorage
        localStorage.setItem("user", JSON.stringify(user));

        alert("Signup Successfully...!");
        window.location.href="LOGIN.HTML";
    });
}


// Login Page Code

let loginform = document.getElementById("LoginForm");

if (loginform) {

    loginform.addEventListener("submit", function (abc) {

        abc.preventDefault();

        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        // Reading the data from localStorage
        let user = JSON.parse(localStorage.getItem("user"));

        // Comparing entered data with stored data
        if (user && email === user.email && password === user.password) {

            alert("Login Successful...!");
            localStorage.setItem("isLoggedIn", "true");

            // Redirect to home page
            window.location.href = "index.html";

        } else {

            alert("Invalid email or password");

        }
    });
}

//javascript for changing the heading after login
let heading = document.getElementById("Welcome Message");

if(heading){
    //first get the user details
    let user = JSON.parse(localStorage.getItem("user"));
   
    //check if the user is logged in or not 
    if (user){
        heading.innerHTML = "Welcome " + user.name + "......!";
    }
}