export function diceRoll() {
    return Math.floor(Math.random()*20)+1
}
export function total() {
    let damageTaken = 0
    for (let d = 0; d < arguments.length; d++) {
        damageTaken += arguments[d];
    }
    return damageTaken
}