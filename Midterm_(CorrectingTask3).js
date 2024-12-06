//Task 1
let numbers = [53, 7, 90, 104, 12]
let max = numbers[0];
for (let i = 1; i < numbers.length; i++) { //looking for the highest value
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
console.log(max);
let min = numbers[0];
for (let i = 1; i < numbers.length; i++) { //looking for the lowest value
    if (numbers[i] < min) {
        min = numbers[i];
    }
}
console.log(min);
//let [value1, value2, value3, value4, value5] = numbers //destructuring array
//let sum = value1 + value2 + value3 + value4 + value5 //creating sum from new variables
function sum() { //Early to introduce functions but probably the simplest way to calculate the sum of the array.
    return numbers.reduce((total, num) => total + num, 0)
}
console.log(sum())

//Task 2
let integer = 43
if (integer > 0) { //will check to determine if the number is positive, negative or zero
    console.log(integer + " is a positive number.")
} else if (integer == 0) {
    console.log(integer + " is equal to zero.")
} else {
    console.log(integer + " is a negative number.")
}

//Task 3
function addition(firstValue, secondValue) { //create the function to add the numbers together.
    return firstValue + secondValue;
}
console.log(addition(31, 26))
let message = "Midterms were hard... I can't wait for finals! (sob)"
console.log(message)
function raise(string) { //you just needed to add a parameter to the function, Dummy!
    return string.toUpperCase()
}
console.log(raise(message))

//Task 4
let fruits = ["apples", "bananas", "oranges", "mangoes", "peaches"]
console.log(fruits)
fruits.push("cantaloupes") //add a new fruit at the end
console.log(fruits)
let newFruits = fruits.slice(1) //create a new array while excluding the first result
console.log(newFruits)