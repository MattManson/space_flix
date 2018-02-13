const SoundView = function (soundContainer) {
    this.soundContainer = soundContainer;
};

SoundView.prototype.renderSound = function(data) {
  let soundClipsCollection = data.results;
  console.log(soundClipsCollection);
  for (soundClip of soundClipsCollection) {
    let iframe = document.createElement('iframe');
    iframe.src = 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/' + soundClip.id;
    this.soundContainer.appendChild(iframe);
  }
};

SoundView.prototype.clear = function () {
  console.log("clear function called");
};

module.exports = SoundView;
