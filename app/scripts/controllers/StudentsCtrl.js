(function() {
	function studentsCtrlFunct($scope, StudentSvc) {
		StudentSvc.getAllStudents(function(r) {
      $scope.students = r;
    });   
	}

	angular
		.module("student")
		.controller("StudentsCtrl", ["$scope", "StudentSvc", studentsCtrlFunct]);
})();