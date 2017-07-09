define([
    'app',
    'dataService'
], function (myApp) {
    myApp.register.controller('HomeCtrl', ["$scope", "$state", "dataService", function($scope, $state, dataService){
        $scope.tweets = []
        $scope.postTweet = function(){
            dataService.postTweet({
                tweetText : $scope.tweetText,
                user_id : ''
            }).then(function(){

            }, function(){
                 
            })
        }

        var getTweets = function(){
            dataService.getTweets({
                tweetText : $scope.tweetText,
                user_id : ''
            }).then(function(data){
                console.log('tweets', data)
            }, function(){
                 
            })
            return dataService.getTweets()
        }

        var init = function(){
            getTweets().then(function(tweetData){
                console.log('awdiagdiuahwdhuai', tweetData.data)
                $scope.tweets = tweetData.data.data
            }, function(){

            })
        }
        init()
    }])
})