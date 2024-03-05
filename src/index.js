function updateWeather(response){
    let temperatureElement = document.querySelector(".temp");
    let temperature = response.data.temperature.current; 
    let cityElement = document.querySelector(".city");
    let descriptionElement = document.querySelector(".temp-descr");
    let humidityElement = document.querySelector(".humidity");
    let windElement = document.querySelector(".wind");
    let timeElement = document.querySelector(".day-time");
    let date = new Date(response.data.time * 1000);
    let emojiElement = document.querySelector(".emoji");
    
    cityElement.innerHTML = response.data.city; 
    timeElement.innerHTML = formDate(date);
    descriptionElement.innerHTML = response.data.condition.description; 
    humidityElement.innerHTML =`${response.data.temperature.humidity}%`;
    windElement.innerHTML = `${response.data.wind.speed}km/h`;
    temperatureElement.innerHTML = Math.round(temperature);
    emojiElement.innerHTML = `<img src= "${response.data.condition.icon_url}" class = "emoji"`;

}

