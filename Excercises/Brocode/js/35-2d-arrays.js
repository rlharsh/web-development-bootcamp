let fruit = ["apples", "oranges", "bananas"];
let vegtables = ["carrots", "onions", "potatoes"];
let meats = ["eggs", "chicken", "fish"];

let groceryList = [fruit, vegtables, meats];

groceryList[0][2] = "mangoes";
groceryList[2][2] = "steak";

for (let list of groceryList) {
    for(let food of list) {
        console.log(food);
    }
}