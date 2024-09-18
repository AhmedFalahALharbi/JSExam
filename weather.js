let city = document.getElementById('city');
let temp = document.getElementById('temp')
let humidity = document.getElementById('humidity')
let length = document.getElementById('lon')
let wid = document.getElementById('lat')

fetch("https://api.openweathermap.org/data/2.5/weather?q=Riyadh&appid=e13c7714e3097da0f72002fae0f85703")
.then(response => response.json())
.then(data => {
    city.textContent = data.name
    temp.textContent = `temp in F: ${data.main.temp}`
    humidity.textContent = `humidity: ${data.main.humidity}`
    length.textContent = `Longitude: ${data.coord.lon}`
    wid.textContent = `latitude: ${data.coord.lat}`
    
});
