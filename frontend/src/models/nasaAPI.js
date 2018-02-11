const Requests = require('../services/requests');

const NasaAPI = function (url) {
    this.url = url;
    this.collectionURLs = [];
    this.onLoad = null;
}

NasaAPI.prototype.getCollectionURLS = function () {
    var request = new Requests(this.url);
    request.getRequest(this.getHrefs.bind(this))
}


NasaAPI.prototype.getHrefs = function (searchResults) {
    var items = searchResults.collection.items;
    var hrefs = []
    items.forEach(function (item) {
        hrefs.push(item.href);
    }.bind(this))
    this.getJSONData(hrefs);
}

NasaAPI.prototype.getJSONData = function (hrefs) {
    hrefs.forEach(function (url) {
        var request = new Requests(url)
        request.getRequest(this.onLoad);
    }.bind(this))
}

module.exports = NasaAPI;