'use strict';

myapp.controller('SignupCtrl', ['$rootScope', '$scope','$firebaseAuth', '$location', function($rootScope, $scope, 
  $firebaseAuth, $location){

  $scope.signup = function(){
    $rootScope.auth.$createUser($scope.SignUpFormInfo.email, $scope.SignUpFormInfo.password);

     $rootScope.user = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ $rootScope.user.id ));

     var newUser = {
        name: user.email,
        user_type: 'hello'
    }
    $rootScope.user.$set(newUser);
  }

  }])
