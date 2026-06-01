

const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const subResult = document.getElementById("subResult");
const paymentResult = document.getElementById("paymentResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You're Subscribed`;
    }
    else{
        subResult.textContent = `You're NOT Subscribed`;
    }

    if (visaBtn.checked){
        paymentResult.textContent = `You're paying with Visa`;
    }
    else if (masterBtn.checked) {
        paymentResult.textContent = `You're paying with MasterCard`;
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `You're paying with Paypal`;
    }
    else{
        paymentResult.textContent = `Please select a payment option!`;   
    }
}