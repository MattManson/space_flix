const Request = require('../services/requests.js');
const ApiKey = require('../API_key');

const SoundNASAData = function() {
  this.key = new ApiKey().getKey();
  this.url = 'https://api.nasa.gov/planetary/sounds?q=mars&api_key=' + this.key;
  this.showData = null;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.url);
  request.getRequest(this.showData);
};

module.exports = SoundNASAData;
