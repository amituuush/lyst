var express = require('express');
var router = express.Router();
var Item = require('../app/models/items');

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
      item.completed = !item.completed;
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
