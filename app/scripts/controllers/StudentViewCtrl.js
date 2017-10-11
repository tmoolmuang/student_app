(function() {
	function studentViewCtrlFunct($scope, $stateParams, StudentSvc) {
		$scope.studentID = $stateParams.id;
		StudentSvc.getStudent($scope.studentID, function(r) {
      $scope.student = r;
    });
	}

	angular
		.module("student")
		.controller("StudentViewCtrl", ["$scope", "$stateParams", "StudentSvc", studentViewCtrlFunct]);
})();
