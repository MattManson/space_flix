const ImageView = function (imageContainer) {
  this.imageContainer = imageContainer;
}

ImageView.prototype.showThumbnail = function (correctImageURL, correctThumbnailURL, dataObject) {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer= document.querySelector('#view-page');
  viewPageContainer.className = 'invisible';
  let viewMediaContainer= document.querySelector('#view-media');
  viewMediaContainer.className = 'visible';
  var imgThumbNail = document.querySelector('#thumbnail');
  imgThumbNail.src = correctThumbnailURL;
  imgThumbNail.onclick = function () {
    window.location.href = correctImageURL;
  };
  var title = document.querySelector('#title');
  title.innerText = dataObject.title;
  var description = document.querySelector('#description');
  description.innerText = dataObject.description;
  var addToFavourites = document.querySelector('#add-to-favourites-button');
  addToFavourites.innerText = '';
  var addedToFavourites = document.querySelector('#added-to-favourites');
  addedToFavourites.innerText = '';
}

ImageView.prototype.imageRender = function (data, dataObject) {
  var correctImageURL = data[0].replace(/ /g,"%20");
  var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
  var img = document.createElement('img');
  img.width = 320;
  img.height = 240;
  img.src = correctThumbNailURL;
  img.onclick = function() {
    this.showThumbnail(correctImageURL, correctThumbNailURL, dataObject);
  }.bind(this);
  var titleDiv = document.createElement('div');
  titleDiv.className = 'text-block';
  var titleP = document.createElement('p');
  titleP.innerText = dataObject.title;
  titleDiv.appendChild(titleP);
  titleDiv.appendChild(img)
  this.imageContainer.appendChild(titleDiv);
};

ImageView.prototype.clear = function(){
  this.imageContainer.innerText = " ";
}

module.exports = ImageView;
