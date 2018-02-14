const Request = require('../services/requests.js');

const Favourites = function () {
    this.url = 'http://localhost:5000/api/favourites'
    this.onLoad = null;
}

Favourites.prototype.getFavourites = function () {
    var request = new Request(this.url);
    request.getRequest(this.onLoad);
}

Favourites.prototype.addToFavourites = function (event, correctVideoURL, correctThumbnailURL, dataObject) {
    event.preventDefault();
    const body = {
        title: dataObject.title,
        description: dataObject.description,
        href: correctVideoURL,
        thumbnail: correctThumbnailURL
    }
    const createRequestComplete = function () {
        this.getFavourites();
    }.bind(this);
    var request = new Request(this.url);
    request.post(createRequestComplete, body);
}

Favourites.prototype.deleteFavourites = function () {
    var request = new Request(this.url);
    request.delete();
}


module.exports = Favourites;