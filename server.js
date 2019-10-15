var express = require("express");
var app = express();
var exphbs = require("express-handlebars"); 
//app.use(express.static(__dirname + '/public'));
// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8087;

// Sets up the Express app to handle data parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// require("./routes/htmlRoutes.js")(app);
//var routes = require('/routes/apiRoutes.js');
//app.use('/', apiRoutes);
//require("./routes/apiRoutes")(app);

app.get("/", function(req, res){
  res.render("index");
});



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


//config if you use use the files in there