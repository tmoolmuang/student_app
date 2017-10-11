(function() {
	function studentCoursesCtrlFunct($scope, StudentCourseSvc) {
		StudentCourseSvc.getCoursesForStudent($scope.$parent.studentID, function(r) {
      $scope.student_courses = r;
    });

		StudentCourseSvc.getAllRecords(function(r) {
      $scope.records = r;
    });
	}

	angular
		.module("student")
		.controller("StudentCoursesCtrl", ["$scope", "StudentCourseSvc", studentCoursesCtrlFunct]);
})();
