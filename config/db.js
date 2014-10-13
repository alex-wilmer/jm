module.exports = {
	url : process.env.PORT
	? 'mongodb://azium:musicwizard3@ds039000.mongolab.com:39000/bears'
	: 'mongodb://localhost/jm'
}
