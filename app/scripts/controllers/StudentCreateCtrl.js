(function() {
	function studentCreateCtrlFunct($scope, $state, StudentSvc) {
		$scope.student = {};

    $scope.createStudent = function() {
    	StudentSvc.createStudent($scope.student, function(r) {
     		$state.go("student_view", { id: r.id });
	    });
    };

		$scope.cancelCreate = function() {
   		$state.go("students");
    };
	}

	angular
		.module("student")
		.controller("StudentCreateCtrl", ["$scope", "$state", "StudentSvc", studentCreateCtrlFunct]);
})();
