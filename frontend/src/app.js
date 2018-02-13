const NasaAPI = require('./models/nasaAPI');
const VideoView = require('./views/videoView.js');
const ImageView = require('./views/imageView.js');
const Apod = require('./models/apod.js');
const SoundNASAData = require('./models/SoundNASAData');
const ApiKey = require('./API_key');
const SearchModel = require('./models/search.js')

const app = function () {

  var videoView = new VideoView(document.querySelector('#videos'));
  var imageView = new ImageView(document.querySelector('#images'));
  var search = document.querySelector('#search');
  var searchBox = document.querySelector('input');
  let click = new SearchModel();

  let enterPressed = function() {
    var searchValue = searchBox.value.replace(/ /g,"%20");
    var nasaAPI = new NasaAPI(searchValue);
      var nasaAPI2 = new NasaAPI(searchValue);
    if (event.keyCode === 13) {
      click.buttonClicked(nasaAPI,videoView);
      click.buttonClickedImage(nasaAPI2, imageView)
    }
  };

  search.addEventListener('click', function() {
    var searchValue = searchBox.value.replace(/ /g,"%20");
    var nasaAPI = new NasaAPI(searchValue);
      var nasaAPI2 = new NasaAPI(searchValue)
    click.buttonClicked(nasaAPI, videoView);
    click.buttonClickedImage(nasaAPI2, imageView);
  });
  searchBox.addEventListener('keyup', enterPressed);


  let buttons = document.querySelectorAll('button');
  for (let counter = 0; counter < buttons.length; counter++){
    if(buttons[counter].id !== 'search') {
      buttons[counter].addEventListener("click", function() {
        var newUrl1 = new NasaAPI(this.id)
        var newUrl2 = new NasaAPI(this.id)
        click.buttonClicked(newUrl1, videoView);
        click.buttonClickedImage(newUrl2, imageView);
      });
    }
  };




  var apod = new Apod();
  apod.getImage();

  var catrionaKey = new ApiKey().getCatrionaKey();
  var mattKey = new ApiKey().getMattKey();
  var soundNasaApi = new SoundNASAData('https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + mattKey);
  soundNasaApi.getData();
};

window.addEventListener('load', app);
