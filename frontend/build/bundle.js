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


const doSomethingWithData = function(data) {
    console.log(data)
}

const app = function () {
    var venusURL = 'https://images-api.nasa.gov/search?media_type=video&keywords=venus'
    var venusVideoURL = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150 First Flyby of Another Planet Mariner 2/collection.json'
    var video1 = 'https://images-assets.nasa.gov/video/JPL-19621214-MARINRf-0001-AVC2002150%20First%20Flyby%20of%20Another%20Planet%20Mariner%202/collection.json'
    var nasaAPI = new NasaAPI(venusURL);
    nasaAPI.getCollectionURLS(doSomethingWithData);
    console.log(nasaAPI.colllectionURLs);

    var testVideo = document.querySelector('#test-video');


}

window.addEventListener('load', app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const Requests = __webpack_require__(2);

const NasaAPI = function (url) {
    this.url = url;
    this.colllectionURLs = [];
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
    console.log(hrefs);
}

// NasaAPI.prototype.getJSONData = function (hrefs) {
//     hrefs.forEach(function (url) {
//         var request = new Requests(url)
//         request.getRequest(this.seeCollection.bind);
//     })
// }
//
// NasaAPI.prototype.seeCollection= function(data){
//     console.log(data)
// }

// NasaAPI.prototype.setCollectionURLs = function (hrefs) {
//     this.colllectionURLs = hrefs;
// }.bind(this);

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






/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map