//Flight Scheduling
console.log("Flight Scheduling")
/*
The following program follows a typical day at an airport, collecting the information for a passenger taking
a flight from Toronto to Vancouver. It uses objects to store important information about the flight the
passenger will be taking, API's to  retrieve data about the flights, async to time when a plane lands and
when customers are directed to their gate and classes to utilise methods regarding situations like boarding
and final passenger calls. A basic HTML file is used for the front-end of this Javascript file and a secondary
Javascript file handles a second API call to prevent internal interference from two API calls in the same page.
When testing the program in the console, comment out all the code that relates to the HTML page.
*/

//HTML & CSS (& Events)
//retrieve information on the html file with id and using event listener to alter page when a button's clicked
document.getElementById('container').addEventListener('click', function () {
    let swap = document.getElementById('gradient')
    let gradient = 'linear-gradient(90deg, #082901, #8efa46)'
    swap.style.background = gradient
})
document.getElementById('container').addEventListener('click', function () {
    let changeText = document.getElementById('container')
    changeText.textContent = "Gate Ready"
})

//Objects, JSON & Spread Operator
//create a JSON string
let JSONperson = `{
    "firstName": "Kai",
    "lastName": "Nabea",
    "age": 28, 
    "passportNo": "AB123456", 
    "nationality": "Canadian" 
}`
//convert it into an object
let person = JSON.parse(JSONperson)
console.log(person)
//copy object into new object and modify the new object
passenger = {
    ...person,
    seatNo: "35f"
}
console.log(passenger)
//turn the newly created object back into a string
let stringifyPassenger = JSON.stringify(passenger)
console.log(stringifyPassenger)
//rinse and repeat
let JSONplane = `{
    "airline": "Air Canada", 
    "flightNo": 101, 
    "gateNo": "D24",  
    "departingAirport": "Lester B. Pearson International Airport",
    "departureTime": "6:30"
}`
let plane = JSON.parse(JSONplane)
console.log(plane)
let flight = {
    ...plane,
    destinationAirport: "Vancouver International Airport",
    arrivalTime: "8:30"
}
console.log(flight)
let stringifyFlight = JSON.stringify(flight)
console.log(stringifyFlight)

//Async
//Create the function that will be used in the async, promise will result in a delay
function blink(flicker) {
    return new Promise(resolve => setTimeout(resolve, flicker))
}
//Use async to set a timer on when the gate will be displayed.
async function displayGate() {
    //using the dot notation method to retrieve information on objects earlier in the program
    console.log("Passengers heading to Vancouver on " + flight.airline + " " + flight.flightNo + ", please wait. " +
        "Your gate will be displayed shortly.")
    await blink(1500)
    console.log("All passengers on route to Vancouver on " + flight.airline + " " + flight.flightNo +
        ", please proceed to Gate " + flight.gateNo + ".")
}
function touchdown(seatbelts) {
    return new Promise(resolve => setTimeout(resolve, seatbelts))
}
async function flightLanding() {
    console.log("Good afternoon all passengers, we are about to arrive in Toronto. " +
        "Crew, please prepare for landing.")
    await touchdown(1500)
    //New passengers will be heading to the gate as the plane prepares to land.
    console.log("Welcome to Toronto. We hope you enjoyed your flight, thanks for flying " + flight.airline + ". " +
        "We hope to see you again soon.")
}
//printing the async functions to console
displayGate()
flightLanding()

//API-1 (& Events)
//Use the fetch method in order to retrieve data from the AviationStack API
document.getElementById('loadData2').addEventListener('click', function () {
    fetch('https://api.aviationstack.com/v1/flights?access_key=4e685fb39ead7' + 
        'b0b804d5df8cf4ea968&flight_icao=ACA101&limit=1')
        .then(response => {
            //error handling the fetch request
            if (!response.ok) {
                throw new Error('Network not responding.')
            }
            //otherwise retrieve JSON successfully
            return response.json()
        })
        //getting the data to display
        .then(data2 => {
            console.log(data2)
            displayData(data2, 'outputTable2')
        })
        //error handling the data specifically
        .catch(error => console.error('Error fetching data:', error))
})
//Making a function for the data retrieved to be displayed.
function displayData(data2, table2) {
    const table2Body = document.getElementById(table2).getElementsByTagName('tbody')[0]
    table2Body.innerHTML = '';
    data2.data.forEach(flights => {
        //Adds new row
        const row = document.createElement('tr')
        //Adds new cell in the created row which will contain data specific to the attribute listed in the JSON
        const cellFlightCode = document.createElement('td')
        cellFlightCode.textContent = flights.flight.iata
        const cellLeaving = document.createElement('td')
        cellLeaving.textContent = flights.departure.airport
        const cellLeavingCode = document.createElement('td')
        cellLeavingCode.textContent = flights.departure.iata
        const cellArriving = document.createElement('td')
        cellArriving.textContent = flights.arrival.airport
        const cellArrivingCode = document.createElement('td')
        cellArrivingCode.textContent = flights.arrival.iata
        const cellLeaveTime = document.createElement('td')
        cellLeaveTime.textContent = flights.departure.scheduled
        const cellArriveTime = document.createElement('td')
        cellArriveTime.textContent = flights.arrival.scheduled
        //appending to make sure the data and row are added to the table and doesn't replace what's already there
        row.appendChild(cellFlightCode)
        row.appendChild(cellLeaving)
        row.appendChild(cellLeavingCode)
        row.appendChild(cellArriving)
        row.appendChild(cellArrivingCode)
        row.appendChild(cellLeaveTime)
        row.appendChild(cellArriveTime)
        table2Body.appendChild(row)
    })
}

//Classes
//Creating a class that will determine the order passengers will board the plane
class BoardingCall {
    //make a constructor
    BoardingCall() { }
    //creating a return method for when certain groups of passengers are called to board
    displayMessage(announcement) {
        let message;
        switch (announcement) {
            case "Zone A":
                message = "We are now boarding passengers in business class, families " +
                    "with young children and those who may need extra assistance."
                break;
            case "Zone B":
                message = "We are now boarding passengers in the Economy Plus class."
                break;
            case "Zone C":
                message = "We are now boarding all remaining passengers."
                break;
            default:
                message = "This is the final boarding call for passengers on flight " +
                    flight.airline + " " + flight.flightNo + ". This is your final boarding call."
                break;
        }
        return message
    }
}
let a = "Zone A"; let b = "Zone B"; let c = "Zone C";
//creating an object from the BoardingCall class and creating variables by instantiating methods with said object
let boardingCall = new BoardingCall()
let firstCall = boardingCall.displayMessage("Zone A")
let secondCall = boardingCall.displayMessage("Zone B")
let thirdCall = boardingCall.displayMessage("Zone C")
let finalCall = boardingCall.displayMessage()
//me just running with the airport theme
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (flight.destination == "Vancouver International Airport, Concourse C") {
            resolve("All passengers on flight " + flight.airline + " " + flight.flightNo + ", please prepare for boarding.")
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 4000)
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (a == "Zone A") {
            resolve(firstCall)
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 6000)
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (b == "Zone B") {
            resolve(secondCall)
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 8000)
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (c == "Zone C") {
            resolve(thirdCall)
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 10000)
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (c == "Final Call") {
            resolve(thirdCall)
        } else {
            reject(finalCall)
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    }).catch(error => {
        console.log(error)
    })
}, 12000)
//new class inheriting the former class
class PassengerCall extends BoardingCall {
    PassengerCall() { }
    //modifying the method for the new class
    displayMessage(announcement) {
        announcement = "Could " + passenger.firstName + " " + passenger.lastName + " please proceed to gate " +
            flight.gateNo + ". Your gate will be closing shortly."
        return announcement
    }
}
//rinse, repeat
let lateComer = new PassengerCall()
let delay = lateComer.displayMessage("Last Call")
setTimeout(function () {
    let promise = new Promise((resolve, reject) => {
        if (passenger.firstName == "Kai") {
            resolve(delay)
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 18000)
setTimeout(function () {
    let x = 3, y = (Math.floor(Math.random() * 10) + 1)
    let promise = new Promise((resolve, reject) => {
        if (x < y) {
            resolve("You made it just in time.")
        } else {
            reject("I'm sorry but the gate just closed.")
        }
    })
    promise.then(checkIn => {
        console.log(checkIn)
    }).catch(inform => {
        console.log(inform)
    })
}, 22000)
setTimeout(function () {
    let captain = 5
    let promise = new Promise((resolve, reject) => {
        if (captain > 0) {
            resolve("Good morning passengers, this is your Captain speaking. The time is " + flight.departureTime +
                " and we are preparing for take off. The in-flight presentation will be commencing shortly. In " +
                "the meantime, please remain in your seats, fasten your seatbelts and we hope you have a " +
                "wonderful flight.")
        }
    })
    promise.then(speaker => {
        console.log(speaker)
    })
}, 26000)