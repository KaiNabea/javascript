function sum1(num1, num2) {
    return num1 + num2;
}
let sum2 = function (num1, num2) {
    return num1 * num2;
}
let sum3 = (num1, num2) => {
    return num1 - num2;
}
let result1 = sum1(9, 13);
console.log(result1)
let result2 = sum2(14, 6)
console.log(result2)
let result3 = sum3(42, 17)
console.log(result3)

function sum4(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum4(5, 18, -9))
function interaction(name = 'Anonymous') {
    return `${name}`;
}
console.log(interaction('Good morning!'));
console.log(interaction());
function totalSum() {
    let sum5 = 0;
    for (let s = 0; s < arguments.length; s++) {
        sum5 += arguments[s];
    }
    return sum5
}
console.log(totalSum(13, 37, 54, -29, -6))

function createCeleb(name, age) {
    return {
        name: name,
        age: age
    };
}
let celeb = createCeleb(`Prince`, 66);
console.log(celeb);
function nums(even) {
    if (even % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
let checkNums1 = nums(22);
console.log(checkNums1);
let checkNums2 = nums(13);
console.log(checkNums2);
function iDunno() {
}
let question = iDunno();
console.log(question);

function gandalfTheWhite() {
    let famousQuote = `Fly, you fools!`;
    function gandalfTheBlack() {
        console.log(famousQuote);
    } return gandalfTheBlack;
}
let theBalrog = gandalfTheWhite();
theBalrog();
function createCounter() {
    let count = 13;
    return {
        increment() {
            count++;
            return count;
        },
        decrement() {
            count--;
            return count;
        },
    };
}
let counter = createCounter();
console.log(counter.increment());
console.log(counter.decrement());