//Task 1
let student = {
    name: "Kai Nabea",
    age: 27,
    grade: "Freshman",
    school: "Humber College"
}
student.greet = function () {
    return "Hey " + this.name + ", how's it goin?"
}
console.log(student.name)
console.log(student.age)
console.log(student.grade)
console.log(student.school)
console.log(student.greet())
student.age = 28
console.log(student.age)

//Task 2
let jsonString = `{
    "title": "The Final Empire",
    "author": "Brandon Sanderson",
    "year": 2006,
    "genre": "Fantasy"
}`
let jsonObject = JSON.parse(jsonString)
console.log(jsonObject.title)
console.log(jsonObject.author)
console.log(jsonObject.year)
console.log(jsonObject.genre)
let stringification = JSON.stringify(jsonObject)
console.log(stringification)

//Task3
let array1 = [1, 2, 3]
let array2 = [4, 5, 6]
let combinedArray = [...array1, ...array2]
console.log(combinedArray)
let person1 = {
    firstName: "Philip",
    lastName: "DeFranco",
    age: 28
}
console.log(person1)
let person2 = {
    ...person1,
    age: 38
}
console.log(person2)

//Task4
let calculations = {
    addition: function (a, b) {
        return a + b
    },
    subtraction: function (c, d) {
        return c - d
    },
    multiplication: function (e, f) {
        return e * f
    },
    division: function (g, h) {
        return g / h
    }
}
console.log(calculations.addition(1, 2))
console.log(calculations.subtraction(9, 4))
console.log(calculations.multiplication(14, 6))
console.log(calculations.division(144, 3))