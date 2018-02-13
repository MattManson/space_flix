const Request = require('../services/requests.js');

const Favourites = function () {
    this.url = 'http://localhost:5000/api/favourites'
    this.onLoad = null;
}

Favourites.prototype.getFavourites = function () {
    var request = new Request(this.url);
    request.getRequest(this.onLoad);
}


module.exports = Favourites;