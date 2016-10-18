const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const lists = require('./routers/lists');
const listsListId = require('./routers/listsListId');
const items = require('./routers/items');
const itemsCompleted = require('./routers/itemsCompleted');
const itemsItemId = require('./routers/itemsItemId');

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

app.use('/api', lists);
app.use('/api', listsListId);
// app.use('/api', items);
// app.use('/api', itemsCompleted);
// app.use('/api', itemsItemId);

app.listen(port);
console.log('Magic happens on port ' + port);
