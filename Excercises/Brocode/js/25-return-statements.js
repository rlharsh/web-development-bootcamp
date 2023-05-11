let area;
let width;
let height;

width = window.prompt("Enter the width of the rectangle");
height = window.prompt("Enter the height of the rectangle");
area = getArea(width, height);

console.log("The area is: ", area);

function getArea(width, height) {
    return width * height;
}