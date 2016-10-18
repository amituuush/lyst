var express = require('express');
var router = express.Router();
var List = require('../app/models/lists');

router.route('/list/:list_id/items')
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
            completed: req.body.completed
        }}},
        {safe: true, new : true},
        function(err, model) {
            err ? res.send(err) : res.json(model)
        }
    );
    })


module.exports = router;
