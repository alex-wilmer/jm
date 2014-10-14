var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Set = new Schema({
	name: String
  , downloadUrl: String
  , imageUrl: String
  , tracklist: String
})

module.exports = mongoose.model('Set', Set)
