(function() {
	function studentsCtrlFunct($scope, StudentSvc) {
		StudentSvc.getAllStudents(function(r) {
      $scope.students = r;
    });

    $scope.deleteStudent = function(id) {
    	if (confirm("Are you sure you want to delete this student? All registered courses will be deleted!")) {
	    	StudentSvc.deleteStudent(id, function(r) {
					var pos = $scope.students.map(function(e) { return e.id; }).indexOf(id);
	        $scope.students.splice(pos, 1);
	    	});
    	};
    };
	}

	angular
		.module("student")
		.controller("StudentsCtrl", ["$scope", "StudentSvc", studentsCtrlFunct]);
})();
