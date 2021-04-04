let submitEl = document.querySelector('#submit');
let searchInputEl = document.querySelector('#search');
let citySearchTerm = document.querySelector('#city-search-term');
const container = document.querySelector('#cardContainer');
let resetCounter = 0;


let formSubmitHandler = function (event) {
    event.preventDefault();
  
    let city = searchInputEl.value.trim();
    // console.log(city);
    if (city) {
      getCity(city);
      getCoordinates(city);
  
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
        // console.log(data);
        displayCities(data, city);

})};

let displayCities = function (data, city) {
    if (data.list.length === 0) {
      alert('No cities found.');
      return;
    }
  
    citySearchTerm.textContent = city;
    if(resetCounter = 1) {
    removeAllChildNodes(container);
    resetCounter--;
    }

  

  let output = [];
  let checkDate = true;


  for (let i = 0; i < 38; i++) {

    while (checkDate && (output.length < 5)) {
      let getDate = data.list[i].dt_txt;
      // console.log(getDate);
      checkDate = !getDate.includes("09:00:00");
      // console.log(checkDate);
      i++;
      // console.log(i);
    }
    checkDate = true;

      let forecast = {
        date: data.list[i].dt_txt,
        icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png",
        temp: "Temp: " + (((data.list[i].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + "F°",
        humidity: "Humidity: " + data.list[i].main.humidity + "%"
      };

      
      output = output.concat(forecast);
      // console.log(output);

      if(output.length > 4) {
        break;
      }
  };

  for (let i = 0; i < output.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'card');
      newDiv.setAttribute('id', 'card'+[i]);

      if(output[i].date){
        let dateEl = document.createElement('h6');
        let dateSource = output[i].date;
        // console.log(dateEl);
        dateEl.innerHTML = dateSource;
        newDiv.appendChild(dateEl);
    };

      if(output[i].icon){
        let img = document.createElement("img");
        let imageSource = output[i].icon;
        // console.log(imageSource);
        img.src = imageSource;
        // console.log(img);
        newDiv.appendChild(img);
      };

      if(output[i].temp){
          let tempEl = document.createElement('h6');
          let tempSource = output[i].temp;
          // console.log(tempEl);
          tempEl.innerHTML = tempSource;
          newDiv.appendChild(tempEl);
      };

      if(output[i].humidity){
          let humidityEl = document.createElement('h6');
          let humiditySource = output[i].humidity;
          // console.log(humidityEl);
          humidityEl.innerHTML = humiditySource;
          newDiv.appendChild(humidityEl);
      };

      document.getElementById("cardContainer").appendChild(newDiv);
      
  };

  resetCounter++;


};

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}





submitEl.addEventListener("click", formSubmitHandler);
