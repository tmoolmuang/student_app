(function() {
  function courseSvcFunct($http, $log) {  
    var Courses = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/courses";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Courses.getAllCourses = function(cb) {
      $http({
        url: URL,
        method: "GET",
        headers: {
          "Authorization": TOKEN
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    }; 

    Courses.getCourse = function(id, cb) {
      $http({
        url: URL + "/" + id,
        method: "GET",
        headers: {
          "Authorization": TOKEN
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
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