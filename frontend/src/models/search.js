const Request = require('../services/requests');

const SearchModel = function(){
}

SearchModel.prototype.hideNonsense = function () {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer = document.querySelector('#view-page');
  viewPageContainer.className = 'visible';
};

SearchModel.prototype.hideViewPage = function () {
    let frontPageContainer = document.querySelector('#front-page');
    frontPageContainer.className = 'invisible';
    let viewPageContainer= document.querySelector('#view-page');
    viewPageContainer.className = 'invisible';
    let favouritesPage = document.querySelector('#favourites-page');
    favouritesPage.className = 'visible';
}

SearchModel.prototype.backButtonClicked = function () {
    let frontPageContainer = document.querySelector('#front-page');
    frontPageContainer.className = 'invisible';
    let viewPageContainer = document.querySelector('#view-page');
    viewPageContainer.className = 'visible';
    let favouritesPage = document.querySelector('#favourites-page');
    favouritesPage.className = 'invisible';
    let viewMediaContainer = document.querySelector('#view-media');
    viewMediaContainer.className = 'invisible';
}

SearchModel.prototype.backToFavouritesButtonClicked = function () {
    let frontPageContainer = document.querySelector('#front-page');
    frontPageContainer.className = 'invisible';
    let viewPageContainer = document.querySelector('#view-page');
    viewPageContainer.className = 'invisible';
    let favouritesPage = document.querySelector('#favourites-page');
    favouritesPage.className = 'visible';
    let viewMediaContainer = document.querySelector('#view-media');
    viewMediaContainer.className = 'invisible';
}


SearchModel.prototype.favouritesButtonClicked = function (data, view) {
    view.clear();
    data.onLoad = view.videoRenderFavourites.bind(view);
    data.getFavourites();
    this.hideViewPage();
}

SearchModel.prototype.deleteButtonClicked = function (data, view) {
    view.clear();
    data.deleteFavourites();
    this.hideViewPage();
}

SearchModel.prototype.buttonClicked = function(data, view){
  view.clear();
  data.onLoad = view.videoRender.bind(view);
  data.getCollectionURLS();
  this.hideNonsense();
};

SearchModel.prototype.buttonClickedImage = function(data, view){
  view.clear();
  data.onLoad = view.imageRender.bind(view);
  data.getImageURLS();
  this.hideNonsense();
};

SearchModel.prototype.buttonClickedSound = function(data, view){
  data.showData = view.renderSound.bind(view);
  data.getData();
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer = document.querySelector('#sound-page');
  viewPageContainer.className = 'visible';
};


module.exports = SearchModel;
