var myapp = angular.module("myapp", 
	["firebase" 
	,'ngRoute']);


myapp.run(['$rootScope', '$firebaseAuth', '$firebase', function($rootScope, $firebaseAuth, $firebase){
  var ref = new Firebase("http://codexdb.firebaseio.com");
  $rootScope.auth = $firebaseAuth(ref);

  $rootScope.$on("$firebaseAuth:login", function(error, user){
    console.log("User " + user.id + " successfully logged in!");

    $rootScope.user = $firebase(new Firebase('https://codexdb.firebaseio.com/users'+ user.id ));

    $rootScope.user.$on("loaded", function(userLoaded){
      console.log("Initial data received!");
      console.log("user", userLoaded);

      if(user === null)
      {
        var newUser = {
            name: user.name,
            gender: user.gender,
            user_type: 'user'
        }
          $rootScope.user.$set(newUser);
      }

    });
  })



  $rootScope.$on("$firebaseAuth:error", function(error){console.log("ERROR!! ",error)});

 }])

// myapp.controller('loginController', ['$rootScope', '$scope', function($rootScope, $scope){
//   $scope.signup = function()
//   {
//     $rootScope.auth.createUser($scope.signupFormInfo);
//   }
//   $scope.login = function()
//   {
//     $rootScope.auth.$login('pasword', $scope.loginFormInfo)
//   }
// }])

// <input ng-model="loginFormInfo.email" type="text"/>
// <input ng-model="loginFormInfo.password" type="text"/>

// <a href="#" ng-hide="auth.user" ng-click="auth.$logout('facebook')">Logout</a>

// myapp.value('FBURL', 'https://codexdb.firebaseio.com/')

// var app = angular.module('AppCore',
// 	  [ 'AppCore.config'
// 	  , 'AppCore.controllers.header'
// 	  , 'AppCore.controllers.signin'
// 	  , 'AppCore.controllers.signup'
// 	  , 'firebase', 'ui.bootstrap', 'ngRoute']
//   )
