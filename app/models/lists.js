var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ListSchema = new Schema({
  name: String,
  items: [{
      name: String,
      completed: Boolean,
      priority: String,
      dueDate: String
  }]

});

var List = mongoose.model('List', ListSchema);

module.exports = List;
