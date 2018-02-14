const Request = function (url) {
  this.url = url;
}

Request.prototype.getRequest = function(callback, dataObject) {
  var request = new XMLHttpRequest();
  request.open('GET', this.url);
  request.addEventListener('load', function () {
    if(this.status != 200){
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody, dataObject);
  });
  request.send();
}

Request.prototype.post = function (callback, body) {
  const request = new XMLHttpRequest();
  request.open('POST', this.url);
  request.setRequestHeader('Content-Type', 'application/json');
  request.addEventListener('load', function () {
    if(this.status != 201){
      return;
    }
    const responseBody = JSON.parse(this.responseText);
    callback(responseBody);
  });
  request.send(JSON.stringify(body));
}

Request.prototype.delete = function () {
  const request = new XMLHttpRequest();
  request.open('DELETE', this.url);
  request.addEventListener('load', function () {
    if(this.status != 204){
      return;
    }
  });
  request.send();
}


module.exports = Request;
