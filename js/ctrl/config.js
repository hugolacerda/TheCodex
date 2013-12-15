

  myapp.config(['$routeProvider', function ($routeProvider) {

    //Routes
    $routeProvider
      // Index
      .when('/', {
        templateUrl:  'partials/login.html',
        controller:   'SigninCtrl',
        authRequired: false
      })

      // Student Detail Page
      .when('/main', {
        templateUrl:  'partials/main.html',
        controller:   'CtrlProject',
        authRequired: true
      })

      .when('/signup',{
      	templateUrl:  'partials/newUser.html',
        controller:   'SignupCtrl',
        authRequired: false
      })

      .when('/addProject',{
      	templateUrl:  'partials/newProject.html',
        controller:   'CtrlProject',
        authRequired: true
      })

      .otherwise('/', {
        templateUrl:  'partials/login.html',
        controller:   'SigninCtrl',
        authRequired: false
      })


  }]);