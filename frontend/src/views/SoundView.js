const SoundView = function (soundContainer) {
    this.soundContainer = soundContainer;
};

SoundView.prototype.renderSound = function (data) {
  console.log(data);
};

module.exports = SoundView;
