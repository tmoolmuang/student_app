(function() {
	function studentsUpdateCtrlFunct($scope, $state, $stateParams, StudentSvc) {
		$scope.student = $stateParams.student

    $scope.updateStudent = function() {
    	StudentSvc.updateStudent($scope.student, function(r) {
     		$state.go("student_view", { id: r.id });
	    });   
    };
	}

	angular
		.module("student")
		.controller("StudentUpdateCtrl", ["$scope", "$state", "$stateParams", "StudentSvc", studentsUpdateCtrlFunct]);
})();