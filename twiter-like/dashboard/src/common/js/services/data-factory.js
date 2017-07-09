define(["app"], function(myApp) {
    myApp.factory('dataService', ['$http', 'myAppSettings', function($http, myAppSettings) {
        
        var serviceBase = myAppSettings.serverBaseUri;
        
        var test = function(){
            return 'my name'
        }
        var loginUser = function(params){
            return $http({
                url: serviceBase+ '/login',
                method: "POST",
                params: params,
                withCredentials: true
            });
        }

        var signupUser = function(params){
            return $http({
                url: serviceBase+ '/signup',
                method: "POST",
                params: params,
                withCredentials: true
            });
        }

        var postTweet = function(params){
            return $http({
                url: serviceBase+ '/postTweet',
                method: "POST",
                params: params,
                withCredentials: true
            });
        }

        var getTweets = function(params){
            return $http({
                url: serviceBase+ '/getTweets',
                method: "GET",
                params: params,
                withCredentials: true
            });
        }

        return {
            loginUser : loginUser,
            signupUser : signupUser,
            postTweet : postTweet,
            getTweets : getTweets
        }
    }])
})
