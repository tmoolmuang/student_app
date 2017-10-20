(function() {
	function studentCoursesCtrlFunct($scope, CourseSvc, StudentSvc, StudentCourseSvc) {
		var records = [];
		var course_list = [];
		var student_list = [];

		StudentCourseSvc.getCoursesForStudent($scope.$parent.studentID, function(r) {
      $scope.student_courses = r;
    });

		StudentCourseSvc.getAllRecords(function(r) {
      $scope.records = r;
			records = r.slice();
			// setTimeout(doLookup(), 5000);
    });

		$scope.deleteStudentCourse = function(id, student_id) {
    	if (confirm("Are you sure you want to delete this course?")) {
	    	StudentCourseSvc.deleteStudentCourse(id, student_id, function(r) {
					var pos = $scope.student_courses.map(function(e) { return e.id; }).indexOf(id);
	        $scope.student_courses.splice(pos, 1);
	    	});
    	};
    };

		function p1() {
			console.log("in 1");
			return new Promise(function(resolve, reject) {
				CourseSvc.getAllCourses(function(r) {
					course_list = r.slice();
					resolve(1);
				});
				// if (course_list.length > 0) {
				// 	resolve(1);
				// }
			});
		}
		function p2() {
			console.log("in 2");
			return new Promise(function(resolve, reject) {
				StudentSvc.getAllStudents(function(r) {
					student_list = r.slice();
					resolve(2);
				});
				// if (student_list.length > 0) {
				//
				// }
			});
		}
		// function doLookup() {
		// 	console.log(student_list);
		// 	console.log(course_list);
		//
		// 	return new Promise(function(resolve, reject) {
		// 		for (var j=0; j<records.length; j++) {
		// 			for (var i=0; i<course_list.length; i++) {
		// 				if (course_list[i].id == records[j].course_id) {
		// 					records[j].course_name = course_list[i].name;
		// 					break;
		// 				}
		// 			}
		// 			for (var i=0; i<student_list.length; i++) {
		// 				if (student_list[i].id == records[j].student_id) {
		// 					records[j].student_name = student_list[i].name;
		// 					break;
		// 				}
		// 			}
		// 		}
		// 		$scope.lookuprecords = records.slice();
		// 		resolve(3);
		// 	});
		// }

		p1().then(function(from1){
		  console.log(from1 + " success");
		  return p2();
		}).then(function(from2) {
		  console.log(from2 + " success");
		  doLookup();
		});





		//utilize promise to ensure student, and course look-up ready for records
		// var prepareLookup = new Promise(function(resolve, reject) {
		// 	CourseSvc.getAllCourses(function(r) {
		// 		course_list = r.slice();
		// 	});
		// 	StudentSvc.getAllStudents(function(r) {
		// 		student_list = r.slice();
		// 	});
		// 	console.log(course_list.length);
		// 	console.log(student_list.length);
		// 	if (course_list.length > 0 && student_list.length > 0) {
		// 		resolve(true);
		// 	}
		// });
		//
		function doLookup() {
			console.log(student_list);
			console.log(course_list);

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
			console.log($scope.lookuprecords);
		}
		//
		// prepareLookup().then((res) => {
		// 	console.log(res);
		// 	if (res == true) {
		// 		doLookup();
		// 	}
		// });

		//grouping and filtering logic
		var indexedStudents = [];
    $scope.allRecords = function() {
      indexedStudents = [];
      // return $scope.records;
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
