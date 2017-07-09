define([
    'app',
    'dataService'
], function (myApp, dataService) {

    myApp.register.controller('LoginCtrl', ["$scope", "$state", "dataService", function($scope, $state, dataService){
        $scope.loginVisible = true;
        $scope.loginData = {
            username : '',
            password : ''
        }
        $scope.signupData = {
            username : '',
            password : '',
            email : '',
            phonenumber : ''
        }
        $scope.showLogin = function(showLogin){
            $scope.loginVisible = showLogin
        }

        $scope.login = function(){
            dataService.loginUser($scope.loginData)
                .then(function(){

                }, function(){

                })
        }
        $scope.signup = function(){
            dataService.signupUser($scope.signupData)
                .then(function(){

                }, function(){
                    
                })
        }
    }])
})