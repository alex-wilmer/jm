var Tune = require('./models/tune')
var Artist = require('./models/artist')

var fs = require('fs')

module.exports = function(app) {

	/*
	app.get('/api/authenticate', function(req, res) {
		if (req.body.password === 'password')
			res.json({status: 'ok'})
	})
	*/	

	//TUNES
	app.get('/api/tunes', function(req, res) {
		Tune.find(function(err, tunes){
			if (err) res.send(err)
			res.json(tunes)
		})
	})

	app.post('/api/tunes', function(req, res) {
		var tune = new Tune()
		tune.name = req.body.name
		tune.by = req.body.by
		tune.embedCode = req.body.embedCode
		tune.save(function(err){
			if (err) res.send(err)
			res.json({message: 'Tune created!'})
		})
	})

	app.put('/api/tunes/:tune_id', function(req, res) {
		Tune.findById(req.params.tune_id, function(err, tune) {
			if (err) res.send(err)
			tune.name = req.body.name
			tune.by = req.body.by
			tune.embedCode = req.body.embedCode
			tune.save(function(err){
				if (err) res.send(err)
				res.json({message: 'Tune updated!'})
			})
		})
	})

	app.delete('/api/tunes/:tune_id', function(req, res) {
		Tune.remove({_id: req.params.tune_id}, function(err){
			if (err) res.send(err)
			res.json({message: 'Tune deleted.'})
		})
	})

	//ARTISTS
	app.get('/api/artists', function(req, res) {
		Artist.find(function(err, artists){
			if (err) res.send(err)
			res.json(artists)
		})
	})

	app.get('/api/artists/:artistName', function(req, res) {
		var artistName = req.params.artistName.replace(/_/g, ' ')
		Artist.find({name: artistName}, function(err, artist) {
			if (err) res.send(err)
			res.json(artist)
		})
	})

	app.post('/api/artists', function(req, res) {
		var artist = new Artist()
		artist.name = req.body.name
		artist.imageUrl = req.body.imageUrl
		artist.bio = req.body.bio
		artist.save(function(err){
			if (err) res.send(err)
			res.json({message: 'Artist created!'})
		})
	})

	app.put('/api/artists/:artist_id', function(req, res) {
		Artist.findById(req.params.artist_id, function(err, artist) {
			if (err) res.send(err)
			artist.name = req.body.name
			artist.imageUrl = req.body.imageUrl
			artist.bio = req.body.bio
			artist.save(function(err){
				if (err) res.send(err)
				res.json({message: 'Artist updated!'})
			})
		})
	})

	app.delete('/api/artists/:artist_id', function(req, res) {
		Artist.remove({_id: req.params.artist_id}, function(err){
			if (err) res.send(err)
			res.json({message: 'Artist deleted.'})
		})
	})

	//SCIENCE
	app.post('/api/science', function(req, res) {
		fs.writeFile('./public/data/science/blurb.json', JSON.stringify(req.body), "utf8", function (err) {
		  if (err) throw err
		  console.log('Log saved!')
		})
	})

	//ADMIN FRONT END
	app.get('/admin', function(req, res) {
		res.sendfile('./public/admin/views/tunes.html')
	})

	app.get('/admin/:url', function(req, res) {
		res.sendfile('./public/admin/views/' + req.params.url + '.html')
	})

	// frontend routes 
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html') 
	})

}
