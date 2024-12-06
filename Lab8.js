//Task 1
let button = document.getElementById('clickButton')
button.addEventListener('click', function() {
    button.textContent = "Clicked!"
})

//Task 2
let mouseHover = document.getElementById('hoverMouse')
mouseHover.addEventListener('mouseenter', function() {
    this.style.background = 'gray'
})
mouseHover.addEventListener('mouseleave', function() {
    this.style.background = 'transparent'
})

//Task 3
document.addEventListener('keyup', function() {
    console.log(`Key released: ${event.key}`)
})

//Task 4
document.addEventListener('DOMContentLoaded', function() {
    let form = document.getElementById('form')
    let fullName = document.getElementById('fullName')
})
form.addEventListener('submit', function(event) {
    console.log("Form submitted.")
    event.preventDefault()
    console.log(`Name: ${fullName.value}`)
})

//Task 5
function focusing() {
    document.getElementById('focusBlur').style.outlineColor = "red"
}
function blurring() {
    document.getElementById('focusBlur').style.outlineColor = "black"
}

//Task 6
let list = document.getElementById('itemList')
list.addEventListener('click', function() {
    if (event.target.tagName === 'LI') {
        event.target.style.backgroundColor = 'lightskyblue'
    }
})