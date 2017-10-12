(function() {
	function studentCoursesCtrlFunct($scope, StudentCourseSvc) {
		StudentCourseSvc.getCoursesForStudent($scope.$parent.studentID, function(r) {
      $scope.student_courses = r;
    });

		StudentCourseSvc.getAllRecords(function(r) {
      $scope.records = r;
    });

		//grouping and filtering logic
		var indexedStudents = [];
    $scope.allRecords = function() {
      indexedStudents = [];
      return $scope.records;
    }
    $scope.filterStudents = function(course) {
      var studentIsNew = indexedStudents.indexOf(course.student_id) == -1;
      if (studentIsNew) {
        indexedStudents.push(course.student_id);
      }
      return studentIsNew;
    }

	}

	angular
		.module("student")
		.controller("StudentCoursesCtrl", ["$scope", "StudentCourseSvc", studentCoursesCtrlFunct]);
})();
