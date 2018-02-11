const NasaAPI = require('./models/nasaAPI.js');
const VideoView = require('./views/videoView.js');


const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=space'
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.onLoad = videoView.render.bind(videoView);
    nasaAPI.getCollectionURLS();


}

window.addEventListener('load', app);