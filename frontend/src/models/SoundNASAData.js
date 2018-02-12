const Request = require('../services/requests.js');

const SoundNASAData = function(url) {
  this.videoUrl = url;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.videoUrl);
  request.getRequest(this.showData);
};

SoundNASAData.prototype.showData = function(data) {
  console.log(data.items);
};

module.exports = SoundNASAData;
