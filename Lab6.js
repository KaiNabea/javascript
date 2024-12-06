import assert from 'assert'

console.log("Running operations 1 and 2.")
setTimeout(function () {
    let op1 = 5
    let op2 = -5
    let promise1 = new Promise ((resolve, reject) => {
        if (op1 > 0) {
            resolve("Operation 1 successful.")
        } else {
            reject("Operation 1 failed.")
        }
    })
    let promise2 = new Promise ((resolve, reject) => {
        if (op2 > 0) {
            resolve("Operation 2 successful.")
        } else {
            reject("Operation 2 failed.")
        }
    })
    promise1.then(results => {
        console.log(results)
    }).catch(error => {
        console.error("Error:", error)
    })
    promise2.then(results => {
        console.log(results)
    }).catch(error => {
        console.error("Error:", error)
    })
}, 2000)

let mathing = new Promise ((resolve, reject) => {
    resolve(1);
});
mathing.then(result => {
    console.log(result)
    return result * 2
}).then(result => {
    console.log(result)
    return result + 3
}).then(result => {
    console.log(result)
    return result / 2
}).then(result => {
    console.log(result)
})

let randomizer = new Promise ((resolve, reject) => {
    if (Math.random() > 0.5) {
        resolve("We have a value.")
    } else {
        reject("The variable x is undefined.")
    }
})
randomizer.then(result => {
    console.log(result)
}).catch(error => {
    console.log(error)
})

function sleep (night) {
    return new Promise(resolve => setTimeout(resolve, night))
}
async function bedtime () {
    await sleep (4100)
    console.log ("Snore...")
}
bedtime ()
function grading(g){
    return new Promise(resolve => setTimeout(resolve, g))
}
async function test () {
    console.log("Your test is being graded.")
    await grading (4100)
    let outOf = 10
    let passing = outOf/2
    try {
        let score = Math.floor(Math.random() * 11)
        assert(score > passing)
        console.log("Congrats, you passed!")
    } catch {
        console.error("You've unfortunately failed.")
    }
}
test ()