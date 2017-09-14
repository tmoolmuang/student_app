(function() {
	function studentViewCtrlFunct($scope, $stateParams, StudentSvc) {
		StudentSvc.getStudent($stateParams.id, function(r) {
      $scope.student = r;
    });    
	}

	angular
		.module("student")
		.controller("StudentViewCtrl", ["$scope", "$stateParams", "StudentSvc", studentViewCtrlFunct]);
})();