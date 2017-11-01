(function() {
	function studentCoursesCtrlFunct($scope, CourseSvc, StudentSvc, StudentCourseSvc) {
		var records = [];
		var course_list = [];
		var student_list = [];
		$scope.loading = true;

		StudentCourseSvc.getCoursesForStudent($scope.$parent.studentID, function(r) {
      $scope.student_courses = r;
    });

		StudentCourseSvc.getAllRecords(function(r) {
      $scope.records = r;
			records = r.slice();
    });

		$scope.deleteStudentCourse = function(id, student_id) {
    	if (confirm("Are you sure you want to delete course " + id + "?")) {
	    	StudentCourseSvc.deleteStudentCourse(id, student_id, function(r) {
					var pos = $scope.student_courses.map(function(e) { return e.id; }).indexOf(id);
	        $scope.student_courses.splice(pos, 1);
	    	});
    	};
    };

		//utilizing promise to ensure course name, and student name are ready before
		//the lookup logic
		function getCourseName() {
			return new Promise(function(resolve, reject) {
				CourseSvc.getAllCourses(function(r) {
					course_list = r.slice();
					resolve(1);
				});
			});
		}

		function getStudentName() {
			return new Promise(function(resolve, reject) {
				StudentSvc.getAllStudents(function(r) {
					student_list = r.slice();
					resolve(2);
				});
			});
		}

		function doLookup() {
			for (var j=0; j<records.length; j++) {
				for (var i=0; i<course_list.length; i++) {
					if (course_list[i].id == records[j].course_id) {
						records[j].course_name = course_list[i].name;
						break;
					}
				}
				for (var i=0; i<student_list.length; i++) {
					if (student_list[i].id == records[j].student_id) {
						records[j].student_name = student_list[i].name;
						break;
					}
				}
			}
			$scope.lookuprecords = records.slice();
			$scope.loading = false;
		}

		getCourseName().then(function(from1){
		  return getStudentName();
		}).then(function(from2) {
		  doLookup();
			//rebind current $scope since ng-repeat has already been performed before
			//we finish the API calls
			$scope.$digest();
		});

		//grouping and filtering logic
		var indexedStudents = [];
    $scope.allRecords = function() {
      indexedStudents = [];
			return $scope.lookuprecords;
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
		.controller("StudentCoursesCtrl", ["$scope", "CourseSvc", "StudentSvc", "StudentCourseSvc", studentCoursesCtrlFunct]);
})();
