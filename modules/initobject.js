var m = require('./config.js').config;
var m = require('./index.js');

var meliObj = new m.Meli(config.client_id, config.secret_key, [access_token], [refresh_token]);

var def = function () {
    console.log(arguments);
};