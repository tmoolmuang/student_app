(function() {
	function studentsCtrlFunct($scope, StudentSvc) {
		$scope.a = "yo";
		StudentSvc.getAllStudents(function(r) {
      $scope.students = r;
    });    
	}

	angular
		.module("student")
		.controller("StudentsCtrl", ["$scope", "StudentSvc", studentsCtrlFunct]);
})();