var myapp = angular.module("myapp", 
	["firebase" 
	,'ngRoute']);

myapp.run(['$rootScope', '$firebaseAuth', '$firebase', '$location', function($rootScope, $firebaseAuth, $firebase, $location){
  var ref = new Firebase("http://codexdb.firebaseio.com");
  $rootScope.auth = $firebaseAuth(ref,{path: "/login"});

  $rootScope.$on("$firebaseAuth:login", function(error, user){
    console.log("User " + user.id + " successfully logged in!");
    $rootScope.user = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ user.id ));
    $rootScope.user.id = user.id;
    $location.path('/main');
  })

   $rootScope.$on("$firebaseAuth:logout", function(error){
   	console.log('logged out');
   
  })


  $rootScope.$on("$firebaseAuth:error", function(error){console.log("ERROR!! ",error)});



 }])

myapp.filter('toArray', function () {
    'use strict';
 
    return function (obj) {
        if (!(obj instanceof Object)) {
            return obj;
        }
 
        return Object.keys(obj).filter(function(key){if(key.charAt(0) !== "$") {return key;}}).map(function (key) {
            return Object.defineProperty(obj[key], '$key', {__proto__: null, value: key});
        });
    };
});

