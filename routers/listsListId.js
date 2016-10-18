var express = require('express');
var router = express.Router();
var List = require('../app/models/lists');

router.route('/lists/:list_id')
  .get(function(req, res) {
    List.findById(req.params.list_id, function(err, list) {
      if (err) {
        res.send(err);
      }
      res.json(list);
    })
  })

  .put(function(req, res) {
    List.findById(req.params.list_id, function(err, list) {
      if (err) {
        res.send(err);
      }
      list.completed = !list.completed;
      list.save(function(err, result) {
        if (err) {
          res.send(err);
        }
        res.json(result);
      });
    });
  })

  .delete(function(req, res) {
    List.findByIdAndRemove(req.params.list_id, function(err, list) {
      if (err) {
        res.send(err);
      }
      res.json(list);
    });
  });

module.exports = router;
