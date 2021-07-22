console.log("Hello JS");
const app = document.getElementById('root')

// const logo = document.createElement('img')
// logo.src = 'logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')
container.setAttribute('id', 'countries')

// app.appendChild(logo)
app.appendChild(container)

document.addEventListener("DOMContentLoaded", function(event) {
    fetchAllCountries();
    filterByRegion();
})

function fetchAllCountries(){
    var request = new XMLHttpRequest()
    request.open('GET', 'https://restcountries.eu/rest/v2/all', true)
    loadData(request);
    request.send() 
}

function searchForCountry() {
    let countryName = document.getElementById("search-input").value
    if (countryName == "" || countryName == null)
    fetchAllCountries();
    else{
    var request = new XMLHttpRequest()
    request.open('GET', 'https://restcountries.eu/rest/v2/name/'+ countryName, true)
    loadData(request)
    request.send()
    }
}

function loadData(request) {
    request.onload = function () {
    document.getElementById("countries").innerHTML = "";
    // Begin accessing JSON data here
    if (this.response == "" || this.response == null)
    fetchAllCountries();
    else {
    var data = JSON.parse(this.response)
    if (request.status >= 200 && request.status < 400) {
    data.forEach((country) => {
        const card = document.createElement('div')
        card.setAttribute('class', 'card')
        const h4 = document.createElement('h4')
        h4.setAttribute('class', 'about')
        h4.textContent = country.name
        const img = document.createElement('img')
        img.setAttribute('class', 'img')
        img.src = country.flag
        const population = document.createElement('h5')
        population.textContent = `Population: ${country.population}`
        const region = document.createElement('h5')
        region.textContent = `Region: ${country.region}`
        const capital = document.createElement('h5')
        capital.textContent = `Capital: ${country.capital}`      
        population.setAttribute('class', 'about')
        region.setAttribute('class', 'about')
        capital.setAttribute('class', 'about')
        container.appendChild(card)
        card.appendChild(img)
        card.appendChild(h4)
        card.appendChild(population)
        card.appendChild(region)
        card.appendChild(capital)
    })
    } else {
    const errorMessage = document.createElement('marquee')
    errorMessage.textContent = `Something's Wrong`
        }
    }}
}

function changeTheme(){
   if (document.getElementById("moon").classList.contains('far')) {
    document.getElementById("body-content").style.background="hsl(207, 26%, 17%)";
    document.getElementById("head-content").style.background="hsl(209, 23%, 22%)";
    document.getElementById("search-icon").style.background="hsl(209, 23%, 22%)";
    document.getElementById("search-text").style.background="hsl(209, 23%, 22%)";
    document.getElementById("region").style.background="hsl(209, 23%, 22%)";
    var ele = document.getElementsByClassName("card")
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.background = "hsl(209, 23%, 22%)";
    }
    var ele = document.getElementsByClassName("about")
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.color = "hsl(0, 0%, 100%)";
    }
    var ele = document.getElementsByClassName('text');
    for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.color = "hsl(0, 0%, 100%)";
    }
    document.getElementById("moon").classList.remove('far');
    document.getElementById("moon").classList.add('fas'); 
  }
  else {
    document.getElementById("body-content").style.background="hsl(0, 0%, 98%)";
    document.getElementById("head-content").style.background="hsl(0, 0%, 100%)";
    document.getElementById("search-icon").style.background="hsl(0, 0%, 100%)";
    document.getElementById("search-text").style.background="hsl(0, 0%, 100%)";
    document.getElementById("region").style.background="hsl(0, 0%, 100%)";
    var ele = document.getElementsByClassName("card")
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.background = "hsl(0, 0%, 100%)";
    }
    var ele = document.getElementsByClassName("about")
    for (var i = 0; i < ele.length; i++ ) {
        ele[i].style.color = "hsl(200, 15%, 8%)";
    }
    var ele = document.getElementsByClassName('text');
    for (var i = 0; i < ele.length; i++ ) {
    ele[i].style.color = "hsl(200, 15%, 8%)";
    }
    document.getElementById("moon").classList.remove('fas');
    document.getElementById("moon").classList.add('far'); 
  }

}

function filterByRegion(){
    let regionName = document.getElementById("region").value
    if (regionName == "" || regionName == null || regionName == "filter") {
    fetchAllCountries();
    }
    else{
    var request = new XMLHttpRequest()
    request.open('GET', 'https://restcountries.eu/rest/v2/region/'+ regionName, true)
    loadData(request)
    request.send()
    }
}