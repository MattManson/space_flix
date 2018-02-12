const Requests = require('../services/requests');

const NasaAPI = function (searchData) {
    this.url = 'https://images-api.nasa.gov/search?media_type=video&keywords=' + searchData;
    // this.url = url;
    this.collectionURLs = [];
    this.onLoad = null;
}

NasaAPI.prototype.getCollectionURLS = function () {
    var request = new Requests(this.url);
    console.log(this.url);
    request.getRequest(this.getHrefs.bind(this))
}


NasaAPI.prototype.getHrefs = function (searchResults) {
    var items = searchResults.collection.items;
    var hrefs = []
    items.forEach(function (item) {
        var videoFile = {
            title: item.data[0].title,
            href: item.href
        }
        hrefs.push(videoFile);
        // hrefs.push(item.href);
        // titles.push(item.data[0].title);
    }.bind(this))
    this.getJSONData(hrefs);
}

NasaAPI.prototype.getJSONData = function (hrefs) {
    hrefs.forEach(function (video) {
        var request = new Requests(video.href)
        request.getRequest(this.onLoad, video.title);
    }.bind(this))
}

module.exports = NasaAPI;
