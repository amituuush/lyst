var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var Storage = {
  add: function(name) {
    var item = {name: name, id: this.setId};
    this.items.push(item);
    this.setId += 1;
    return item;
  },
  delete: function(id) {
     this.items = this.items.filter(function(item) {
     return item.id !== id;
   })
   // Note that nothing is returned here, because the item was
   // removed and no longer exists in the Array
  }
};

var createStorage = function() {
  var storage = Object.create(Storage);
  storage.items = [];
  storage.setId = 1;
  return storage;
}

var storage = createStorage();

storage.add('Broad beans');
storage.add('Tomatoes');
storage.add('Peppers');

var app = express();
app.use(express.static('public'));

app.get('/items', function(request, response) {
    response.json(storage.items);
});


// Firstly notice how the second argument to the post method is jsonParser. This tells express to use the jsonParser middleware when requests for the route are made. The middleware adds a new attribute, request.body, to the request object.
app.post('/items', jsonParser, function(request, response) {
    if (!('name' in request.body)) {
        return response.sendStatus(400);
    }
    var item = storage.add(request.body.name);
    response.status(201).json(item);
});

app.delete('/items/:id', jsonParser, function(request, response) {
    storage.delete(Number(request.params.id));
    response.sendStatus(204);
})

app.listen(process.env.PORT || 5000, process.env.IP);
