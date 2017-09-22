
// API Key:c2b18c4761e5767ec4eb7eea5a62ad33 https://authenticjobs.com/api/thanks/  
// https://authenticjobs.com/api/docs#introduction
// https://authenticjobs.com/api/?api_key=753c5eb219e3c44bd7c08d3cb26ed783&method=aj.jobs.search&keywords=php,mysql&perpage=1
//753c5eb219e3c44bd7c08d3cb26ed783

/* LinkedIn  Client ID: Client ID:	86rplken48gyfd  Client Secret:	TEYKkjP106ZaDVqd 

*/


var google = require('google'); 
var querystring = require("querystring");
var request = require("request");
var date = require('./date.js')
var sDate = date.math.add(Date.now(),-15,'day');

var startdate =  date.timestamp(date.format(sDate));
var enddate = date.timestamp(Date.now());
module.exports = function(){

	
  


	/*
	function google(){ 
		

		return function(callback){
			var jsonarr = [];
			google.resultsPerPage = 25
			var nextCounter = 0
			google('node.js best practices', function (err, res){
			  if (err) console.error(err)
			 
			  for (var i = 0; i < res.links.length; ++i) {
			    var link = res.links[i];
			    console.log(link.title + ' - ' + link.href)
			    console.log(link.description + "\n")
			    var json = JSON.stringify({"title":link.title + ' - ' + link.href , "desc":link.description + "\n"}); 
			    jsonarr.push(json);
			  }
			 
			  if (nextCounter < 4) {
			    nextCounter += 1
			    if (res.next) res.next()
			  }

				 callback("{"+jsonarr.join(",")+"}");
			};
    }
    */
}

module.exports.authentic = function(){ 
		

			
		    var url = "https://authenticjobs.com/api/?";
			var vars = {api_key:"753c5eb219e3c44bd7c08d3cb26ed783",
						method:"aj.jobs.search",
						begin_date:startdate,
						end_date:date.enddate,
						keyword:"php,mysql",
						format:"JSON",
						page:1,
						perpage:100,
						telecommuting:1
					   }		   
    		var url =  url+querystring.stringify(vars);
    		return function (callback){ request(url,function(err,status,body){

    				callback(body);

    		}); } 

	

}