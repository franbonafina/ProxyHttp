var meli = require('./lib/meli.js').Meli;
var sys = require("sys");
var config = require("../config.js");
var meliObject = new meli.Meli();

var express = require('express');
var app = express();

module.exports = function prox() {   

    this.getCategories = function(){
        meliObject.get('sites/' + config.config.site_id +'/categories', function (err, res) {
            return res;
        });
    };

    this.getUser = function(){
        meliObject.get('users/145925943', function (err, res) {
         return res;
     });
    };

    this.getUsers = function(){
        meliObject.get('users', {
            ids: [145925943, 145925951]
        }, function (err, res) {
            console.log(err, res);
        });
    };

    this.predictCategory = function(){
        var title = "Ipod%20Touch";
        meliObject.get('/sites/'+ config.config.site_id +'/category_predictor/predict?title=' + title, function(err,res){
            console.log(err,res);
        });
    };

    this.getTrends = function(){
        meliObject.get('/sites/'+ config.config.site_id +'/trends/search', function (err, res) {
         console.log(err, res);
     });
    };
}

