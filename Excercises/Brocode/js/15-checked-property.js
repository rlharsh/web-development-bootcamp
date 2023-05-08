document.getElementById("myButton").onclick = function() {
    
    const visaBtn = document.getElementById("visaBtn");
    const mastercardBtn = document.getElementById("mastercardBtn");
    const paypalBtn = document.getElementById("paypalBtn");

    if (visaBtn.checked) {
        console.log("You selected Visa!");
    } else if (mastercardBtn.checked) {
        console.log("You selected Master Card!");
    } else if (paypalBtn.checked) {
        console.log("You selected PayPal!");
    } else {
        console.log("You must select a payment type!");
    }

    /*
    const myCheckBox = document.getElementById("myCheckbox");
    if (myCheckBox.checked) {
        console.log("You are subscribed!");
    } else {
        console.log("You are not subscribed!");
    }
    */

}