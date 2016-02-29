var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static('public'));

app.get('/', function(request, response) {
    response.send('app working');

});
app.listen(app.get('port'), function() {
    console.log('Running on local host 3000');
});
