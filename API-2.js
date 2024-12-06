//API-2 (& Events)
document.getElementById('loadData1').addEventListener('click', function() {
    fetch('https://api.aviationstack.com/v1/flights?access_key=4e685fb39ead7b0b' + 
        '804d5df8cf4ea968&flight_icao=ACA104&limit=1')
        .then(response => {
            if(!response.ok) {
                throw new Error('Network not responding.')
            }
            return response.json()
        })
        .then(data1 => {
            console.log(data1)
            displayData(data1, 'outputTable1')
        })
        .catch(error => console.error('Error fetching data:', error))
})
function displayData (data1, table1) {
    const table1Body = document.getElementById(table1).getElementsByTagName('tbody')[0]
    table1Body.innerHTML = '';
    data1.data.forEach(landing => {
        const row = document.createElement('tr')
        const cellFlightCode = document.createElement('td')
        cellFlightCode.textContent = landing.flight.iata
        const cellLeaving = document.createElement('td')
        cellLeaving.textContent = landing.departure.airport
        const cellLeavingCode = document.createElement('td')
        cellLeavingCode.textContent = landing.departure.iata
        const cellArriving = document.createElement('td')
        cellArriving.textContent = landing.arrival.airport
        const cellArrivingCode = document.createElement('td')
        cellArrivingCode.textContent = landing.arrival.iata
        const cellLeaveTime = document.createElement('td')
        cellLeaveTime.textContent = landing.departure.scheduled
        const cellArriveTime = document.createElement('td')
        cellArriveTime.textContent = landing.arrival.scheduled
        row.appendChild(cellFlightCode)
        row.appendChild(cellLeaving)
        row.appendChild(cellLeavingCode)
        row.appendChild(cellArriving)
        row.appendChild(cellArrivingCode)
        row.appendChild(cellLeaveTime)
        row.appendChild(cellArriveTime)
        table1Body.appendChild(row)
    })
}    