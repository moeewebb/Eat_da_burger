var orm = require('../config/orm.js')

var burger = {
    all: function(cb) {
        orm.all('burgers', function (res){
            cb(res)
        })
    },
    create: function(vals, cb) {
        orm.create('burgers', vals, function (res){
            cb(res)
        })
    },
    update: function(vals, condition, cb) {
        orm.update('burgers', vals, condition, function (res){
            cb(res)
        })
    }
}
module.exports = burger
