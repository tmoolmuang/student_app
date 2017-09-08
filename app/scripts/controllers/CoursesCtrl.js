(function() {
	function coursesCtrlFunct($scope, CourseSvc) {
		CourseSvc.getAllCourses(function(r) {
      $scope.courses = r;
    });    
	}

	angular
		.module("student")
		.controller("CoursesCtrl",  ["$scope", "CourseSvc", coursesCtrlFunct]);
})();