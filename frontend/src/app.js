const NasaAPI = require('./models/nasaAPI.js');
const VideoView = require('./views/videoView.js');
const Apod = require('./models/apod.js');

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=asteroid'
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var apodurl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k'

    var apod = new Apod(apodurl);
    apod.getImage()
    // apod.imagesForSlider();
    // apod.makeSlider();

    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.onLoad = videoView.render.bind(videoView);
    nasaAPI.getCollectionURLS();


  }

window.addEventListener('load', app);
