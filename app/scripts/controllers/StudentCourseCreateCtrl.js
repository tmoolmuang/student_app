(function() {
	function studentCourseCreateCtrlFunct($scope, $stateParams, $state, StudentCourseSvc) {
		$scope.studentcourse = {};
		$scope.studentcourse.student_id = $stateParams.student_id;

		$scope.createStudentCourse = function() {
    	StudentCourseSvc.createStudentCourse($scope.studentcourse, function(r) {
     		$state.go("student_view", { id: $stateParams.student_id });
	    });
    };

		$scope.cancelCreate = function() {
   		$state.go("student_view", { id: $stateParams.student_id });
    };
	}

	angular
		.module("student")
		.controller("StudentCourseCreateCtrl", ["$scope", "$stateParams", "$state", "StudentCourseSvc", studentCourseCreateCtrlFunct]);
})();
