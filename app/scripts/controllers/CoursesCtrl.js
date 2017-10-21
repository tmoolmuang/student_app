(function() {
	function coursesCtrlFunct($scope, CourseSvc) {
		$scope.loading = true;
		CourseSvc.getAllCourses(function(r) {
      $scope.courses = r;
			$scope.loading = false;
    });    

    $scope.deleteCourse = function(id) {
    	if (confirm("Are you sure you want to delete this course?")) {
	    	CourseSvc.deleteCourse(id, function(r) {
					var pos = $scope.courses.map(function(e) { return e.id; }).indexOf(id);
	        $scope.courses.splice(pos, 1);
	    	});
    	};
    };
	}

	angular
		.module("student")
		.controller("CoursesCtrl",  ["$scope", "CourseSvc", coursesCtrlFunct]);
})();
