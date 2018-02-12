const VideoView = function (videoContainer) {
  this.videoContainer = videoContainer;
}

VideoView.prototype.videoRender = function (data, title) {
  var substring = "mov";
  var correctVideoURL = data[0].replace(/ /g,"%20");
  if (!correctVideoURL.includes(substring)){
    var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
    var img = document.createElement('img');
    img.src = " ";
    img.src = correctThumbNailURL;
    img.onclick = function() {
      window.location.href = correctVideoURL;
    };
    var titleDiv = document.createElement('div');
    titleDiv.className = 'text-block';
    console.log(titleDiv.className);
    var titleP = document.createElement('p');
    titleP.innerText = title;
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(img)
    this.videoContainer.appendChild(titleDiv);
  }
};

VideoView.prototype.clear = function(){
  this.videoContainer.innerText = " ";
}

module.exports = VideoView;
