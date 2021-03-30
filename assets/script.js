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

})};

let displayCities = function (data, city) {
    if (data.list.length === 0) {
      cityContainerEl.textContent = 'No cities found.';
      return;
    }
  
    citySearchTerm.textContent = city;


let output = [];
  for (let i = 4; i < data.list.length; i=i+8) {
      let forecast = {
        date: data.list[i].dt_txt,
        icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png",
        temp: "Temp: " + (((data.list[i].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + "F°",
        humidity: "Humidity: " + data.list[i].main.humidity + "%"
      };

      
      output = output.concat(forecast);
      console.log(output);
  };

  for (let i = 0; i < output.length; i++) {
      let newDiv = document.createElement("div");
      newDiv.setAttribute('class', 'card');
      newDiv.setAttribute('id', 'card'+[i]);

      if(output[i].date){
        let dateEl = document.createElement('h6');
        let dateSource = output[i].date;
        console.log(dateEl);
        dateEl.innerHTML = dateSource;
        newDiv.appendChild(dateEl);
    };

      if(output[i].icon){
        let img = document.createElement("img");
        let imageSource = output[i].icon;
        console.log(imageSource);
        img.src = imageSource;
        console.log(img);
        newDiv.appendChild(img);
      };

      if(output[i].temp){
          let tempEl = document.createElement('h6');
          let tempSource = output[i].temp;
          console.log(tempEl);
          tempEl.innerHTML = tempSource;
          newDiv.appendChild(tempEl);
      };

      document.getElementById("cardContainer").appendChild(newDiv);
    
  };

};



// fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4ef642cec6cde7575c1b34b64a4a0ad7")
// .then(response => response.json())
// .then(function(data){

// console.log(data);

// });

submitEl.addEventListener("click", formSubmitHandler);
