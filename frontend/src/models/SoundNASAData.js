const Request = require('../services/requests.js');

const SoundNASAData = function(url) {
  this.url
}

SoundNASAData.prototype.getData = function () {
  let request = new Request(this.url);
  request.getRequest(showData);
};

SoundNASAData.prototype.showData = function (data) {
  
};

module.exports = SoundNASAData;

https://api.nasa.gov/planetary/sounds?q=apollo&api_key=QLn3BOptgkNzClciQuNWXzwV0AsUVKOCr01MbgFk
