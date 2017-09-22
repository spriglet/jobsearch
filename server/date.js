var dateMath  = require('date-arithmetic');



module.exports.timestamp = function(date){

	return Math.floor(this.date / 1000);

};

module.exports.format = function(date){

	 return dateMath.year(date).toString()+"-"+dateMath.month(date).toString()+"-"+dateMath.day(date).toString() ;

}

module.exports.math = dateMath