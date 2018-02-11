const Request = require('../services/requests');

const Apod = function(url){
  this.url = url;
  this.recentImages = [];
}

Apod.prototype.displayImage = function(imageDetails){
  console.log(imageDetails);
  var imageLocation = document.querySelector('#apod-slider');
  var apodImage = document.createElement('img');
  apodImage.src = imageDetails.hdurl
  imageLocation.appendChild(apodImage);
}

Apod.prototype.getImage = function(){
  var request = new Request(this.url);
  request.getRequest(this.displayImage)
}

module.exports = Apod;

// Apod.prototype.getImages = function(){
//   var request = new Request(this.url);
//   request.getRequest(this.fillArray.bind(this))
// }
//
// Apod.prototype.fillArray = function(info){
//     this.recentImages = info;
// }
//
// Apod.prototype.imagesForSlider = function(){
//   var imageLocation = document.querySelector('#apod-slider');
//   this.recentImages.forEach(function(element){
//     console.log(element);
//     var li = document.createElement('li')
//     var image = document.createElement('img');
//     image.src = element.hdurl;
//     // image.className = "sliderImage"
//     imageLocation.appendChild(image);
//   })
// }


//
// var slideIndex = 0;
// // carousel();
//
// Apod.prototype.makeSlider = function() {
//   var ul;
//   var liItems;
//   var imageWidth;
//   var imageNumber;
//   ul = document.querySelector('#apod-slider');
//   liItems = ul.children;
//   imageNumber = liItems.length;
//   imageWidth = liItems[0].children[0].offsetWidth;
//   // set ul’s width as the total width of all images in image slider.
//   ul.style.width = parseInt(imageWidth * imageNumber) + 'px';
//   slider(ul);
// }
