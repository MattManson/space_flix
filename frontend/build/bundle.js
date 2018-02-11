/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const NasaAPI = __webpack_require__(1);
const VideoView = __webpack_require__(3);
const Apod = __webpack_require__(4);

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=asteroid'
    var videoView = new VideoView(document.querySelector('#test-videos'));
    var apodurl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k'

    var apod = new Apod(apodurl);
    apod.getImage()
    // apod.imagesForSlider();
    // apod.makeSlider();

    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.onLoad = videoView.render.bind(videoView);
    nasaAPI.getCollectionURLS();


  }

window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Requests = __webpack_require__(2);

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

/***/ }),
/* 2 */
/***/ (function(module, exports) {

const Request = function (url) {
    this.url = url;
}

Request.prototype.getRequest = function(callback) {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', function () {
        if(this.status != 200){
            return;
        }
        const responseBody = JSON.parse(this.responseText);
        callback(responseBody);
    });
    request.send();
}


module.exports = Request;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const VideoView = function (container) {
    this.container = container;
}

VideoView.prototype.render = function (data) {
        var correctVideoURL = data[0].replace(/ /g,"%20");
        var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
        // console.log(correctThumbNailURL);
        var img = document.createElement('img');
        img.width = 320;
        img.height = 240;
        img.src = correctThumbNailURL;
        img.onclick = function() {
            window.location.href = correctVideoURL;
        };
        this.container.appendChild(img);
}

module.exports = VideoView;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(2);

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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map