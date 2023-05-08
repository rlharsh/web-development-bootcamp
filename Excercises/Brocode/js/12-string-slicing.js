let fullName = "ronald harsh";
let firstName, lastName;

firstName = fullName.slice(0, fullName.indexOf(" ")).trim();
lastName = fullName.slice(fullName.indexOf(" ")).trim();

firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

console.log(firstName);
console.log(lastName);