const Request = require('../services/requests');

const NasaAPI = function (url) {
    this.url = url;
    this.colllectionURLS = [];
}

NasaAPI.prototype.getCollectionURLS = function () {
    var request = new Request(this.url);
    request.getRequest()
}


NasaAPI.prototype.getHrefs = function (searchResults) {
    var hrefs = videos.map(searchResults = searchResults => [searchResults.collection.items.href]);
    return hrefs;
}

// var unconvertedString = searchResults.collection.items[0].href;
// var changedString = unconvertedString.replace(/ /g,"%20");
// console.log(unconvertedString);
// console.log(changedString);

module.exports = NasaAPI;