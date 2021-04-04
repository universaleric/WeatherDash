let getCoordinates = function (city) {
    let searchUrlCurrent = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=4ef642cec6cde7575c1b34b64a4a0ad7";
  
    fetch(searchUrlCurrent)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
    let lat = data.coord.lat;
    console.log(lat);
    let lon = data.coord.lon;
    console.log(lon);
        getCurrentCity(lat, lon);
})}



let getCurrentCity = function (lat, lon) {
    let searchUrl = "https://api.openweathermap.org/data/2.5/find?lat=" + lat + "&lon=" + lon + "&appid=4ef642cec6cde7575c1b34b64a4a0ad7";
  
    fetch(searchUrl)
    .then(response => response.json())
    .then(function(data){
        console.log(data);
        // displayCurrentCities(data, city);

})};

// let displayCurrentCities = function (data, city) {
//     if (data.list.length === 0) {
//       cityContainerEl.textContent = 'No cities found.';
//       return;
//     }
  
//     citySearchTerm.textContent = city;
//     if(resetCounter = 1) {
//     removeAllChildNodes(container);
//     resetCounter--;
//     }

  

// let output = [];
// let checkDate = false;


//   for (let i = 0; i < 38; i++) {

//     do {let getDate = data.list[i].dt_txt;
//       // console.log(getDate);
//       checkDate = !getDate.includes("09:00:00");
//       // console.log(checkDate);
//       i++;
//       // console.log(i);
//     } while (checkDate);
    

//       let forecast = {
//         date: data.list[i].dt_txt,
//         icon: "http://openweathermap.org/img/w/" + data.list[i].weather[0].icon + ".png",
//         temp: "Temp: " + (((data.list[i].main.temp) - 273.15) * 9/5 + 32).toFixed(2) + "F°",
//         humidity: "Humidity: " + data.list[i].main.humidity + "%"
//       };

      
//       output = output.concat(forecast);
//       console.log(output);
//   };

//   for (let i = 0; i < output.length; i++) {
//       let newDiv = document.createElement("div");
//       newDiv.setAttribute('class', 'card');
//       newDiv.setAttribute('id', 'card'+[i]);

//       if(output[i].date){
//         let dateEl = document.createElement('h6');
//         let dateSource = output[i].date;
//         console.log(dateEl);
//         dateEl.innerHTML = dateSource;
//         newDiv.appendChild(dateEl);
//     };

//       if(output[i].icon){
//         let img = document.createElement("img");
//         let imageSource = output[i].icon;
//         console.log(imageSource);
//         img.src = imageSource;
//         console.log(img);
//         newDiv.appendChild(img);
//       };

//       if(output[i].temp){
//           let tempEl = document.createElement('h6');
//           let tempSource = output[i].temp;
//           console.log(tempEl);
//           tempEl.innerHTML = tempSource;
//           newDiv.appendChild(tempEl);
//       };

//       if(output[i].humidity){
//           let humidityEl = document.createElement('h6');
//           let humiditySource = output[i].humidity;
//           console.log(humidityEl);
//           humidityEl.innerHTML = humiditySource;
//           newDiv.appendChild(humidityEl);
//       };

//       document.getElementById("cardContainer").appendChild(newDiv);
      
//   };

//   resetCounter++;

// };

// function removeAllChildNodes(parent) {
//   while (parent.firstChild) {
//       parent.removeChild(parent.firstChild);
//   }
// }