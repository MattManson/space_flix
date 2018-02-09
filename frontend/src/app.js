const NasaAPI = require('./models/nasaAPI');
const VideoView = require('./views/videoView.js');
const SoundNASAData = require('./models/SoundNASAData');
const ApiKey = require('./API_key')

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus';
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.onLoad = videoView.render.bind(videoView);
    nasaAPI.getCollectionURLS();

    var catrionaKey = new ApiKey().getCatrionaKey();
    var mattKey = new ApiKey().getMattKey();
    var soundNasaApi = new SoundNASAData('https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + mattKey);
    soundNasaApi.getData();
}

window.addEventListener('load', app);
