const NasaAPI = require('./models/nasaAPI.js');


const doSomethingWithData = function(data) {
    console.log(data)
}

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus'
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.getCollectionURLS(doSomethingWithData);
    console.log(nasaAPI.colllectionURLs);


}

window.addEventListener('load', app);