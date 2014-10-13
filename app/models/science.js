var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Science = new Schema({
	name: String
  , imageUrl: String
  , bio: String
})

module.exports = mongoose.model('Science', Science)
