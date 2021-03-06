
/**
 * Here the 'main' function of the app to run in nodeJs , using Express .
 * Import configuration file, and proxy module .
 */
var config = require("./config.js").config;
var meli = require('./lib/meli.js');
var config = require("./config.js");

var meliObject = new meli.Meli();
var stadistics = require("./modules/stadistics.js");

var express = require('express');
var app = express();


/**
 * MiddleWare
 *
 * @midleware
 * @param {request} req
 * @value {string|number} client_id
 * @value {string} client_secret
 * @value {string} [access_token]
 * @value {string} [refresh_token]
 * @
 */
app.use(function(req, res, next){	
	new stadistics.Stadistics(req);
	next();
});

app.use(function(req,res,next){		
	//control(path);
	console.log(req.path);
	console.log(req.query);
	meliObject.get(req.path, req.query, function (er, r) {
       	res.json(r);
     });	
})

/**
 * APPLICATION -> SERVER 
 *
 * @server
 * @param {port} process.env.PORT
 * @param {host} localhost
 */
app.listen(process.env.PORT || 5000, function () {
    console.log('Example app listening on port 5000!');
});
