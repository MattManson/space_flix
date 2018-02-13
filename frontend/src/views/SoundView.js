const SoundView = function (soundContainer) {
    this.soundContainer = soundContainer;
    this.soundCollection = null;
};

SoundView.prototype.renderSound = function(data) {
  let soundClipsCollection = data.results;
  this.soundCollection = soundClipsCollection;
  this.pickSound();
  // for (soundClip of soundClipsCollection) {
  //   let iframe = document.createElement('iframe');
  //   iframe.src = 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + soundClip.id;
  //   this.soundContainer.appendChild(iframe);
  // }
};

SoundView.prototype.pickSound = function() {
  console.log(this.soundCollection);
  let number = this.randomNumber();
};

SoundView.prototype.randomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min));
};

module.exports = SoundView;
