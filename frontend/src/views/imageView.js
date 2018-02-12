const ImageView = function (imageContainer) {
    this.imageContainer = imageContainer;
}

ImageView.prototype.imageRender = function (data, title) {
    var correctImageURL = data[0].replace(/ /g,"%20");
    var correctThumbNailURL = data[data.length-2].replace(/ /g,"%20");
    var img = document.createElement('img');
    img.width = 320;
    img.height = 240;
    img.src = correctThumbNailURL;
    img.onclick = function() {
        window.location.href = correctImageURL;
    };
    var titleDiv = document.createElement('div');
    titleDiv.className = 'text-block';
    console.log(titleDiv.className);
    var titleP = document.createElement('p');
    titleP.innerText = title;
    titleDiv.appendChild(titleP);
    titleDiv.appendChild(img)
    this.imageContainer.appendChild(titleDiv);
};

ImageView.prototype.clear = function(){
    console.log("clear function called");
    this.imageContainer.innerText = " ";
}

module.exports = ImageView;
