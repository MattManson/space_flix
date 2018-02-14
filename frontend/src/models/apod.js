const Request = require('../services/requests');

const Apod = function(){
  this.videoUrl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k';
  this.recentImages = [];
}

Apod.prototype.displayImage = function(imageDetails) {
  console.log(imageDetails);
  var imageLocation = document.querySelector('#apod-slider');
  var divDetails = document.querySelector('#bottom-left');
  var apodImage = document.createElement('img');
  var apodDetails = document.createElement('p');
  imageLocation.style.backgroundImage = `url(${imageDetails.hdurl})`;
  // apodImage.src = imageDetails.hdurl;
  // imageLocation.appendChild(apodImage);
  apodDetails.innerText = 'Image of The Day : ' + imageDetails.title;
  divDetails.appendChild(apodDetails);
}

Apod.prototype.getImage = function(){
  var request = new Request(this.videoUrl);
  request.getRequest(this.displayImage)
}

module.exports = Apod;
