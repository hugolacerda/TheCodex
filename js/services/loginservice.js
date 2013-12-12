
'use strict';

/* Services */
myapp.controller('LoginController', ['$scope',
    function( $scope) {
      return {
        login: function(email, pass, redirect, callback) {  
         var p = $firebaseAuth.login('password', {
            email: email,
            password: pass,
            rememberMe: true
          });
          p.then(function(user) {
            console.log("Login Successful");
            if( redirect ) {
              $location.path(redirect);
            }
            callback && callback(null, user);
          }, callback);
        },
        logout: function(redirectPath) {
          $firebaseAuth.logout();
          if(redirectPath) {
            $location.path(redirectPath);
          }
        },
        createAccount: function(name, email, pass, callback) {
          $firebaseAuth._authClient.createUser(email, pass, function(err, user) {
            if(callback) {
              callback(err, user);
              $rootScope.$apply();
            }
          });
        },
        // createProfile: profileCreator
      }
    }])

// $rootScope.$on("$firebaseAuth:login", function(e, user) {
//    console.log("User " + user.id + " successfully logged in!");
//  });
