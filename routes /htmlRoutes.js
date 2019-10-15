module.exports = function(app){
    
    
    app.get("/home", function(req, res){
       return res.render("index");
    });

    // app.get("/burger", function(req, res){
    //     res.json(______);
    // });
}