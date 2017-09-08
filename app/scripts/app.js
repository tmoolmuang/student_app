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