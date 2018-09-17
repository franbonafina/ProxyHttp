
/**
 * Here the 'main' function of the app to run in nodeJs , using Express .
 * Import configuration file, and proxy module .
 */
var config = require("./config.js").config;
var proxy = require("./modules/proxy.js");
var stadistics = require("./modules/stadistics.js");

var express = require('express');
var app = express();

/**
 * APPLICATION -> Set the main view .
 * @VIEW
 */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

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
	console.log(req);
	new stadistics.Stadistics(req);
	next();
});
app.use(express.static(__dirname + '/assets'));


/**
 * APPLICATION -> HTTP METHOD 
 *
 * @HTTP-Method
 * @param {String} path
 * @value {string|number} client_id
 * @value {string} client_secret
 * @value {string} [access_token]
 * @value {string} [refresh_token]
 */
app.get('/', function (req, res) {
	res.redirect(config.api_root_url);
});

app.get('/Users', function(req, res){	
	res.json(new prox().getUsers());
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
