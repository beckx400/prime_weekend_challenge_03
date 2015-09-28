/**
 * Created by Dave on 9/25/15.
 */
var express = require('express');
var path = require('path');
var data = require("/Users/Dave/WebstormProjects/cohort-carousel/server/public/assets/data/data.json");
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/views/index.html");
});

app.get('/epsilon', function(req, res){
    res.send(data);
});


var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log("listening at port:" + port);
})