'use strict';

// Declare app level module which depends on filters, and services
var app = angular.module('AppCore',
	  [ 'AppCore.config'
	  , 'AppCore.controllers.header'
	  , 'AppCore.controllers.signin'
	  , 'AppCore.controllers.signup'
	  , 'firebase', 'ui.bootstrap', 'ngRoute']
  )
