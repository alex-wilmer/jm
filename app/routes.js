module.exports = function(app) {

	/*
	app.get('/api/authenticate', function(req, res) {
		if (req.body.password === 'password')
			res.json({status: 'ok'})
	})
	*/	

	
	// frontend routes 
	// route to handle all angular requests
	app.get('*', function(req, res) {
		res.sendfile('./public/views/index.html') 
	})

}
