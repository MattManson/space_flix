const VideoView = function (container) {
  this.container = container;
}

VideoView.prototype.render = function (data, title) {
  console.log(title)
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
    var titleDiv = document.createElement('div');
    titleDiv.class = 'text-block';
    var titleP = document.createElement('p');
    titleP.innerText = title;
    this.container.appendChild(img);
    titleDiv.appendChild(titleP);
    this.container.appendChild(titleDiv)
  }
};

VideoView.prototype.clear = function(){
  this.container.innerText = " ";
}

module.exports = VideoView;
