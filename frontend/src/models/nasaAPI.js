const Requests = require('../services/requests');

const NasaAPI = function (searchData) {
  this.videoUrl = 'https://images-api.nasa.gov/search?media_type=video&keywords=' + searchData;
  this.imageUrl = 'https://images-api.nasa.gov/search?media_type=image&keywords=' + searchData;
  this.onLoad = null;
}

NasaAPI.prototype.getCollectionURLS = function () {
  var request = new Requests(this.videoUrl);
  request.getRequest(this.getHrefs.bind(this))
}

NasaAPI.prototype.getImageURLS = function () {
  var request = new Requests(this.imageUrl)
  request.getRequest(this.getHrefs.bind(this));
}


NasaAPI.prototype.getHrefs = function (searchResults) {
  var items = searchResults.collection.items;
  var hrefs = []
  items.forEach(function (item) {
    var dataObject = {
      title: item.data[0].title,
      description: item.data[0].description,
      href: item.href
    }
    hrefs.push(dataObject);
  }.bind(this))
  this.getJSONData(hrefs);
}

NasaAPI.prototype.getJSONData = function (hrefs) {
  for(var i = 0; i < 20; i++){
    var request = new Requests(hrefs[i].href);
    request.getRequest(this.onLoad, hrefs[i]);
  }
  // hrefs.forEach(function (data) {
  //     var request = new Requests(data.href)
  //     request.getRequest(this.onLoad, data.title);
  // }.bind(this))
}

module.exports = NasaAPI;
