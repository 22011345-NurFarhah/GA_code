/*
I declare that this code was written by me. 
 I will not copy or allow others to copy my code. 
 I understand that copying code is considered as plagiarism.
 
 Student Name: Nur Farhah Binte Mohamed Najeeb Mattar
 Student ID: 22011345
 Class: C369-3D-E63C-A
 Date/Time Last modified: 5 August 2023 12:54 pm */
//Pay for the transaction

function processPayment() {
var paymentMethod = document.querySelector('input[name="pay"]:checked');

if (!paymentMethod) {
alert("Please select a payment method.");
return;
}

paymentMethod = paymentMethod.value;

if (paymentMethod === "card") {
var cardNumber = document.getElementById("cardNumber").value;
var cardholderName = document.getElementById("name").value;
var expiryDate = document.getElementById("expiryDate").value;
var cvc = document.getElementById("cvc").value;

if (cardNumber !== "" && cardholderName !== "" && expiryDate !== "" && cvc !== "") {
alert("Payment Successful");
location.href = "ConfirmPayment.html";
} else {
alert("Please fill in ALL of your card information.");
}
} else if (paymentMethod === "paypal") {
location.href = "paypal.html";
}
}