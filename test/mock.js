
const loadtest = require('loadtest');
const config = require('../config.js');


const options = {
	url: 'http://localhost:5000',
	concurrent: 5,
	method: 'GET',
	body:'',
	requestsPerSecond:5,
	maxSeconds:30,
	requestGenerator: (params, options, client, callback) => {			
		options.headers['Content-Type'] = 'application/json';		
		options.path = '/sites/'+ config.config.site_id +'/trends/search';
		const request = client(options, callback);		
		return request;
	}
};

loadtest.loadTest(options, (error, results) => {
	if (error) {
		return console.error('Got an error: %s', error);
	}
	console.log(results);
	console.log('Tests run successfully');
});