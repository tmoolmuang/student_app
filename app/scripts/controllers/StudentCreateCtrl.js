(function() {
	function studentsCreateCtrlFunct($scope, $state, StudentSvc) {
		$scope.student = {};

    $scope.createStudent = function() {
    	StudentSvc.createStudent($scope.student, function(r) {
     		$state.go("student_view", { id: r.id });
	    });   
    };
	}

	angular
		.module("student")
		.controller("StudentCreateCtrl", ["$scope", "$state", "StudentSvc", studentsCreateCtrlFunct]);
})();