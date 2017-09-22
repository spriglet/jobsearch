
var data_sources =  require('./datasources.js');


module.exports = function(wagner){ 
    var datasources = {"google":null  , "authentic":null}
    wagner.factory('jobs',function(){
		  
		    datasources.authentic = data_sources.authentic(); 

		    return function(callback){ 

				    datasources["authentic"] (function(body){
				    		var data = JSON.parse(body);
				    		
				    		var listings = data.listings.listing; 
				    		var counter = 0; 
				    		var relevant_data  = _.map(listings,function(listing){ return {"company":listing.company,"title":listing.title,"desc":listing.description} ;  }  )
				    		callback(relevant_data);

				    });

		    }
    });




}