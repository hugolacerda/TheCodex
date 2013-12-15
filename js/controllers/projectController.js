myapp.controller('CtrlProject', ['$rootScope', '$scope', '$routeParams', '$firebase', '$location', function( $rootScope, $scope, $routeParams, $firebase, $location ){

	
	console.log('auth',$rootScope.auth);
	$scope.projects = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ $rootScope.user.id + '/projects'));
	$scope.addProject = function(){
		$scope.projects.$add($scope.ProjectInfo);
		$location.path('/main');
	}

}]);