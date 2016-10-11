const path = require('path');

module.exports = function(app, passport){
	app.get('/', function(req, res){
		if (req.user) {
			res.sendFile(path.join(__dirname, '../public', 'lyst.html'));
		} else {
			res.sendFile(path.join(__dirname, '../public', 'login.html'));
		}
	});

	app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

	app.get('/auth/facebook/callback',
	  passport.authenticate('facebook', { successRedirect: '/',
	                                      failureRedirect: '/' }));

};
