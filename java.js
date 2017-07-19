const londonURL = "api.openweathermap.org/data/2.5/weather?lat=51.5074&lon=.1278&APPID=44551767d60d8f877f1744067c0c7a45"


const seattleURL = "api.openweathermap.org/data/2.5/weather?lat=47.6762&lon=-122.3182&APPID=44551767d60d8f877f1744067c0c7a45"


function getSeattle (){
let request = new XMLHttpRequest()

request.open('GET', seattleURL, true)

request.onload = function () {
let reportSeattle = document.getElementByID("weatherbox")
let response = JSON.parse(request.response)
console.log(response.body)

reportSeattle.InnerHTML = response.body
}

request.error = function (err) {

  console.log(err)
}

request.send()

}

function getLondon (){
let request = new XMLHttpRequest()

request.open('GET', londonURL, true)

request.onload = function () {
let reportLondon = document.getElementByID("weatherbox")
let response = JSON.parse(request.response)
console.log(response.body)

reportLondon.InnerHTML = response.body
}

request.error = function (err) {

  console.log(err)
}

request.send()

}




Geolocation.getCurrentPosition() {
  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

const mapUPI = ""



let request = new XMLHttpRequest()
request.open("GET", mapUPI, true)
request.onload = onloadFunc
request.error = onloadFunc
request.send()

function onloadFunc(){
console.log(JSON.parsel(request.response));
if (response.results.length > 0){
  document.getElementByID("weatherbox".InnerHTML) = response.results[0].formatted_address

}
}

function onerrorfunction (){

  console.log("oh no!");
}

  function success(pos) {
    var crd = pos.coords;

    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  };

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  navigator.geolocation.getCurrentPosition(success, error, options);


}
