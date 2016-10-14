var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var session = require('express-session');
var passport = require('passport');
var router = require('./routers/api')

const MongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://amituuush:lyst123!@ds025409.mlab.com:25409/lyst'
mongoose.Promise = global.Promise;
mongoose.connect(MongoURI);

require('./config/passport')(passport);
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
require('./app/routes.js')(app, passport);

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
// creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 7007;
// REGISTER OUR ROUTES ----------------------
// all of our routes will be prefixed with /api

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);
