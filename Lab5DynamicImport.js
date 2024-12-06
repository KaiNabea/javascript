function lowArray() {
    let values = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
    for (let v = 0; v < values.length; v++) {
        if (values[v] > 40) {
            break
        }
        console.log(values[v] + " is under 40.")
    }
}
export let lowerValues = lowArray(0)
function highArray() {
    let values = [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
    for (let v = 0; v < values.length; v++) {
        if (values[v] < 40) {
            continue
        }
        console.log(values[v] + " is over 40.")
    }
}
export let higherValues = highArray(0)