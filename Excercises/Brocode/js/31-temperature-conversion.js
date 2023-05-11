document.getElementById("submitButton").onclick = function() {
    let temp = parseFloat(document.getElementById("textBox").value);
    if (!Number.isInteger(temp)) {
        alert("Please enter a number.");
        return;
    }

    if (document.getElementById("cButton").checked) {
        document.getElementById("tempLabel").innerHTML = toCelsius(Number(temp)).toLocaleString(undefined, {style: 'unit', unit: 'celsius'});
    } else if (document.getElementById("fButton").checked) {
        document.getElementById("tempLabel").innerHTML = toFahrenheit(Number(temp)).toLocaleString(undefined, {style: 'unit', unit: 'fahrenheit'});
    } else {    
        document.getElementById("tempLabel").innerHTML = "Please select a temperature scale.";
    }
}

function toCelsius(temp) {
    return (temp - 32) * (5/9);
}

function toFahrenheit(temp) {
    return temp * 9 / 5 + 32;
}