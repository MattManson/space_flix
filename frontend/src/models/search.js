const Request = require('../services/requests');

const SearchModel = function(){
}

SearchModel.prototype.hideNonsense = function () {
  let frontPageContainer = document.querySelector('#front-page');
  frontPageContainer.className = 'invisible';
  let viewPageContainer= document.querySelector('#view-page');
  viewPageContainer.className = 'visible';
};

SearchModel.prototype.buttonClicked = function(data, view){
  view.clear();
  data.onLoad = view.render.bind(view);
  data.getCollectionURLS();
  this.hideNonsense();
};

module.exports = SearchModel;
