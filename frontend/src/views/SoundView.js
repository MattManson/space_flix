const SoundView = function (soundContainer) {
    this.soundContainer = soundContainer;
    this.soundCollection = null;
};

SoundView.prototype.renderSound = function(data) {
  let soundClipsCollection = data.results;
  this.soundCollection = soundClipsCollection;
  let soundClip = this.pickSound();
  console.log(soundClip);
  let iframe = document.createElement('iframe');
  iframe.src = 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + soundClip.id;
  iframe.id = "space-sound-frame";
  this.soundContainer.appendChild(iframe);
};

SoundView.prototype.pickSound = function() {
  let number = this.randomNumber(0, 63);
  return this.soundCollection[number];
};

SoundView.prototype.randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min));
};

module.exports = SoundView;
