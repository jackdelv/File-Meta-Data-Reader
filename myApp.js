var express = require('express');
var app = express();
app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res, next) {res.sendFile(__dirname + "/views/index.html")});
