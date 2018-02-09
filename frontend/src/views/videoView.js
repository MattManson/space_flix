const VideoView = function (container) {
    this.container = container;
}

VideoView.prototype.render = function (data) {
        var correctVideoURL = data[0].replace(/ /g,"%20");
        var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
        console.log(correctThumbNailURL);
        var img = document.createElement('img');
        img.width = 320;
        img.height = 240;
        img.src = correctThumbNailURL;
        img.onclick = function() {
            window.location.href = correctVideoURL;
        };
        this.container.appendChild(img);
}

module.exports = VideoView;