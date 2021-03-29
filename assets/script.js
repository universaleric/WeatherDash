let submitEl = document.querySelector('#submit');
let searchInputEl = document.querySelector('#search');
let cityContainerEl = document.querySelector('#cities-container');
let citySearchTerm = document.querySelector('#city-search-term');

let formSubmitHandler = function (event) {
    event.preventDefault();
  
    let city = searchInputEl.value.trim();
    console.log(city);
    if (city) {
      getCity(city);
  
      cityContainerEl.textContent = '';
      searchInputEl.value = '';
    } else {
      alert('Please enter a city name.');
    }
  };

  var getCity = function (city) {
    let searchUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=4ef642cec6cde7575c1b34b64a4a0ad7";
  
    fetch(searchUrl)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        displayCities(data, city);

})}

let displayCities = function (data, city) {
    if (data.length === 0) {
      cityContainerEl.textContent = 'No cities found.';
      return;
    }
  
    citySearchTerm.textContent = city;
  
    for (let i = 0; i < data.length; i++) {
      let forecast = {
        date: data.list[i].dt_txt,
        icon: data.list[i].weather[i].icon,
        temp: "Temp: " + data.list[i].main.temp + "F" + "&#8451;",
        humidity: "Humidity: " + data.list[i].main.humidity + "%"
      }

      console.log(forecast);
      cityContainerEl.textContent = forecast;
  
    }
  };



// fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4ef642cec6cde7575c1b34b64a4a0ad7")
// .then(response => response.json())
// .then(function(data){

// console.log(data);

// });

submitEl.addEventListener("click", formSubmitHandler);
