let fruits = ["apple", "orange", "banana"];
fruits[0] = "coconut";
fruits.push("lemon");   // add to the end
fruits.pop();        // remove from the end
fruits.unshift("grapes"); // add to the beginning
fruits.shift();     // remove from the beginning    
let length = fruits.length; // length of the array
let index = fruits.indexOf("orange"); // index of the element
let lastIndex = fruits.lastIndexOf("orange"); // last index of the element
console.log(index);