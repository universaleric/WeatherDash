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
        displayRepos(data, city);

})}

let displayCities = function (cities, searchTerm) {
    if (cities.length === 0) {
      cityContainerEl.textContent = 'No cities found.';
      return;
    }
  
    citySearchTerm.textContent = searchTerm;
  
    for (let i = 0; i < cities.length; i++) {
      let cityName = cities[i].owner.login + '/' + repos[i].name;
  
      var repoEl = document.createElement('a');
      repoEl.classList = 'list-item flex-row justify-space-between align-center';
      repoEl.setAttribute('href', './single-repo.html?repo=' + repoName);
  
      var titleEl = document.createElement('span');
      titleEl.textContent = repoName;
  
      repoEl.appendChild(titleEl);
  
      var statusEl = document.createElement('span');
      statusEl.classList = 'flex-row align-center';
  
      if (repos[i].open_issues_count > 0) {
        statusEl.innerHTML =
          "<i class='fas fa-times status-icon icon-danger'></i>" + repos[i].open_issues_count + ' issue(s)';
      } else {
        statusEl.innerHTML = "<i class='fas fa-check-square status-icon icon-success'></i>";
      }
  
      repoEl.appendChild(statusEl);
  
      repoContainerEl.appendChild(repoEl);
    }
  };



// fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4ef642cec6cde7575c1b34b64a4a0ad7")
// .then(response => response.json())
// .then(function(data){

// console.log(data);

// });

submitEl.addEventListener("submit", formSubmitHandler);
