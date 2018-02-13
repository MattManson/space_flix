const VideoView = function (videoContainer) {
  this.videoContainer = videoContainer;
}

VideoView.prototype.showThumbnail = function (correctVideoURL, correctThumbnailURL, dataObject) {
    let frontPageContainer = document.querySelector('#front-page');
    frontPageContainer.className = 'invisible';
    let viewPageContainer= document.querySelector('#view-page');
    viewPageContainer.className = 'invisible';
    let viewMediaContainer= document.querySelector('#view-media');
    viewMediaContainer.className = 'visible';
    var imgThumbNail = document.querySelector('#thumbnail');
    console.log(correctThumbnailURL);
    imgThumbNail.src = correctThumbnailURL;
    imgThumbNail.onclick = function () {
        window.location.href = correctVideoURL;
    };
    var title = document.querySelector('#title');
    title.innerText = dataObject.title;
    var description = document.querySelector('#description');
    description.innerText = dataObject.description;

}

VideoView.prototype.videoRender = function (data, dataObject) {
    var substring = "mov";
    var correctVideoURL = data[0].replace(/ /g, "%20");
    if (!correctVideoURL.includes(substring)) {
        var correctThumbNailURL = data[data.length - 2].replace(/ /g, "%20");
        var img = document.createElement('img');
        img.src = correctThumbNailURL;
        img.onclick = function () {
            this.showThumbnail(correctVideoURL, correctThumbNailURL, dataObject);
        }.bind(this);
        var titleDiv = document.createElement('div');
        titleDiv.className = 'text-block';
        var titleP = document.createElement('p');
        titleP.innerText = dataObject.title;
        titleDiv.appendChild(titleP);
        titleDiv.appendChild(img)
        this.videoContainer.appendChild(titleDiv);
    }
}


VideoView.prototype.clear = function(){
      this.videoContainer.innerText = " ";
    }

module.exports = VideoView;
