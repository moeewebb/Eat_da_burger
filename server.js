var http = require('express');

var app = express();
var PORT = process.env.PORT || 3002;
//app.get('/', function(req, res){
  //res.send('hello world');
//});
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});

var routes = require('./routes/apiRoutes.js');
app.use('/',routes);

