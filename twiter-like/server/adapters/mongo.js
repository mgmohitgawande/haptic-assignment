module.exports = (function(){

    var config = require('../../config/config.json')

    var MongoClient = require('mongodb').MongoClient;
    var url = config.mongoUrl
    return new Promise(function(success, failure){
        MongoClient.connect(url).then(function(db){
            success(db)
        }, function(error){
            failure(error)
        })
    })
}())