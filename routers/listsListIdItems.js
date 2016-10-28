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
        List.findByIdAndUpdate(req.params.list_id,
        {$push: {"items": {
            name: req.body.name,
            priority: req.body.priority,
            dueDate: req.body.dueDate,
            completed: false
        }}},
        {safe: true, new : true},
        function(err, model) {
            err ? res.send(err) : res.json(model.items[model.items.length - 1]);
        }
    );
    })

    .delete(function(req, res) {
        List.findById(req.params.list_id, function(err, list) {
            if (err) {
                res.send(err);
            }
            var removedCompletedItems = list.items.filter(
                function(item) {
                    return item.completed === false;
            });
            console.log(removedCompletedItems);
            list.items = removedCompletedItems;
            // console.log(list);
            list.save(function(err, result) {
                if (err) {
                    res.send(err);
                }
                console.log(result);
                res.json('completed items removed');
            })
        })
    });

module.exports = router;
