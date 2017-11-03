(function() {
	function courseCreateCtrlFunct($scope, $state, CourseSvc) {
		$scope.course = {};

    $scope.createCourse = function() {
    	CourseSvc.createCourse($scope.course, function(r) {
     		$state.go("course_view", { id: r.id });
	    });
    };

		$scope.cancelCreate = function() {
   		$state.go("courses");
    };
	}

	angular
		.module("student")
		.controller("CourseCreateCtrl", ["$scope", "$state", "CourseSvc", courseCreateCtrlFunct]);
})();
