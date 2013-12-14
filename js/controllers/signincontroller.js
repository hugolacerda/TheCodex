'use strict';

// myapp
//   .controller('SigninCtrl', ['$scope', '$location',
//     function($scope, loginService, $location) {

//       $scope.$on('$firebaseAuth:login', function () {
//         $location.path('/');
//       })

//       $scope.email = null;
//       $scope.pass = null;
//       $scope.name = null;

//       $scope.login = function(callback) {
//         $scope.err = null;
//         loginService.login($scope.email, $scope.pass, '/', function(err, user) {
//           $scope.err = err||null;
//           typeof(callback) === 'function' && callback(err, user);
//         });
//       };
//     }])

  myapp.controller('SigninCtrl', ['$rootScope', '$scope','$firebaseAuth', '$location', function($rootScope, $scope,$firebaseAuth, $location){
  
   $scope.$on('$firebaseAuth:login', function () {
           $location.path('/main');
        })
    

  var ref = new Firebase("http://codexdb.firebaseio.com");
  $scope.auth = $firebaseAuth(ref);
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
         // loginService.login($scope.email, $scope.pass, '/', function(err, user) {
         //   $scope.err = err||null;
         //   typeof(callback) === 'function' && callback(err, user);
         // });
    
  
  }

}])
  