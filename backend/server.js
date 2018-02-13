const express = require('express');
const parser = require('body-parser');
const server = express();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cors = require('cors');
server.use(cors());

server.use(parser.json());
server.use(parser.urlencoded({extended:true}));