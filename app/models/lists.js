var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  completed: Boolean,
  priority: String,
  dueDate: String
});

var ListSchema = new Schema({
  name: String,
  items: [ItemSchema]

});

// var Item = mongoose.model('Item', ItemSchema);

var List = mongoose.model('List', ListSchema);

module.exports = List;
