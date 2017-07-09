(function(){
    //node module
    var express = require('express');
    var bodyParser = require('body-parser');
    var session = require('express-session');
    var cookieParser = require('cookie-parser');

    //custom module
    Promise.all([
        require('./server/adapters/mongo.js'),
        require('./server/adapters/mysql.js'),
    ]).then(function(dbs){
        var db = {
            mongo : dbs[0],
            mysql : dbs[1]
        }
        var app = express()
        app.use(bodyParser.urlencoded({'extended':'true'}));
        app.use(bodyParser.json());
        app.use(bodyParser.json({ type:  'application/vnd.api+json' }));
        app.use( bodyParser.json() );       // to support JSON-encoded bodies
        
        app.use(cookieParser());
        app.use(session({
            key: 'app.sess',
            secret: '1234567890QWERTY'
        }))
        
        app.use('/', express.static(__dirname + '/' + 'dashboard'))
        

        app.use(require('./router')(app, db))
        
        var port = process.env.PORT || '4000'
            
        app.listen(port)
                            console.log('app running on port:', port)
    }, function(error){
                            console.log('mongo connection error', error)
    })
}())