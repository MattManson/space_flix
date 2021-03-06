const Favourites = require('../models/favourites')
const FavouriteVideoView = require('./favouriteVideoView');

const VideoView = function (videoContainer) {
  this.videoContainer = videoContainer;
  this.popupWindow = document.querySelector('#popup_bg');
  this.closePopupWindow = document.querySelector('#close_popup');
  this.popupContents = document.querySelector('#popup_contents');
}

VideoView.prototype.open_popup = function(correctVideoURL){
  this.popupWindow.style.display = "block";
  var videoPopup = document.createElement('video');
  videoPopup.src = correctVideoURL;
  videoPopup.autoplay = false;
  videoPopup.controls = true;
  videoPopup.style = "width:600px";
  videoPopup.style = "height:337px";
  videoPopup.id = "video"
  this.popupContents.appendChild(videoPopup);
}

VideoView.prototype.closePopup = function(){
  var vid = document.querySelector('#video')
  this.popupWindow.style.display = 'none';
  vid.pause();
  this.vidClear();
}

VideoView.prototype.toggleVisibility = function () {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer= document.querySelector('#view-page');
  viewPageContainer.className = 'invisible';
  let favouritesPage = document.querySelector('#favourites-page');
  favouritesPage.className = 'invisible';
  let viewMediaContainer= document.querySelector('#view-media');
  viewMediaContainer.className = 'visible';
};

VideoView.prototype.showThumbnail = function (correctVideoURL, correctThumbnailURL, dataObject) {
  this.toggleVisibility();
  var imgThumbNail = document.querySelector('#thumbnail');
  console.log(correctThumbnailURL);
  imgThumbNail.src = correctThumbnailURL;
  imgThumbNail.onclick = function(){
    this.open_popup(correctVideoURL)
  }.bind(this);
  var title = document.querySelector('#title');
  title.innerText = dataObject.title;
  var description = document.querySelector('#description');
  description.innerText = dataObject.description;
  this.changeButtonLayout();
  var addToFavouritesButton = document.querySelector('#add-to-favourites-button');
  addToFavouritesButton.addEventListener('click', function(e){
    this.showToast();
    var favourites = new Favourites();
    var favouriteVideoView = new FavouriteVideoView(document.querySelector('#favourite-videos'));
    favourites.onLoad = favouriteVideoView.videoRenderFavourites.bind(favouriteVideoView);
    favourites.addToFavourites(e, correctVideoURL, correctThumbnailURL, dataObject)
    addedToFavourites.innerText = 'Added to Favourites';
  }.bind(this))
}

VideoView.prototype.changeButtonLayout = function () {
  var addToFavourites = document.querySelector('#add-to-favourites-button');
  addToFavourites.className = 'visible';
  var backButton = document.querySelector('#back');
  var backButtonToFavourites = document.querySelector('#back-to-favourites');
  backButton.className = 'visible';
  backButtonToFavourites.className = 'invisible';
}

VideoView.prototype.videoRender = function (data, dataObject) {
  var substring = "mov";
  var correctVideoURL = data[0].replace(/ /g, "%20");
  if (!correctVideoURL.includes(substring)) {
    var correctThumbNailURL = data[data.length - 2].replace(/ /g, "%20");
    var img = document.createElement('img');
    img.src = correctThumbNailURL;
    img.onclick = function () {
      this.showThumbnail(correctVideoURL, correctThumbNailURL, dataObject);
    }.bind(this);
    var titleDiv = document.createElement('div');
    titleDiv.className = 'text-block';
    var titleP = document.createElement('p');
    titleP.innerText = dataObject.title;
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(img)
    this.videoContainer.appendChild(titleDiv);
  }
}

VideoView.prototype.showToast = function(){
  var toast = document.querySelector('#toast');
  toast.classList.add("show");
  setTimeout(function(){
    toast.classList.remove("show");
  }, 3000);
}

VideoView.prototype.vidClear = function(){
  this.popupContents.innerHTML = "";
}

VideoView.prototype.clear = function(){
  this.videoContainer.innerText = " ";
}

module.exports = VideoView;
