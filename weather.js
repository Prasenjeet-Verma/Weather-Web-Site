let inputVal = document.querySelector(".search input");
let inputBtn = document.querySelector("button");
let windUpdate = document.querySelector(".wind")
let tempUpdate = document.querySelector(".temp")
let cityUpdate = document.querySelector(".city")
let humidityUpdate = document.querySelector(".humidity")
let weatherIcon = document.querySelector(".weather-icon")
inputBtn.addEventListener("click", async (evt) => {
    evt.preventDefault()
    inputVal.value.toLowerCase()
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal.value.toLowerCase()}&appid=99a55e948a170c4c4d3e806463763644&units=metric`
    let getData = await fetch(URL)
    let convertJS = await getData.json()

    if (convertJS.status = 404) {
        weatherIcon.src = `images/error.png`
    }
console.log(convertJS)
    upDate(convertJS)
})

let upDate = (convertJS) => {
    windUpdate.innerText = convertJS.wind.speed + "km/h"
    tempUpdate.innerText = convertJS.main.temp + "°c"
    cityUpdate.innerText = convertJS.name
    humidityUpdate.innerText = convertJS.main.humidity + "%"
    weatherIcon.src = `images/${convertJS.weather[0].main}.png`

}

