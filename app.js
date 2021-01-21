const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});


// // For eye icon in password
// var inputFormat = document.getElementById('password'),
// icon = document.getElementById('togglePassword');

// icon.onclick = function () {
// // inputFormat.getAttribute("type") === "text"
//     if(inputFormat.getAttribute("type") === "text") {
//         inputFormat.setAttribute('type', 'password');
//         icon.className = 'fa fa-eye';
//         // inputPass2.className = '';

//     } else {
//         inputFormat.setAttribute('type', 'text');
//         icon.className = 'fa fa-eye-slash';
//         // inputPass2.className = 'active';
//     }

// }
var inputFormat = document.getElementById('password'),
icon = document.getElementById('togglePassword');

function change() {
// inputFormat.getAttribute("type") === "text"
    if(inputFormat.getAttribute("type") === "text") {
        inputFormat.setAttribute('type', 'password');
        icon.className = 'fa fa-eye';
        // inputPass2.className = '';

    } else {
        inputFormat.setAttribute('type', 'text');
        icon.className = 'fa fa-eye-slash';
        // inputPass2.className = 'active';
    }

}

var inputFormatSignUp = document.getElementById('toPassword'),
iconSignUp = document.getElementById('toTogglePassword');

function toChangeSignUp() {
// inputFormat.getAttribute("type") === "text"
    if(inputFormatSignUp.getAttribute("type") === "text") {
        inputFormatSignUp.setAttribute('type', 'password');
        iconSignUp.className = 'fa fa-eye';
        // inputPass2.className = '';

    } else {
        inputFormatSignUp.setAttribute('type', 'text');
        iconSignUp.className = 'fa fa-eye-slash';
        // inputPass2.className = 'active';
    }

}

var inputFormatSignUpConfirm = document.getElementById('toPasswordConfirm'),
iconSignUpConfirm = document.getElementById('toTogglePasswordConfirm');

function toChangeSignUpConfirm() {
// inputFormat.getAttribute("type") === "text"
    if(inputFormatSignUpConfirm.getAttribute("type") === "text") {
        inputFormatSignUpConfirm.setAttribute('type', 'password');
        iconSignUpConfirm.className = 'fa fa-eye';
        // inputPass2.className = '';

    } else {
        inputFormatSignUpConfirm.setAttribute('type', 'text');
        iconSignUpConfirm.className = 'fa fa-eye-slash';
        // inputPass2.className = 'active';
    }

}