let colours = new Array("red", "blue", "green")
let sizes = ["small", "medium", "large", "x-large", "xx-large"]
let numbers = Array.of(8, 12, 33)

colours.push("yellow")
sizes.pop()
console.log(numbers[1])

let filterNumbers = numbers.filter(numbers => numbers >= 10)
console.log(filterNumbers)
let squareNumbers = numbers.map(numbers => numbers ** 2)
console.log(squareNumbers)
colours.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

for (const number of numbers) {
    console.log(number)
}
for (let s = 0; s < sizes.length; s++) {
    console.log(sizes[s])
}
let iterator = colours.entries();
for (let entry of iterator) {
    console.log(entry)
}