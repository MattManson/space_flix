const VideoView = function (container) {
  this.container = container;
}

VideoView.prototype.render = function (data) {
  var substring = "mov";
  var correctVideoURL = data[0].replace(/ /g,"%20");
  // console.log(correctVideoURL);
  if (!correctVideoURL.includes(substring)){
    var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
    var img = document.createElement('img');
    img.src = " "
    img.width = 320;
    img.height = 240;
    img.src = correctThumbNailURL;
    img.onclick = function() {
      window.location.href = correctVideoURL;
    };
    this.container.appendChild(img);
  }
};

VideoView.prototype.clear = function(){
  this.container.innerText = " ";
}

module.exports = VideoView;
