const APIKey = function(){
  this.catrionaKey = 'QLn3BOptgkNzClciQuNWXzwV0AsUVKOCr01MbgFk';
  this.mattKey = "9AsiGWIMkVlJVOoljVmpT2mNvJNFPHSL1ZdTa74k";
};

APIKey.prototype.getCatrionaKey = function () {
  return this.catrionaKey;
};

APIKey.prototype.getMattKey = function () {
  return this.mattKey;
};

module.exports = APIKey;
