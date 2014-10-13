var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Artist = new Schema({
	name: String
  , imageUrl: String
  , bio: String
})

module.exports = mongoose.model('Artist', Artist)
