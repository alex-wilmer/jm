var mongoose = require('mongoose')
var Schema   = mongoose.Schema

var Tune = new Schema({
	name: String
  , by: String
  , embedCode: String
})

module.exports = mongoose.model('Tune', Tune)
