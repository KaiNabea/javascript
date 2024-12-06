//Task 1
/*
An API, also known as an Application Programming Interface, can send and share data between two software
applications. This provides many options for web developers who can implement the APIs for a multitude
of uses and features that require a level of complexity otherwise too difficult for regular programs.
Greater efficiency, program integration and increasing scale are all capable thanks to APIs.

Should a person run in tech issues at home, like a downed internet connection, they would likely call their
internet provider's tech support. The person answering the phone may not be the technician sent to deal with
the current problem but they will take the information of the current situation and schedule an expert to make
a house call in order to help fix the problem. The customer service agent on the phone acts like an API between
the customer dealing with no internet and the technician who will need to know the details in order to make any
fixes.
*/

//Task 2
/*
Communicating through APIs requires using HTTP methods, which is a variation of the CRUD method (create, 
retrieve, update and delete). The HTTP methods are GET, POST, PUT and DELETE. POST creates a new resource for
HTTP to interact with, GET retrieves requested information from said resource, PUT requests an update to any
information in a resource (or creates a new resource if what's being requested doesn't exist) and DELETE requests
the removal of information from a resource.

GET: Typing a url into a browser will direct you and display the webpage requested.
POST: Creating a new email address will give you access to an email server with your user info.
PUT: Updating personal information for your YouTube profile, changing the display name and user icon.
DELETE: Deleting your user profile from a dating website.
*/

//Task 3
document.getElementById('loadData1').addEventListener('click', function() {
    fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9')
        .then(response => {
            if (!response.ok) {
                throw new Error ('Network response was not ok.')
            }
            return response.json();
        })
        .then(results => {
            console.log(results)
            displayData1(results, 'outputTable1')
        })
        .catch(error => console.error('Error fetching data:', error))
})
function displayData1 (results, table1) {
    const tableBody = document.getElementById(table1).getElementsByTagName('tbody')[0]
    tableBody.innerHTML = '';
    results.results.forEach(pokemon => {
        const row = document.createElement('tr')
        const cellName = document.createElement('td')
        cellName.textContent = pokemon.name
        const cellURL = document.createElement('td')
        cellURL.textContent = pokemon.url
        row.appendChild(cellName)
        row.appendChild(cellURL)
        tableBody.appendChild(row)
    })
}
//Comment out Task 3 before attempting to test Task 4

//Task 4
document.getElementById('loadData2').addEventListener('click', function() {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=9', true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const results = JSON.parse(xhr.responseText)
                    console.log(results)
                    displayData2(results)
                } else {
                    console.error("Error fetching data:", xhr.statusText)
                }
            }
        }
    xhr.send()
})
function displayData2 (results) {
    const tableBody = document.getElementById('outputTable2').getElementsByTagName('tbody')[0]
    tableBody.innerHTML = '';
    results.results.forEach(pokemon => {
        const row = document.createElement('tr')
        const cellName = document.createElement('td')
        cellName.textContent = pokemon.name
        const cellURL = document.createElement('td')
        cellURL.textContent = pokemon.url
        row.appendChild(cellName)
        row.appendChild(cellURL)
        tableBody.appendChild(row)
    })
}

//Task 5
/*
Fetch API and XMLHttpRequest can accomplish the same thing of sending and sharing data between two or more
software applications. The difference lies in ease of use and the amount of coding required. Fetch is more
straightforward, relying on .then and .catch methods to sort through success and failure states, whereas
XMLHttpRequest uses the older numbered method. XMLHttpRequest also makes a variable immediately after the
event listener function that is used for the rest of the API collection with various dot notation methods while
fetch simply starts the GET process immediately.

For newer programmers, Fetch is far easier to understand and use due to the more immediate process, relying less
on initiating a variable and using easier success and failure determinations with .then and .catch. XMLHttpRequest
was the previous model APIs used to connect and share, however, which means many companies that have been around
long enough still run on XML and not fetch. While some may plan to transition to fetch at a later point, the amount
of overhaul in a company's technological infrastructure may not be worth just switching the API collection methods.
In that case, knowledge in how XMLHttpRequest deals with success and failure states as well as the method used to
get APIs may be required.
*/