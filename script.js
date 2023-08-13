/*
I declare that this code was written by me. 
 I will not copy or allow others to copy my code. 
 I understand that copying code is considered as plagiarism.
 
 Student Name: Nur Farhah Binte Mohamed Najeeb Mattar
 Student ID: 22011345
 Class: C369-3D-E63C-A
 Date/Time Last modified: 13 August 2023 9:09pm
*/
//Login - hardcode
function Login() {
    if (document.getElementById("Username").value == "NurFarhah"
        && document.getElementById("Password").value == "12345678901234"
        && document.getElementById("otp").value == "3242") {
        alert("Login successful");
        location.href = "loginInfo1.html";
    }
    else if (document.getElementById("Username").value == "AliceTeo"
        && document.getElementById("Password").value == "Alice0123456"
        && document.getElementById("otp").value == "1342") {
        alert("Login successful");
        location.href = "loginInfo2.html";
    }
    else if (document.getElementById("Username").value == "" && document.getElementById("Password").value == "" && document.getElementById("otp").value == "") {
        alert("All input is missing");
    }
    else if (document.getElementById("Username").value == "" && document.getElementById("Password").value == "") {
        alert("Username and Password is incomplete");
    }
    else if (document.getElementById("Username").value == "" && document.getElementById("otp").value == "") {
        alert("Username and OTP is incomplete");
    }
    else if (document.getElementById("Password").value == "" && document.getElementById("otp").value == "") {
        alert("Password and OTP is incomplete");
    } else if (document.getElementById("Password").value == "") {
        alert("Password is incomplete");
    } else if (document.getElementById("Username").value == "") {
        alert("Username is incomplete");
    } else if (document.getElementById("otp").value == "") {
        alert("OTP is incomplete");
    } else {
        alert("Invalid UserActivation, Please refresh the page")
    }
}
// verify OTP
function verification() {
    if (document.getElementById("otp").value == "3242" || document.getElementById("otp").value == "1342") {
        alert("OTP Verified");
        alert("Click on the Login Account button");
    } else {
        alert("OTP is incomplete");
    }
}
function loginSingpass() {
    alert("Login using Singpass successful");
    location.href = "loginInfo1.html";
}

//Sign up
function Submit() {
    if (document.getElementById("name").value != "" //Alice Teo
        && document.getElementById("date").value != "" //23/08/1998
        && document.getElementById("country").value != "" //Singapore
        && document.getElementById("phoneNumber").value != "" //88112233
        && document.getElementById("email").value != "" //alice@gmail.com
        && document.getElementById("occupation").value != "" //Software Developer
        && document.getElementById("company").value != "" // One X Tech
        && document.getElementById("income").value != "") { //20 100
        alert("Sign Up successful");
        location.href = "CreateAccount.html";
    } else {
        alert("Error, Please Refresh");
    }
}
function SubmitSingPass() {
    alert("Sign Up successful");
    location.href = "CreateAccount.html";
}

//Create
function Create() {
    if (document.getElementById("Username").value != "" && document.getElementById("Password").value != "") { //AliceTeo //Alice0123456
        alert("Account created successfully");
        location.href = "Login.html";
    } else {
        alert("Create Account unsuccessful. Please fill in all the required fields.");
    }
}

//Apply Transaction
function Apply() {
    if (
        document.getElementById("Service").value == "" &&
        document.getElementById("timeline").value == "" &&
        document.getElementById("date").value == ""
    ) {
        alert("Please fill up all of your information");
    } else if (document.getElementById("Advisory").value == "") {
        alert("If you have no preferred advisor, please put 'NIL'");
    }
    else {
        alert("Transaction Successful");
        location.href = "BookingConfirmation.html";
    }
}