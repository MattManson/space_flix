const NasaAPI = require('./models/nasaAPI');
const VideoView = require('./views/videoView.js');
const Apod = require('./models/apod.js');

const SoundNASAData = require('./models/SoundNASAData');
const ApiKey = require('./API_key')

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=space'
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var apodurl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k&start_date=2018-01-30&end_date=2018-02-09'

    var apod = new Apod(apodurl);
    apod.getImage()
    // apod.imagesForSlider();
    // apod.makeSlider();

    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.onLoad = videoView.render.bind(videoView);
    nasaAPI.getCollectionURLS();



    var catrionaKey = new ApiKey().getCatrionaKey();
    var mattKey = new ApiKey().getMattKey();
    var soundNasaApi = new SoundNASAData('https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + mattKey);
    soundNasaApi.getData();
}

window.addEventListener('load', app);
