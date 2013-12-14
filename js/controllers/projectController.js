myapp.controller('CtrlProject', ['$rootScope', '$scope', '$routeParams', '$firebase', function( $rootScope, $scope, $routeParams, $firebase ){
	// $scope.user.id
	
	// var project = {};

	// var url = 'https://codexdb.firebaseio.com/users' + userId;
 //   	var sync = $firebase(new Firebase(url)).$bind($scope, 'project');
	// console.log(userId);
	// console.log(project);

	
	// 	//Add a project
	// 	$scope.project.$add({
	// 		project : $scope.ProjectInfo
	// 	});
	// 	console.log($scope.project);
	
	
	$rootScope.project = $firebase(new Firebase('http://codexdb.firebaseio.com/users/'+ userId + '/projects'));
   $scope.addProject = function(){
	    var newProject = {
	        project : $scope.ProjectInfo
	    }
	    $rootScope.project.$set(newProject);
	 }

	 return $firebase.project;
}]);