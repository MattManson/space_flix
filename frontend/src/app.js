const NasaAPI = require('./models/nasaAPI');
const SoundNASAData = require('./models/SoundNASAData');
const SoundView = require('./views/SoundView');

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus';
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.getCollectionURLS();
}

window.addEventListener('load', app);
