var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Science = new Schema({
	blurb: String
  ,	images: [String]
})

module.exports = mongoose.model('Science', Science)
