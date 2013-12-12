// myapp.controller('LoginController', ['$scope', '$routeParams', '$firebaseAuth', '$firebase', function( $scope, $routeParams, $firebaseAuth, $firebase ){
	
//  	var ref = new Firebase('https://codexdb.firebaseio.com');
//     $scope.auth = $firebaseAuth(ref);

// }]);

myapp.controller('CtrlCore', ['$scope', '$firebase', function( $scope, $firebase ){
	// $scope.title = "You're Projects";

	var url = 'codexdb.firebaseio.com';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'projects');

}]);

myapp.controller('CtrlProjectDetail', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	
	
	

	var projectWatch = $scope.$watch('projects', function() {
		// check for a student id match
		
		if($scope.matchprojectID({ id : $routeParams.id })){
			projectWatch();
		}
	});

	$scope.matchprojectID = function (args) {

		// Loop All students lookign for match
		for(FBID in $scope.Projects){
			var projects = $scope.Projects[FBID];
			console.log(projects)
			if( projects.id == args.id ) {

				//On match establish $scope.Student
				$scope.Projects = projects;
				return true;
			}
		}
	}


}]);
