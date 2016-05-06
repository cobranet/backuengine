var express = require("express");
var app=express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

var Site = require('./models/site.js');

mongoose.connect('mongodb://localhost/uengine');

var db = mongoose.connection;

app.get('/',function(req,res){
    console.log(req);
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.send('Backend for Utopia engine');
}
       );
app.get('/sites',function(req,res){
    console.log(req);
    Site.getSites(function(err,sites){
	if (err){
	    throw err;
	}
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.json(sites);
    });
});

app.listen(5001);

console.log("Running on port 5001");
