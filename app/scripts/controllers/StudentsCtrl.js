(function() {
	function studentsCtrlFunct($scope, StudentSvc, $stateParams) {
		StudentSvc.getAllStudents(function(r) {
      $scope.students = r;
    });   

	}

	angular
		.module("student")
		.controller("StudentsCtrl", ["$scope", "StudentSvc", "$stateParams", studentsCtrlFunct]);
})();