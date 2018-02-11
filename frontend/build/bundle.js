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
const Apod = __webpack_require__(4);

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus'
    var venusVideoURL = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150 First Flyby of Another Planet Mariner 2/collection.json'
    var video1 = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150%20First%20Flyby%20of%20Another%20Planet%20Mariner%202/collection.json'
    var apodurl = 'https://api.nasa.gov/planetary/apod?api_key=9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k&start_date=2018-01-30&end_date=2018-02-09'
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.getCollectionURLS();

    var testVideo = document.querySelector('#test-video');

    var apod = new Apod(apodurl);
    apod.getImage()


}

window.addEventListener('load', app);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Request = __webpack_require__(2);

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
/* 3 */,
/* 4 */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (10:26)\nYou may need an appropriate loader to handle this file type.\n| Apod.prototype.getImages = function(){\n|   var request = new Request(this.url);\n|   request.getRequest(this.)\n| }\n| ");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map