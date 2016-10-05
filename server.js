var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose   = require('mongoose');
var Item = require('./app/models/items');

// connect to our database
mongoose.connect('mongodb://amituuush:lyst123!@ds025409.mlab.com:25409/lyst');

// creates special route for handling static files (.js, .html, .css). These will automatically be served from public directory when something is requested
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8088;
var router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

// ----------------------------------------------

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
    item.name = req.body.name; // did I do this part correctly?
    item.completed = false;

    item.save(function(err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  })

  .delete(function(req, res) {
    // Item.update(req.params.item_id, function(err, item) {
    //   if (err) {
    //     res.send(err);
    //   }
    //   res.json(item);
    // });
      Item.remove({}, function(err, items) {
        if (err) {
          res.send(err);
        }
        res.json(items);
      })
      //
      // Item.update({ $pull: { items: [] }}, function(err, affected){
      //   console.log('affected: ', affected);
      //   res.json("list cleared!");
      // });

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
