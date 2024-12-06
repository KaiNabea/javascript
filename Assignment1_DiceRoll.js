//have all the modules at the top so that they don't clog up the code
import fs from 'fs'
import {diceRoll, total} from './diceRollerModule.js'
fs.readFile('Dungeons&DragonsSessionSummary.txt', 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading file:", err)
        return
    } console.log("File content:", data)
})

//starting out simple with the syntax, dropped const and var pretty quick after this though
const user = "Kai"
console.log("It's time to roll, " + user + ".")
//using the function for dicerolling here. 
let result1 = diceRoll()
let result2 = diceRoll()
console.log(user + " rolled a " + result1 + ". Let's roll again.")
console.log(user + " rolled a " + result2 + ". We'll add them together now.")
var sum = result1 + result2
console.log(user + " gets to move " + sum + " spaces.")
//getting started with arrays. keep it simple at first
let name = "Crow"
let role = "Rogue"
let level = 4
let character = [name, role, level, user]
let enemy = ["Troll", "Berserker", 6]
//utilising array methods pop and push. they are the easiest to understand
let maxHP = 45
character.pop(user)
character.push(maxHP)
//iterating over the arrays
character.forEach((value, index) => {
    console.log(`${index}: ${value}`)
})
let data = enemy.entries()
for (let entry of data)
    console.log(entry)
//continuing with the functions to calculate damage taken
let damage = total(5, 8, 4, 13)
let currentHP = maxHP - damage
//altering the character array to reflect current HP
character.pop()
character.push(currentHP)
//Just finishing up this session.
console.log("Despite the close call, " + 
    name + " was able to defeat the enemy and raised their level to " + (level + 1) + ".")