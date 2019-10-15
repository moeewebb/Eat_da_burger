var mysql = require("mysql"); 

var connectionObject = {
    host: "localhost",
    post: 3306,
    user: "root", 
    password: "1234",
    database: "burgers_db"
}; 

var connection = mysql.connection(connectionObject);

connection.connect(function(err){
    if (err) throw err; 
    console.log("connected as id " + connection.threadId);
    connection.end(); 

})

//make sure you export something

//module.export = connection