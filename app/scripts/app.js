(function() {
	function configFunct($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider
			.html5Mode({
				enabled: true,
				requireBase: false
			});
		$urlRouterProvider.when('*path', '/');
		$stateProvider
			.state("home", {
				url: "/",
				templateUrl: "templates/home.html"
			})
			.state("students", {
				url: "/students",
				templateUrl: "templates/students.html",
				controller: "StudentsCtrl"
			})
			.state("student_view", {
				url: "/student_view",
				templateUrl: "templates/student_view.html",
				controller: "StudentViewCtrl",
				params: {
			    id: null
			  }
			})
			.state("student_create", {
				url: "/student_create",
				templateUrl: "templates/student_create.html",
				controller: "StudentCreateCtrl"
			})
			.state("student_update", {
				url: "/student_update",
				templateUrl: "templates/student_update.html",
				controller: "StudentUpdateCtrl",
				params: {
			    student: null
			  }
			})
			.state("courses", {
				url: "/courses",
				templateUrl: "templates/courses.html",
				controller: "CoursesCtrl"
			})
			.state("course_view", {
				url: "/course_view",
				templateUrl: "templates/course_view.html",
				controller: "CourseViewCtrl",
				params: {
			    id: null
			  }
			})
			.state("course_create", {
				url: "/course_create",
				templateUrl: "templates/course_create.html",
				controller: "CourseCreateCtrl"
			})
			.state("course_update", {
				url: "/course_update",
				templateUrl: "templates/course_update.html",
				controller: "CourseUpdateCtrl",
				params: {
			    course: null
			  }
			})
			.state("student_courses", {
				url: "/student_courses",
				templateUrl: "templates/student_courses.html",
				controller: "StudentCoursesCtrl"
			})
			.state("studentcourse_create", {
				url: "/studentcourse_create",
				templateUrl: "templates/student_course_create.html",
				controller: "StudentCourseCreateCtrl",
				params: {
			    student_id: null
			  }
			});
	}

	angular
  	.module("student", ["ui.router"])
    .config(configFunct);
})();
