myapp.controller('CtrlProject', ['$rootScope', '$scope', '$routeParams', '$firebase', '$location', function( $rootScope, $scope, $routeParams, $firebase, $location ){

	
	console.log('auth',$rootScope.auth);
	console.log($scope.projects);
	$scope.projects = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ $rootScope.user.id + '/projects'));
	$scope.addProject = function(){
		$scope.projects.$add($scope.ProjectInfo);
		$location.path('/main');
	}

	$scope.editProject = function(){
		var url = $location.path();
		var id = url.substring(url.lastIndexOf('/') + 1);
		$scope.projects = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ $rootScope.user.id + '/projects/' + id));
		console.log("this is arg: ", $scope.projects);
		
		// var dataToSave = {$scope.ProjectInfoEdit};
		
		// $rootScope.user.id.project.push(dataToSave);
		$scope.projects.$set($scope.ProjectInfoEdit)
		$location.path('/main');
	}

	$scope.deleteProject = function(){
		var url = $location.path();
		var id = url.substring(url.lastIndexOf('/') + 1);
		$scope.projects = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ $rootScope.user.id + '/projects/' + id));
		$scope.projects.$remove($scope.ProjectInfoEdit);
		$location.path('/main');
	}


}]);