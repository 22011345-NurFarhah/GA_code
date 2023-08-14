/*
I declare that this code was written by me. 
 I will not copy or allow others to copy my code. 
 I understand that copying code is considered as plagiarism.
 
 Student Name: Nur Farhah Binte Mohamed Najeeb Mattar
 Student ID: 22011345
 Class: C369-3D-E63C-A
 Date/Time Last modified: 13 August 2023 12:54 pm */
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

        const cardNumberMatch = "[345][0-5][0-9]{2}-[0-9]{4}-[0-9]{4}-[0-9]*";
        const cvcMatch = "[0-9]{3}";
        if (cardNumber.match(cardNumberMatch) && cardholderName != "" && expiryDate != "" && cvc.match(cvcMatch)) {
            alert("Payment Successful");
            location.href = "ConfirmPayment.html";
        } else if (!cardNumber.match(cardNumberMatch) && cardholderName == "" && expiryDate == "" && !cvc.match(cvcMatch)) {
            alert("Please fill in ALL your information before submitting");
        } else if (!cardNumber.match(cardNumberMatch)) {
            alert("Please match the format for cardNumber");
            alert("Please start your card number with the digit: 3/4/5")
        } else if (cardholderName == "") {
            alert("Please fill in your name.");
        } else if (expiryDate == "") {
            alert("Please fill in your card expiry date.");
        } else if (!cvc.match(cvcMatch)) {
            alert("Please match the format for CVC");
            alert("Please use number digits only.")
        }
    }
    //  } else if (paymentMethod === "paymentPayPal") {
    //   location.href = "ConfirmPayment.html";
}
function checkCard() {
    if (document.getElementById('Creditcard').checked) {
        document.getElementById('card').style.visibility = 'visible';
        document.getElementById('paypal-button-container').innerHTML = '';
    }
    else if (document.getElementById('paymentPayPal').checked) {
        document.getElementById('card').style.visibility = 'hidden';
        document.getElementById('paypal-button-container').innerHTML = '';
        paypal.Buttons({
            style: {
                layoutc: 'horizontal',
                color: 'black',
                shape: 'rect',
                label: 'pay',
            },
            onApprove: function (data, actions) {
                window.location.href = "ConfirmPayment.html";
            }
        }).render('#paypal-button-container');
    }
}
