// AIzaSyAUbGG_--2XHfWftYxyJX-OLJOALWiwU3M
GLOBAL._ = require('underscore');
var wagner = require('wagner-core');
const express = require('express')
const app = express();
var job_data = require('./server/jobdata.js')(wagner);





app.get('/jobs', function (req, res) {

	wagner.invoke(function(jobs){

		
		jobs(function(body){   

			res.send(body);
		})
		
		
	});

	 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})