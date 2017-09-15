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
			});	
	}
	
	angular
  	.module("student", ["ui.router"])
    .config(configFunct);
})();