var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.send('app working');

});
app.listen(3000, function() {
    console.log('Running on local host 3000');
});
