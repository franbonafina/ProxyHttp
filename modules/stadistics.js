var needle = require('needle');
var config = require('../config.js').config;

var Stadistics = function(req) {	

	this.sendReq = function(req){
		needle.post(config.stadistics_url, req);
	}
}

exports.Stadistics = Stadistics ;