var express = require("express");
var app = express();
var exphbs = require("express-handlebars"); 
app.use(express.static('public'));
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8085;

// Sets up the Express app to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


var routes = require('./controllers/burgercontroller.js')
app.use(routes);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


//config if you use use the files in there