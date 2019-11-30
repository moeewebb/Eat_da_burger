var mysql = require("mysql"); 

var connectionObject = {
    host: "localhost",
    port: 3306,
    user: "root", 
    password: "1234",
    database: "burgers_db"
}; 

var connection = mysql.createConnection(connectionObject);

connection.connect(function(err){
    if (err) throw err; 
    console.log("connected as id " + connection.threadId);
    connection.end(); 

})

//make sure you export something

module.exports = connection