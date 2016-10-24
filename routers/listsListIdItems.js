var express = require('express');
var router = express.Router();
var List = require('../app/models/lists');

router.route('/lists/:list_id/items')
    .get(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
          if (err) {
            res.send(err);
          }
          res.json(list.items);
        })
    })

    .post(function(req, res) {
        console.log(req.body);
        List.findByIdAndUpdate(req.params.list_id,
        {$push: {"items": {
            name: req.body.name,
            priority: req.body.priority,
            dueDate: req.body.dueDate,
            completed: false
        }}},
        {safe: true, new : true},
        function(err, model) {
            err ? res.send(err) : res.json(model)
        }
    );
    })


router.route('/lists/:list_id/items/:items_id')
    .put(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
          if (err) {
            res.send(err);
          }
          var updatedItems = list.items.map(
              function(item) {
                  if (item._id === req.params.items_id) {
                      item.completed = !item.completed;
                  }
              }
          )
          res.json(updatedItems);
        })
        // 
        // List.findByIdAndUpdate(req.params.list_id, {'$set': {
        //     'items.$.name': 'updated item2',
        //     'items.$.value': 'two updated'
        // }}, function(err) { }
        //

        // Item.findById(req.params.item_id, function(err, item) {
        //   if (err) {
        //     res.send(err);
        //   }
        //   item.completed = !item.completed;
        //   item.save(function(err, result) {
        //     if (err) {
        //       res.send(err);
        //     }
        //     res.json(result);
        //   });
        // });
      })

module.exports = router;
