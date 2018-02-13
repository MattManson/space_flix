const Request = require('../services/requests.js');

const SoundNASAData = function() {
  this.url = 'http://localhost:3000/api/nasa/planetary/sounds/mars';
  this.showData = null;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.url);
  request.getRequest(this.showData);
};

module.exports = SoundNASAData;
