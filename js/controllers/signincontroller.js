'use strict';


  myapp.controller('SigninCtrl', ['$rootScope', '$scope','$firebaseAuth', '$location', function($rootScope, $scope,$firebaseAuth, $location){
  

  var ref = new Firebase("http://codexdb.firebaseio.com");
  $scope.auth = $firebaseAuth(ref, {path: "/main"});

  


  $scope.signup = function(){
    $rootScope.auth.createUser($scope.signupFormInfo);
  }
  
  $scope.login = function(callback){

  console.log('$firebaseAuth',$firebaseAuth(ref));
    console.log('$rootScope.auth',$rootScope.auth);
    console.log('$scope.loginFormInfo',$scope.loginFormInfo);
    $rootScope.email = null;
    $rootScope.pass = $scope.auth.$login('password', $scope.loginFormInfo);
    $rootScope.err = null;
    

  

  

  }

}])
  