var express = require('express');
var router = express.Router();
var Item = require('../app/models/items');


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
    item.priority = req.body.priority;
    item.dueDate = req.body.dueDate;
    item.completed = false;
    console.log(req.body);
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


module.exports = router;
