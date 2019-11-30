var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')
router.get('/',function(req,res){
    burger.all(function(data){
        var objectAll = {
            burgers: data
        }
    })
    console.log(objectAll)
    res.render('index')
})
router.get('/api/burgers',function(req,res){
    burger.all(function(data){
        var objectAll = {
            burgers: data
        }
    })
    res.json(objectAll)
})
router.post('/api/burgers', function (res, req){
burger.create(req.body.burger_name, function(result){
    res.json({id:result.insertId})
})
})

module.exports = router