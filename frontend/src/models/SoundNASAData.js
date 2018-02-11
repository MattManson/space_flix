const Request = require('../services/requests.js');

const SoundNASAData = function(url) {
  this.url = url;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.url);
  request.getRequest(this.showData);
};

SoundNASAData.prototype.showData = function(data) {
  console.log(data.items);
};

module.exports = SoundNASAData;
