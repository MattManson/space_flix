const NasaAPI = require('./models/nasaAPI.js');

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus'
    var venusVideoURL = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150 First Flyby of Another Planet Mariner 2/collection.json'
    var video1 = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150%20First%20Flyby%20of%20Another%20Planet%20Mariner%202/collection.json'
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.makeRequest();

    var testVideo = document.querySelector('#test-video');


}

window.addEventListener('load', app);