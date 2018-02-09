const NasaAPI = function (url) {
    this.url = url;
    this.collletionURLS = [];
}

NasaAPI.prototype.requestComplete = function(){
    if(this.status !== 200){
        return;
    }
    var jsonString = this.responseText;
    var videos = JSON.parse(jsonString);
    var unconvertedString = videos.collection.items[0].href;
    var changedString = unconvertedString.replace(/ /g,"%20");
    console.log(unconvertedString);
    console.log(changedString);

    // var jsonString = JSON.stringify(videos);
    // localStorage.setItem('videos', jsonString);
}

NasaAPI.prototype.makeRequest = function() {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', this.requestComplete);
    request.send();
}

module.exports = NasaAPI;