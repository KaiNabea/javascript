let x = 3, y = -2, z = 0;
if (x > 0) {
    console.log("This number is positive.");
} else if (x == 0) {
    console.log("This number is zero.");
} else {
    console.log("This number is negative.");
}
if (y > 0) {
    console.log("This number is positive.")
} else if (y == 0) {
    console.log("This number is zero.")
} else {
    console.log("This number is negative.")
}
if (z > 0) {
    console.log("This number is positive.")
} else if (z == 0) {
    console.log("This number is zero.")
} else {
    console.log("This number is negative.")
}
grade = "C"
switch (grade) {
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Great");
        break;
    case "C":
        console.log("Adequate");
        break;
    case "D":
        console.log("Pass");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Ungraded");
}

let number1 = 1
while (number1 < 11) {
    console.log("I see " + number1 + " deer.");
    number1++;
}
let multiplier = 1, number2 = 5 * multiplier
do {
    console.log("5 times " + multiplier + " is " + number2 + ".");
    multiplier++;
    number2 = 5 * multiplier
} while (multiplier < 4);
let colours = ["red", "blue", "green", "yellow"]
for (let c = 0; c < colours.length; c++) {
    console.log(colours[c]);
}

let person = {firstName: "Kai", lastName: "Nabea", age: 28};
for (let key in person) {
        console.log(key, person[key]);
    }
let grades = [75, 81, 88, 92, 85];
    for (let list of grades) {
        console.log(list)
    }

for (let a = 1; a < 10; a++) {
    if (a === 5) {
        break
    }
    console.log(a)
}
let numbersArray = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
for (let n = 0; n < numbersArray.length; n++) {
    if (numbersArray[n] % 2 === 1) {
        continue
    }
    console.log("Even multiples of 3 are " + numbersArray[n] + ".");
}