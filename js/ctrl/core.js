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
	
	
	
	
	// var projectWatch = $scope.$watch('projects', function() {
	// 	// check for a student id match
		
	// 	if($scope.matchprojectID({ id : $routeParams.id })){
	// 		projectWatch();
	// 	}
	// 	console.log(matchprojectID);
	// });

	// $scope.matchprojectID = function (args) {

	// 	// Loop All projects looking for a match
	// 	for(FBID in $scope.projects){
	// 		var projects = $scope.projects[FBID];
	// 		console.log(FBID);
	// 		if( projects.id == args.id ) {

	// 			//On match establish $scope.Student
	// 			$scope.projects = projects;
	// 			return true;
	// 		}
	// 	}
	// }


}]);
