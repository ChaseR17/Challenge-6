const APIKey = "a67e0ecb4838487f58850675d373057e"

function cityInformation(cityName) {
    let geoCodeUrl = "http://api.openweathermap.org/geo/1.0/direct?q="+cityName+"&limit=5&appid="+APIKey
    fetch(geoCodeUrl)
.then((res)=>{
    return res.json()
}).then((data)=>{
    // console.log(data)
    
    // console.log(data[0].lat)
    // console.log(data[0].lon)
    let currentLat = data[0].lat
    let currentLon = data[0].lon
    getWeather(currentLat,currentLon)
})
}
function getWeather (lat,lon) {
    let weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid="+APIKey
    fetch(weatherUrl)
    .then((res)=>{
        return res.json()
    }).then((data)=>{
        console.log(data.list)
        let weatherArray = data.list
        for (let i = 0; i < weatherArray.length; i+=8) {
    console.log(weatherArray[i])
            
        }
    })
    }
    cityInformation("new york")
    