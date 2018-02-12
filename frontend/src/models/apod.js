const Request = require('../services/requests');

const Apod = function(){
  this.videoUrl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k';
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
  var request = new Request(this.videoUrl);
  request.getRequest(this.displayImage)
}

module.exports = Apod;
