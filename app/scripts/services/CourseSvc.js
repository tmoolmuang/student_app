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
   	  	
    Courses.createCourse = function(course, cb) {
      $http({
        url: URL,
        method: "POST",
        headers: {
          "Authorization": TOKEN,
          "Content-Type": "application/json"
        },
        data: {
          "name": course.name,
          "description": course.description
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    }; 

    Courses.updateCourse = function(course, cb) {
      $http({
        url: URL + "/" + course.id,
        method: "PUT",
        headers: {
          "Authorization": TOKEN,
          "Content-Type": "application/json"
        },
        data: {
          "name": course.name,
          "description": course.description
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    }; 

    Courses.deleteCourse = function(id, cb) {
      $http({
        url: URL + "/" + id,
        method: "DELETE",
        headers: {
          "Authorization": TOKEN,
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb();
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