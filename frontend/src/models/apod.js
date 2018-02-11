const Request = require('../services/requests');

const Apod = function(url){
  this.url = url;
  this.recentImages = [];
}

Apod.prototype.displayImage = function(imageDetails) {
  console.log(imageDetails);
  var imageLocation = document.querySelector('#apod-slider');
  var apodImage = document.createElement('img');
  apodImage.src = imageDetails.hdurl;
  imageLocation.appendChild(apodImage);
}

Apod.prototype.getImage = function(){
  var request = new Request(this.url);
  request.getRequest(this.displayImage)
}

module.exports = Apod;
