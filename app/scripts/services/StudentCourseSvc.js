(function() {
  function studentCourseSvcFunct($http, $log) {
    var Courses = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/records";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Courses.getCoursesForStudent = function(student, cb) {
      $http({
        url: URL,
        method: "GET",
        headers: {
          "Authorization": TOKEN
        }
      }).then(function(resp) {
        // array prototype filter
        // $log.log(resp.data.data.filter( function (a) {
        //                                   return a.student_id == student;
        //                                 }));
        cb(resp.data.data.filter( function (a) {
                                          return a.student_id == student;
                                        }));
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    };

    Courses.getAllRecords = function(cb) {
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

    Courses.createRecord = function(course, cb) {
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

    Courses.deleteRecord = function(id, cb) {
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
    .factory('StudentCourseSvc', ['$http', '$log', studentCourseSvcFunct]);
})();
