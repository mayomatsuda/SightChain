function validateLogin() {
    let address = document.forms["login_form"]["address"].value;
    let password = document.forms["login_form"]["password"].value;
    
    valid = true;

    if (valid) window.location.href = "call.html";
    else alert("Invalid Login");

    return false;
}

function createWallet() {
    let new_password = document.forms["register_form"]["new_password"].value;
    // code for creating new wallet
    return false;
}

function startCall() {
    // Entry point for voice control code
}