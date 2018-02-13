const Request = require('../services/requests.js');

const SoundNASAData = function(searchData) {
  this.url = 'http://localhost:3000/api/nasa/planetary/sounds/' + searchData;
  this.showData = null;
}

SoundNASAData.prototype.getData = function() {
  let request = new Request(this.url);
  console.log(request);
  request.getRequest(this.showData);
};

module.exports = SoundNASAData;
