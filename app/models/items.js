var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  name: String,
  completed: Boolean,
  id: Number
});

var Item = mongoose.model('Item', ItemSchema);

module.exports = Item;
