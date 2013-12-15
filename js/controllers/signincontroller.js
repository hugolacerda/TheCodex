'use strict';


  myapp.controller('SigninCtrl', ['$rootScope', '$scope','$firebaseAuth', '$location', function($rootScope, $scope,$firebaseAuth, $location){
  


  var ref = new Firebase("http://codexdb.firebaseio.com");
  $scope.auth = $firebaseAuth(ref, {path: "/main"});
  console.log('$firebaseAuth',$firebaseAuth(ref));


  $scope.signup = function(){
    $rootScope.auth.createUser($scope.signupFormInfo);
  }
  
  $scope.login = function(callback){
    console.log('$rootScope.auth',$rootScope.auth);
    console.log('$scope.loginFormInfo',$scope.loginFormInfo);
    $scope.email = null;
    $scope.pass = $scope.auth.$login('password', $scope.loginFormInfo);
    $scope.err = null;

  
  }

}])
  