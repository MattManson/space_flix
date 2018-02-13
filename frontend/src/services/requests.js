const Request = function (url) {
    this.videoUrl = url;
}

Request.prototype.getRequest = function(callback, dataObject) {
    var request = new XMLHttpRequest();
    request.open('GET', this.videoUrl);
    request.addEventListener('load', function () {
        if(this.status != 200){
            return;
        }
        const responseBody = JSON.parse(this.responseText);
        callback(responseBody, dataObject);
    });
    request.send();
}


module.exports = Request;
