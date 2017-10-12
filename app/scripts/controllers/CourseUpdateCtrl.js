(function() {
	function courseUpdateCtrlFunct($scope, $state, $stateParams, CourseSvc) {
		$scope.course = $stateParams.course

    $scope.updateCourse = function() {
    	CourseSvc.updateCourse($scope.course, function(r) {
     		$state.go("course_view", { id: r.id });
	    });
    };

		$scope.cancelUpdate = function() {
			$state.go("course_view", { id: $scope.course.id });
		};
	}

	angular
		.module("student")
		.controller("CourseUpdateCtrl", ["$scope", "$state", "$stateParams", "CourseSvc", courseUpdateCtrlFunct]);
})();
