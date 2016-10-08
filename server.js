var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose = require('mongoose');
var Item = require('./app/models/items');

MongoURI = process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://amituuush:lyst123!@ds025409.mlab.com:25409/lyst'

// connect to our database
mongoose.connect(MongoURI);

// creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 7007;
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// --------------------------------------------
// --------------------------------------------
// --------------------------------------------

var cookieParser = require('cookie-parser');
var session = require('express-session');
var morgan = require('morgan');
var passport = require('passport');
var flash = require('connect-flash');


var configDB = require('./config/database.js');
// mongoose.connect(configDB.url);
require('./config/passport')(passport);

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: false}));
app.use(session({secret: 'anystringoftext',
				 saveUninitialized: true,
				 resave: true}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session




app.set('view engine', 'ejs');


// app.use('/', function(req, res){
// 	res.send('Our First Express program!');
// 	console.log(req.cookies);
// 	console.log('================');
// 	console.log(req.session);
// });

require('./app/routes.js')(app, passport);


// --------------------------------------------
// --------------------------------------------
// --------------------------------------------
router.use(function(req, res, next) { // every api call will run through this
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({message: 'welcome to our api!'});
});

router.route('/items')
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) {
        res.send(err);
      }
      res.json(items);
    })
  })

  .post(function(req, res) {
    var item = new Item();
    item.name = req.body.name;
    item.completed = false;

    item.save(function(err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  })

  .delete(function(req, res) {
      Item.remove({}, function(err, items) {
        if (err) {
          res.send(err);
        }
        res.json(items);
      })
  });

router.route('/items/completed')
    .delete(function(req, res) {
        Item.remove({completed: true}, function(err, items) {
          if (err) {
            res.send(err);
          }
          res.json(items);
        })
    });



router.route('/items/:item_id')
  .get(function(req, res) {
    Item.findById(req.params.item_id, function(err, item) {
      if (err) {
        res.send(err);
      }
      res.json(item);
    })
  })

  .put(function(req, res) {
    Item.findById(req.params.item_id, function(err, item) {
      if (err) {
        res.send(err);
      }
      item.completed = true;
      item.save(function(err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      });
    });
  })

  .delete(function(req, res) {
    Item.findByIdAndRemove(req.params.item_id, function(err, item) {
      if (err) {
        res.send(err);
      }
      res.json(item);
    });
  });


// REGISTER OUR ROUTES ----------------------
// all of our routes will be prefixed with /api

app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

// how would I create another parent URI like /api?
// could we further modularize this by route?
// tell Thomas about submitting multiple report typos on Thinkful
