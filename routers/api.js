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

module.exports = router;
