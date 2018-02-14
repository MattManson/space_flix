const VideoView = require('./videoView');

const FavouriteVideoView = function (videoContainer) {
  this.videoContainer = videoContainer;
  this.popupWindow = document.querySelector('#popup_bg');
  this.closePopupWindow = document.querySelector('#close_popup');
  this.popupContents = document.querySelector('#popup_contents');
}

FavouriteVideoView.prototype.clear = function(){
  this.videoContainer.innerText = " ";
}

FavouriteVideoView.prototype.open_popup = function(correctVideoURL){
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

FavouriteVideoView.prototype.closePopup = function(){
  var vid = document.querySelector('#video')
  this.popupWindow.style.display = 'none';
  vid.pause();
  this.vidClear();
}

FavouriteVideoView.prototype.showThumbnail = function (correctVideoURL, correctThumbnailURL, dataObject) {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer = document.querySelector('#view-page');
  viewPageContainer.className = 'invisible';
  let favouritesPage = document.querySelector('#favourites-page');
  favouritesPage.className = 'invisible';
  let viewMediaContainer = document.querySelector('#view-media');
  viewMediaContainer.className = 'visible';
  var imgThumbNail = document.querySelector('#thumbnail');
  console.log(correctThumbnailURL);
  imgThumbNail.src = correctThumbnailURL;
  imgThumbNail.onclick = function () {
    this.open_popup(correctVideoURL)
  }.bind(this);
  var title = document.querySelector('#title');
  title.innerText = dataObject.title;
  var description = document.querySelector('#description');
  description.innerText = dataObject.description;
  this.changeButtonLayout();
}

FavouriteVideoView.prototype.changeButtonLayout = function () {
  var addToFavouritesButton = document.querySelector('#add-to-favourites-button');
  addToFavouritesButton.className = 'invisible';
  var backButton = document.querySelector('#back');
  var backButtonToFavourites = document.querySelector('#back-to-favourites');
  backButton.className = 'invisible';
  backButtonToFavourites.className = 'visible';
}

FavouriteVideoView.prototype.loopHandler = function (data) {
  return function () {
    console.log("VideoView:", VideoView);
    this.showThumbnail(data.href, data.thumbnail, data);
  }.bind(this);
}

FavouriteVideoView.prototype.videoRenderFavourites = function (dataObject) {
  dataObject.forEach(function (data) {
    console.log(this);
    console.log(dataObject);
    var img = document.createElement('img');
    img.src = data.thumbnail;
    img.onclick = this.loopHandler(data).bind(this);
    var titleDiv = document.createElement('div');
    titleDiv.className = 'text-block';
    var titleP = document.createElement('p');
    titleP.innerText = data.title;
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(img)
    this.videoContainer.appendChild(titleDiv);
  }.bind(this))
}

FavouriteVideoView.prototype.clear = function(){
  this.videoContainer.innerText = " ";
}

module.exports = FavouriteVideoView
