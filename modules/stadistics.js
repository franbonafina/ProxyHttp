var needle = require('needle');
var config = require('../config.js').config;

/*
 * This is an intention, maybe we can ask for req property (like req.ip) and send each one by separately to stadistics api,
 * and also maybe communicate to it with another protocol .
*/
var Stadistics = function(req) {	

	this.sendReq = function(req){
		needle.post(config.stadistics_url, req);
	}
}

exports.Stadistics = Stadistics ;