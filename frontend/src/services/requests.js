const Request = function (url) {
    this.url = url;
}

Request.prototype.getRequest = function() {
    var request = new XMLHttpRequest();
    request.open('GET', this.url);
    request.addEventListener('load', this.requestComplete);
    request.send();
}

Request.prototype.requestComplete = function(){
    if(this.status !== 200){
        return;
    }
    var jsonString = this.responseText;
    var searchResults = JSON.parse(jsonString);
    var unconvertedString = searchResults.collection.items[0].href;
    var changedString = unconvertedString.replace(/ /g,"%20");
    console.log(unconvertedString);
    console.log(changedString);

    // var jsonString = JSON.stringify(videos);
    // localStorage.setItem('videos', jsonString);
}

// Request.getHrefs = function (searchResults) {
//     var hrefs = videos.map(searchResults = searchResults
// }

module.exports = Request;




