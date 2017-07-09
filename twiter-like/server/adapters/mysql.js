module.exports = (function(){

    var config = require('../../config/config.json')

    var mysql = require('mysql');

    return new Promise(function(success, failure){
        var connection = mysql.createConnection({
            host     : config["mysql-host"],
            user     : config["mysql-user"],
            password : config["mysql-password"],
            database : config["mysql-database"]
        });
        connection.connect();
        success(connection)
    })
}())