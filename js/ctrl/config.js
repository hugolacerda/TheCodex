// var App = angular.module('myapp', ['ngRoute', 'firebase'])
  
//   .config(['$routeProvider', function (r) {

//     //Routes
//     r
//       // Index
//       .when('/', {
//         templateUrl:  'login.html',
//         controller:   'LoginController'
//       })

//       // Student Detail Page
//       .when('/student/:id', {
//         templateUrl:  'assets/views/detail.tpl',
//         controller:   'CtrlStudentDetail'
//       })


//   }])

  myapp.config(['$routeProvider', function ($routeProvider) {

    //Routes
    $routeProvider
      // Index
      .when('/', {
        templateUrl:  'partials/login.html',
        controller:   'SigninCtrl'
      })

      // Student Detail Page
      .when('/main', {
        templateUrl:  'partials/main.html',
        controller:   'CtrlProjectDetail'
      })


  }]);