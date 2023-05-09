let symbol = window.prompt("Enter a symbol");
let rows = window.prompt("Enter number of rows");
let cols = window.prompt("Enter number of cols");

for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
        document.getElementById("myRectangle").innerHTML += symbol;
    }
    document.getElementById("myRectangle").innerHTML += "<br>";
}