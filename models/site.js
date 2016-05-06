/*global Date */
var mongoose = require('mongoose');
var siteSchema = mongoose.Schema(
    { name: {
	type: String,
	required: true
      },
      image: {
	  type: String,
	  required: String
      },
      create_date: {
	  type: Date,
	  default: Date.now
      }
    }
);

module.exports = mongoose.model('Site',siteSchema);
var Site  =module.exports;

module.exports.getSites = function(callback){
    Site.find(callback);
};
