const currentContainer = document.querySelector('#cardCurrentContainer');

let getCoordinates = function (city) {
    let searchUrlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4ef642cec6cde7575c1b34b64a4a0ad7";
  
    fetch(searchUrlCurrent)
    .then(response => response.json())
    .then(function(data){
        // console.log(data);
    let lat = data.coord.lat;
    // console.log(lat);
    let lon = data.coord.lon;
    // console.log(lon);
        getCurrentCity(lat, lon);
        getCurrentWeather(data, city);
})}



let getCurrentCity = function (lat, lon) {
    let searchUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&appid=4ef642cec6cde7575c1b34b64a4a0ad7";
  
    fetch(searchUrl)
    .then(response => response.json())
    .then(function(dataOneCall){
        // console.log(dataOneCall);
        getCurrentUVI(dataOneCall);
        

})};

let getCurrentWeather = function (data) {
  
let currentDate = luxon.DateTime.now().toLocaleString();    

    let weather = {
    date: currentDate,
    icon: "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png",
    temp: "Temp: " + (((data.main.temp) - 273.15) * 9/5 + 32).toFixed(2) + "F°",
    humidity: "Humidity: " + data.main.humidity + "%",
    wind: "Wind Speed: " + data.wind.speed + "mph"
    
    };
    console.log(weather);
    displayCurrentWeather(weather);
}



let getCurrentUVI = function (dataOneCall) {
    let uvi = {
        uvi: "UV Index: " + dataOneCall.daily[0].uvi 
    };
    console.log(uvi);

}
      
let displayCurrentWeather = function (weather) {
      
    if(resetCounter = 1) {
        removeAllChildNodes(currentContainer);
        resetCounter--;
        }

    let newWeatherDiv = document.createElement("div");
    newWeatherDiv.setAttribute('class', 'card');
    newWeatherDiv.setAttribute('id', 'currentWeather');

    let displayCurrent = document.createElement('h2')  
    let currentDateEl = document.createElement('h4');
    let curDateSource = weather.date;
    // console.log(currentDateEl);
    displayCurrent.innerHTML = "Current Weather"
    currentDateEl.innerHTML = curDateSource;
    newWeatherDiv.appendChild(displayCurrent);
    newWeatherDiv.appendChild(currentDateEl);


      if(weather.icon){
        let img = document.createElement("img");
        let imageSource = weather.icon;
        // console.log(imageSource);
        img.src = imageSource;
        // console.log(img);
        newWeatherDiv.appendChild(img);
      };

      if(weather.temp){
          let tempEl = document.createElement('h4');
          let tempSource = weather.temp;
          console.log(tempEl);
          tempEl.innerHTML = tempSource;
          newWeatherDiv.appendChild(tempEl);
      };

      if(weather.humidity){
          let humidityEl = document.createElement('h4');
          let humiditySource = weather.humidity;
          console.log(humidityEl);
          humidityEl.innerHTML = humiditySource;
          newWeatherDiv.appendChild(humidityEl);
      };

      document.getElementById("cardCurrentContainer").appendChild(newWeatherDiv);

  resetCounter++;



function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}
} 