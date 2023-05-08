let userName = "Ronald Harsh";
let phoneNumber = "123-456-7890";

/*
console.log(userName.length);
console.log(userName.charAt(1));
console.log(userName.indexOf("o"));
console.log(userName.lastIndexOf("a"));
*/
userName = userName.toLowerCase();
phoneNumber = phoneNumber.replaceAll("-", "");

console.log(phoneNumber);