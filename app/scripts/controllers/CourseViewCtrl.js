(function() {
	function courseViewCtrlFunct($scope, $stateParams, CourseSvc) {
		CourseSvc.getCourse($stateParams.id, function(r) {
      $scope.course = r;
    });    
	}

	angular
		.module("student")
		.controller("CourseViewCtrl", ["$scope", "$stateParams", "CourseSvc", courseViewCtrlFunct]);
})();