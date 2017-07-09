module.exports = (function(){
    var builder = function(app, db){
        var express = require('express');
        
        var router = express.Router()
        app.use(function(req, res, next){
            console.log('booodddyy', req.url, req.body)
            next()
        })
        router.get('/getTweets', require('./getTweets/api.js')(db).api)


        router.post('/postTweet', require('./postTweet/api.js')(db).api)
        router.post('/signup', require('./signup/api.js')(db).api)
        router.post('/login', require('./login/api.js')(db).api)

        return router
    }

    return builder
}())