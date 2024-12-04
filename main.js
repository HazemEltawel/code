var signName = document.getElementById("signName");
var signEmail = document.getElementById("signEmail");
var signPassord = document.getElementById("signPassord");
var arraySignUp = [];

if (localStorage.getItem("users") == null) {
    arraySignUp = [];
} else {
    arraySignUp = JSON.parse(localStorage.getItem("users"));
}

function isEmpty() {
    if (signName.value == "" || signEmail.value == "" || signPassord.value == "") {
        return true; 
    } else {
        return false; 
    }
}

function isEmailExist() {
    for (var i = 0; i < arraySignUp.length; i++) {
        if (arraySignUp[i].email.toLowerCase() == signEmail.value.toLowerCase()) {
            return true; 
        }
    }
    return false; 
}

function handleSignUp() {
    if (isEmpty()) {
        document.getElementById("required").innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }

    if (isEmailExist()) {
        document.getElementById("required").innerHTML = '<span class="text-danger m-3">Email already exists</span>';
        return false;
    }

    
    var signUp = {
        name: signName.value,
        email: signEmail.value,
        password: signPassord.value,
    };

    arraySignUp.push(signUp);
    localStorage.setItem("users", JSON.stringify(arraySignUp));

    document.getElementById("required").innerHTML = '<span class="text-success m-3">Success</span>';
    return true;
}
