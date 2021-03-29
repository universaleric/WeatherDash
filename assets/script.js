fetch("https://api.openweathermap.org/data/2.5/forecast?q=dallas&appid=4ef642cec6cde7575c1b34b64a4a0ad7")
.then(response => response.json())
.then(function(data){

    document.getElementById("test")
console.log(data);

})

fetch("https://api.openweathermap.org/data/2.5/weather?q=dallas&appid=4ef642cec6cde7575c1b34b64a4a0ad7")
.then(response => response.json())
.then(function(data){

console.log(data);

})