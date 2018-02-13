const Request = require('../services/requests');

const SearchModel = function(){
}

SearchModel.prototype.hideNonsense = function () {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer= document.querySelector('#view-page');
  viewPageContainer.className = 'visible';
};

SearchModel.prototype.favouritesButtonClicked = function (data, view) {
    view.clear();
    data.onLoad = view.videoRenderFavourites.bind(view);
    data.getFavourites();
    this.hideNonsense();
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

module.exports = SearchModel;
