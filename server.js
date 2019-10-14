var express = require("express");
var app = express();

//app.use(express.static(__dirname + '/public'));
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//var routes = require('/routes/apiRoutes.js');
//app.use('/', apiRoutes);
//require("./routes/apiRoutes")(app);
//require("./routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
