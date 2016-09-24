var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var mongoose   = require('mongoose');
var Item = require('./app/models/items');

mongoose.connect('mongodb://amituuush:lyst123!@ds025409.mlab.com:25409/lyst'); // connect to our database

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8088;

var router = express.Router();

router.use(function(req, res, next) {
  console.log('Something is happening.');
  next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
  res.json({message: 'welcome to our api!'});
});

router.route('/items')
  .post(function(req, res) {
    var item = new Item();
    item.name = req.body.name;

    item.save(function(err) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'Item created!'});
    });
  })

  .get(function(req, res) {
    Item.find(function(err, items) {
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
      item.name = req.body.name;
      item.save(function(err) {
        if (err) {
          res.send(err);
        }
        res.json({message: 'item name updated!'});
      });
    });
  })

  .delete(function(req, res) {
    Item.remove({_id: req.params.item_id}, function(err, item) {
      if (err) {
        res.send(err);
      }
      res.json({message: 'successfully removed item!'});
    });
  });

// REGISTER OUR ROUTES ----------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

app.listen(port);
console.log('Magic happens on port ' + port);

// app.use(express.static('public'));
//
// app.get('/items', function(request, response) {
//     response.json(storage.items);
// });
//
//
// // Firstly notice how the second argument to the post method is jsonParser. This tells express to use the jsonParser middleware when requests for the route are made. The middleware adds a new attribute, request.body, to the request object.
// app.post('/items', jsonParser, function(request, response) {
//     if (!('name' in request.body)) {
//         return response.sendStatus(400);
//     }
//     var item = storage.add(request.body.name);
//     response.status(201).json(item);
// });
//
// app.delete('/items/:id', jsonParser, function(request, response) {
//     storage.delete(Number(request.params.id));
//     response.sendStatus(204);
// })
//
// app.listen(process.env.PORT || 5000, process.env.IP);
//
//
//
// // -----------------------------------------------
//
// var Storage = {
//   add: function(name) {
//     var item = {name: name, id: this.setId};
//     this.items.push(item);
//     this.setId += 1;
//     return item;
//   },
//   delete: function(id) {
//      this.items = this.items.filter(function(item) {
//      return item.id !== id;
//    })
//    // Note that nothing is returned here, because the item was
//    /// removed and no longer exists in the Array
//   }
// };
//
// var createStorage = function() {
//   var storage = Object.create(Storage);
//   storage.items = [];
//   storage.setId = 1;
//   return storage;
// }
//
// var storage = createStorage();
//
// storage.add('Broad beans');
// storage.add('Tomatoes');
// storage.add('Peppers')
