//Weather app
const cityInput = document.getElementById('city')
const search = document.getElementById('search')
const position = document.getElementById('position')
const iconDiv = document.getElementById('iconDiv')
let url;
let tempCelsius;

// get the city the user inputs and returning the api url with the input city
function getByCity() {
    const inputCity = cityInput.value;
    url = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=eb0e05f616e7baf83055f99996975c4e`
    fetchWeather()
}

search.addEventListener('click', getByCity)

// get the coordinates with geolocation and returning the api url using them
function getByCrd () {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(success) {
        console.log(success)
        const crd = success.coords;
        const latitude = crd.latitude.toFixed(2);
        const longitude = crd.longitude.toFixed(2);
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=eb0e05f616e7baf83055f99996975c4e`
        fetchWeather()
    })
    }
}

position.addEventListener('click', getByCrd)

// fetching the data and changing the dom
function fetchWeather() {
    fetch (`${url}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const lat = data.coord.lat.toFixed(2);
        const lon = data.coord.lon.toFixed(2);
        const sunrise = new Date(data.sys.sunrise * 1000).toLocaleString().split(',')[1]
        const sunset = new Date(data.sys.sunset * 1000).toLocaleString().split(',')[1]
        const date = new Date(Date.now()).toString().split(',')[0].slice(0,10)
        tempCelsius = Math.floor(data.main.temp - 273.15)
        
        document.getElementById('cityName').innerHTML = `${data.name}`;
        document.getElementById('currentDate').innerHTML = date;
        document.getElementById('wind').innerHTML = data.wind.speed + ' km/h';
        document.getElementById('sunrise').innerHTML = sunrise;
        document.getElementById('sunset').innerHTML = sunset;
        document.getElementById('cloud').innerHTML = data.weather[0].description;
        
        //extra feature radio buttons for celsiuis and fahrenheit
        if(document.getElementById('celsius').checked) {
            document.getElementById('degrees').innerHTML = `${tempCelsius} &#8451;`;
        } else if(document.getElementById('fahrenheit').checked) {
            document.getElementById('degrees').innerHTML = `${Math.floor(tempCelsius*1.8)+32} &#8457;`;
        } else {
            document.getElementById('degrees').innerHTML = `${tempCelsius} &#8451;`;
        }
                
        const icon = document.getElementById('iconOpw')
        const iconId = data.weather[0].icon
        icon.src = `http://openweathermap.org/img/w/${iconId}.png`;
        icon.style.width = "80px"
        iconDiv.style.display = "block"
        
        getMap(lat, lon)
    })
    .catch(error => {
        console.error(error)
    })
}

//creates a map
function getMap(lat, lon) {
    const mymap = L.map('mapid').setView([lat, lon], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZmxvcmVudGluYTE5ODciLCJhIjoiY2t0M2IyaHBtMHNjajJ2bnp0cmdwZDAxdyJ9.sHz5heqXRVlbFUG7fF4NVw', {
         attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
         maxZoom: 10,
         id: 'mapbox/streets-v11',
         tileSize: 512,
         zoomOffset: -1,
         accessToken: 'your.mapbox.access.token'
}).addTo(mymap);
}
