

myapp.controller('CtrlCore', ['$scope', '$firebase', function( $scope, $firebase ){
	// $scope.title = "You're Projects";

	var url = 'codexdb.firebaseio.com';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'projects');

}]);


