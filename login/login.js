function validateForm() {
    var un = document.loginForm.username.value;
    var pw = document.loginForm.password.value;
    var username = "MitchWardle";
    var password = "123abc456";
    if ((un == username) && (pw == password)) {
        window.location = "content.html";
        return false;
    }
    else {
        alert("Login was unsuccessful, please check your username and password");
    }
}
