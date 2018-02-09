const express = require('express');
const server = express();
server.use(express.static('build'));
server.use(express.static('src/style'));




server.listen(3000, function(){
    console.log("You are listening on 3000");
});
