module.exports = (function(){
    var express = require('express');
    var builder = function(app, db){
        var router = express.Router()
        
        router.get('/dashboard', function(request, response){
            console.log('__dirname', __dirname)
            response.sendFile(__dirname + '/dashboard/src/index.html')
        })
        
        app.post('/test', function(request, response){
            console.log('headers')
            console.log('headers', request.headers.authorization)
            response.status(200).send('hhiiii')
        })

        // app.use('/auth', require('./server/auth/router.js')(app, db))
        
        app.use('/api', require('./server/api/router.js')(app, db))
        
        return router
    }

    return builder
}())