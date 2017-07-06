const londonURL = api.openweathermap.org/data/2.5/weather?lat={51.5074}&lon={.1278}&APPID=44551767d60d8f877f1744067c0c7a45


const seattleURL = api.openweathermap.org/data/2.5/weather?lat={47.6762}&lon={-122.3182}&APPID=44551767d60d8f877f1744067c0c7a45






getSeattle (){
let request = new XMLHttpRequest()

request.open('GET', seattleURL, true)

request.onload = function () {
let reportSeattle = document.getElementByID("")
let response = JSON.parse(request.response)
console.log(response.body)

reportSeattle.InnerHTML = response.body
}

request.error = function (err) {

  console.log(err)
}

request.send

}

getLondon (){
let request = new XMLHttpRequest()

request.open('GET', londonURL, true)

request.onload = function () {
let reportLondon = document.getElementByID("")
let response = JSON.parse(request.response)
console.log(response.body)

reportLondon.InnerHTML = response.body
}

request.error = function (err) {

  console.log(err)
}

request.send

}
