const NasaAPI = require('./models/nasaAPI');
const VideoView = require('./views/videoView.js');
const Apod = require('./models/apod.js');

const SoundNASAData = require('./models/SoundNASAData');
const ApiKey = require('./API_key');

const app = function () {
    var videosURL = 'https://images-api.nasa.gov/search?media_type=video&keywords='
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var apodurl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k'

    let searchButtonClicked = function(){
      // videoView.clear();
      var searchBox = document.querySelector('input').value.replace(/ /g,"%20");
      var nasaAPI = new NasaAPI(videosURL + searchBox);
      console.log(videosURL + searchBox);
      nasaAPI.onLoad = videoView.render.bind(videoView);
      nasaAPI.getCollectionURLS();
      let frontPageContainer = document.querySelector('#front-page');
      frontPageContainer.className = 'invisible';
      let viewPageContainer= document.querySelector('#view-page');
      viewPageContainer.className = 'visible';
    }

    var search = document.querySelector('#search');
    search.addEventListener('click', searchButtonClicked);


    var apod = new Apod(apodurl);
    apod.getImage();

    var catrionaKey = new ApiKey().getCatrionaKey();
    var mattKey = new ApiKey().getMattKey();
    var soundNasaApi = new SoundNASAData('https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + mattKey);
    soundNasaApi.getData();

    let buttonClicked = function () {
        var nasaAPI = new NasaAPI(videosURL + this.id);
        nasaAPI.onLoad = videoView.render.bind(videoView);
        nasaAPI.getCollectionURLS();
        let frontPageContainer = document.querySelector('#front-page');
        frontPageContainer.className = 'invisible';
        let viewPageContainer= document.querySelector('#view-page');
        viewPageContainer.className = 'visible';
    };

    let buttons = document.querySelectorAll('button');
    for (let counter = 0; counter < buttons.length; counter++) {
      buttons[counter].addEventListener("click", buttonClicked );
    };
};

window.addEventListener('load', app);
