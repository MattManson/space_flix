const express = require('express');
const server = express();
const request = require('request');
server.use(express.static('build'));
server.use(express.static('public'));

server.get('/api/nasa/planetary/sounds/:planet',function(req,res) {
  const url = `https://api.nasa.gov/planetary/sounds?q=${req.params.planet}&api_key=QLn3BOptgkNzClciQuNWXzwV0AsUVKOCr01MbgFk`;
  request(url, function(error, request, responseBody) {
    if(error) {
      res.status(500);
      res.send();
    }
    res.send(responseBody);
  });
})




server.listen(3000, function(){
    console.log("You are listening on 3000");
});
