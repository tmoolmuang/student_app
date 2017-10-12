(function() {
  function studentCourseSvcFunct($http, $log) {
    var StudentCourse = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/records";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    StudentCourse.getCoursesForStudent = function(student, cb) {
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

    StudentCourse.getAllRecords = function(cb) {
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

    StudentCourse.createStudentCourse = function(studentcourse, cb) {
      $http({
        url: "https://students-tm.herokuapp.com/api/v1/students/" + studentcourse.student_id + "/student_courses",
        method: "POST",
        headers: {
          "Authorization": TOKEN,
          "Content-Type": "application/json"
        },
        data: {
          "course_id": studentcourse.course_id,
          "note": studentcourse.note
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    };

    StudentCourse.deleteRecord = function(id, cb) {
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

    return StudentCourse;
  }

  angular
    .module('student')
    .factory('StudentCourseSvc', ['$http', '$log', studentCourseSvcFunct]);
})();
