var userName = "Kiisha Nabea";
let userAge = 29;
const userID = "n01722652";

userName = "Kai Nabea";
userAge = 28;
//userID = n01234567 doesn't work

console.log(userName)
console.log(userAge)
console.log(userID)

let score = 95.5;
let courseName = "Javascript Basics";
let isEnrolled = true;
let grades = [90, 95, 88, 92]
let student = {userName, userAge, "CPAN": "113"}

console.log(28 + 95.5); // Addition
console.log(28 - 95.5); // Subtraction
console.log(28 * 2) // Multiplication
console.log(95.5 / 28) // Division

console.log(userAge == 29); // Equality
console.log(userAge === 29); // strict Equality
console.log(score >= 94); // greater than or equal to
console.log(score < 98); // less than
console.log(isEnrolled); // True or False?

if (userAge > 18) {
    confirm = true;
} else {
    confirm = false;
}
switch(courseName) {
    case 0:
        console.log("Javascript Basics");
        break;
    case 1:
        console.log("Fundamentals of Javascript");
        break;
    case 2:
        console.log("Intro to Javascript");
}