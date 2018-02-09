const Request = require('../services/requests');

const Apod = function(url){
  this.url = url;
  this.recentImages = [];
}

Apod.prototype.getImages = function(){
  var request = new Request(this.url);
}

//
// Apod.prototype.displayImage = function(imageDetails){
//   var imageLocation = document.querySelector('#apod');
//   var apodImage = document.createElement('img');
//   apodImage.src = imageDetails.hdurl
//   imageLocation.appendChild(apodImage);
// }
//
// Apod.prototype.getImage = function(){
//   var request = new Request(this.url);
//   request.getRequest(this.displayImage)
// }



module.exports = Apod;
