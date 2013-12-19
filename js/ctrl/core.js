

myapp.controller('CtrlCore', ['$scope', '$firebase', function( $scope, $firebase ){
	// $scope.title = "You're Projects";

	var url = 'codexdb.firebaseio.com';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'projects');

	$scope.setActive = function(genre){
		console.log("set active working!", genre)
		$scope.fictionActive = '';
		$scope.essaysActive = '';
		$scope.poetryActive = '';

		$scope[genre + 'Active'] = 'active';
		$scope.genreFilter = {genre:genre};

	};

}]);


