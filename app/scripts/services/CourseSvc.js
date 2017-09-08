(function() {
  function courseSvcFunct($http, $log) {  
    var Courses = {};

    Courses.getAllCourses = function(cb) {
      $http({
        url: "https://students-tm.herokuapp.com/api/v1/courses",
        method: "GET",
        headers: {
          "Authorization": "Token token=MitJ68gojrz_55N3n8MKxg"
        }
      }).then(function(resp) {
        $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    }; 
   	  	
    return Courses;
  }

  angular
    .module('student')
    .factory('CourseSvc', ['$http', '$log', courseSvcFunct]);
})();