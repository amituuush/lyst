var FacebookStrategy = require('passport-facebook').Strategy;
var configAuth = require('./auth');


module.exports = function(passport) {

	passport.serializeUser(function(user, done){
		done(null, user);
	});

	passport.deserializeUser(function(user, done){
		done(null, user);
	});

	passport.use(new FacebookStrategy({
	    clientID: configAuth.facebookAuth.clientID,
	    clientSecret: configAuth.facebookAuth.clientSecret,
	    callbackURL: configAuth.facebookAuth.callbackURL
	  },
	  function(accessToken, refreshToken, profile, done) {
		  console.log(profile);
		  done(null, profile);
	    }
	));


};
