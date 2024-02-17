// auth.js

function validateCredentials(username, password) {
    if (username.length < 8 || username.length > 19) {
        alert("Username must be between 8 and 19 characters long.");
        return false;
    }

    if (password.length < 5) {
        alert("Password must be at least 5 characters long.");
        return false;
    }

   
    var passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/;
    if (!passwordRegex.test(password)) {
        alert("Password must contain at least one uppercase letter, one number, and one special character.");
        return false;
    }

    return true;
}

document.addEventListener('DOMContentLoaded', function() {
    var loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function () {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        
        if (!validateCredentials(username, password)) {
        
            event.preventDefault();
        } else {
        
            console.log("Login successful. Username: ", username);
            console.log("Password: ", password);
        }
    });
});
