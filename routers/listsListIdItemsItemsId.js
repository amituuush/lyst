var express = require('express');
var router = express.Router();
var List = require('../app/models/lists');


router.route('/lists/:list_id/items/:items_id')
    .put(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
          if (err) {
            res.send(err);
          }

          var item = list.items.id(req.params.items_id);
          item.completed = !item.completed;
          list.save(function (err, result) {
              if (err) {
                  res.send(err);
              }
              console.log(result);
              res.json(result);
          })
      })
  })

  .delete(function(req, res) {
      List.findById(req.params.list_id, function(err, list) {
          if (err) {
              res.send(err);
          }
          var item = list.items.id(req.params.items_id).remove();
          list.save(function(err, result) {
              if (err) {
                  res.send(err)
              }
              res.json('item was removed.');
          })
      })
  })

module.exports = router;
