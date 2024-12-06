const info = require('./CommonJS/Lab5Task1.cjs')
console.log(info)

//const lodash = require('lodash')
//import lodash from 'lodash'

const fs = require('fs')
fs.readFile('CommonJS/labexample.txt', "utf8", (err, data) => {
    if (err) {
        console.error("Error reading file:", err);
        return;
    } console.log("File content:", data);
});
const bonjour = require('./CommonJS/Lab5Task3.cjs')
const colors = require('colors')
console.log('Hello,'.red, 'my'.blue, 'name'.green, 'is'.yellow, 'Kai.'.magenta)

import assert from 'assert'
let salePrice = 30.00
let payment = 25.00
let discountPrice = 24.00
try {
    assert(payment >= salePrice)
    console.log("Thank you, your payment has gone through.")
} catch {
    console.log("I'm sorry but you have insufficient funds.")
}
try {
    assert(payment >= discountPrice)
    console.log("Thank you, your payment has gone through.")
} catch {
    console.log("I'm sorry but you have insufficient funds.")
}
import { fullSum } from './ES Module/Lab5Task4.mjs'
console.log(fullSum(4, 6))
console.log(fullSum(3, 9))
console.log(fullSum(39, 97))
import { program } from 'commander'
program
    .option('--first')
    .option('-s, --separator <char>')
program.parse()
const options = program.opts()
const limit = options.first ? 1 : undefined
console.log(program.args[0].split(options.separator, limit))
import('./Lab5Async.js')