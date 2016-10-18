var express = require('express');
var router = express.Router();
var List = require('../app/models/lists');


router.route('/lists')
  .get(function(req, res) {
    List.find(function(err, items) {
      if (err) {
        res.send(err);
      }
      console.log(items);
      res.json(items);
    })
  })

  .post(function(req, res) {
    var list = new List();
    list.name = req.body.name;
    list.items = [];
    console.log(req.body);
    list.save(function(err, result) {
      if (err) {
        res.send(err);
      }
      res.json(result);
    });
  })

  .delete(function(req, res) {
      List.remove({}, function(err, items) {
        if (err) {
          res.send(err);
        }
        res.json(items);
      })
  });


module.exports = router;
