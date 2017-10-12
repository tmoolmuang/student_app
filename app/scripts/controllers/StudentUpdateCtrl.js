(function() {
	function studentUpdateCtrlFunct($scope, $state, $stateParams, StudentSvc) {
		$scope.student = $stateParams.student

		$scope.updateStudent = function() {
    	StudentSvc.updateStudent($stateParams.student, function(r) {
     		$state.go("student_view", { id: $scope.student.id });
	    });
    };

		$scope.cancelUpdate = function() {
   		$state.go("student_view", { id: $scope.student.id });
    };
	}

	angular
		.module("student")
		.controller("StudentUpdateCtrl", ["$scope", "$state", "$stateParams", "StudentSvc", studentUpdateCtrlFunct]);
})();
