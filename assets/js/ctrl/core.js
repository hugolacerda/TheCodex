
// version 1


// App.controller('CtrlCore', ['$scope', function( $scope ){
//         $scope.title = "XP Tracker";
// }]);

// App.controller('CtrlStudent', ['$scope', '$routeParams', function( $scope, $routeParams ){
//         $scope.studentName = $routeParams.name;
// }]);

// App.controller('CtrlCore', ['$scope', function( $scope ){
//    	$scope.title = "XP Tracker";
// }]);




// version 2

// App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
//   $scope.studentName = $routeParams.name;

//   //Firebase Connection
//   var url = 'https://xp-tracker.firebaseio.com/students';
//   $scope.fb = $firebase(new Firebase(url));

//     $scope.addStudent = function () {
//       $scope.fb.$add({name: $scope.StudentName});
//       $scope.StudentName = "";
//     }
// }]);


// version 3

// App.controller('CtrlCore', ['$scope', function( $scope ){
//         $scope.title = "XP Tracker";
// }]);

// App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
//         $scope.studentName = $routeParams.name;

//         //Firebase Connection
//         var url = 'https://xp-tracker.firebaseio.com/students';
//         $scope.fb = $firebase(new Firebase(url));

//         $scope.addStudent = function () {
//                 $scope.fb.$add({name: $scope.StudentName});
//                 $scope.StudentName = "";
//         }
// }]);

//version 4

// App.controller('CtrlCore', ['$scope', function( $scope ){
//         $scope.title = "XP Tracker";
// }]);

// App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
//         $scope.studentName = $routeParams.name;

//         //3 way data binding that syncs to Firebase as soon as we modify the objec locally
//         var url = 'https://xp-tracker.firebaseio.com/students';
//         var sync = $firebase(new Firebase(url)).$bind($scope, 'Students');

//         $scope.addStudent = function () {
//                 $scope.Students.$add({
//                         name         : $scope.StudentName,
//                         id                 : $scope.StudentID
//                 });
//                 $scope.StudentName = "";
//         }
        
//         $scope.addNoteToStudent = function (args) {
                
//                 args.student.note = "You pinned a note to me!";
//         }

// }]);

// 

App.controller('CtrlCore', ['$scope', '$firebase', function( $scope, $firebase ){
	$scope.title = "You're Projects";

	var url = 'codexdb.firebaseio.com';
	var sync = $firebase(new Firebase(url)).$bind($scope, 'projects');

}]);

App.controller('CtrlStudentDetail', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	
	
	

	var studentWatch = $scope.$watch('projects', function() {
		// check for a student id match
		if($scope.matchStudentID({ id : $routeParams.id })){
			studentWatch();
		}
	});

	$scope.matchStudentID = function (args) {

		// Loop All students lookign for match
		for(FBID in $scope.Students){
			var student = $scope.Students[FBID];
			if( student.id == args.id ) {

				//On match establish $scope.Student
				$scope.Student = student;
				return true;
			}
		}
	}


}]);

App.controller('CtrlStudent', ['$scope', '$routeParams', '$firebase', function( $scope, $routeParams, $firebase ){
	// $scope.Students = [{force:"Static"}] // Needed for first entry in the DB when set to Implict Syncing
	$scope.studentName = $routeParams.id;

	//3 way data binding that syncs to Firebase as soon as we modify the objec locally
	
	$scope.addStudent = function () {
		// Add a Student
		$scope.Students.$add({
			name 	: $scope.StudentName,
			id 		: $scope.StudentID,
			xp 		: []
		});

		// Clear Name and ID
		$scope.StudentName = $scope.StudentID = ""; 
		
	}
	
	$scope.calculateStudentXP = function (args) {
		
		// target Student
		var student = args.student;
		
		// counter for XP
		var totalXP = 0;

		// Loop all XP entries for this student
		for(var i = 0; i < student.xp.length; i++){
			totalXP += student.xp[i].amount;
		}
		
		// Apply the total to the student which will Sync with Firebase
		student.totalXP = totalXP;
	}

	$scope.addXPToStudent = function (args) {

		// Target Student
		var student = args.student;

		// Static Data structure of an XP Addition
		var dataToSave 	= {
				amount : 10,
				comments : "Completely owned that AngularJS Assignment!"
		}

		// Check if xp is defined, if not, do that and place the XP data strucutre in.
		if(student.xp == undefined){
			student.xp = [dataToSave]
		} else {
			student.xp.push(dataToSave);
		}
		
		// After adding to the pile of XP, calculate the student's XP, pin it to the main student obj
		$scope.calculateStudentXP({student : student});
	}

}]);