(function() {
  function studentSvcFunct($http, $log) {  
    var Students = {};
    var URL = "https://students-tm.herokuapp.com/api/v1/students";
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Students.getAllStudents = function(cb) {
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
    	
    Students.getStudent = function(id, cb) {
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

    Students.createStudent = function(student, cb) {
      $http({
        url: URL,
        method: "POST",
        headers: {
          "Authorization": TOKEN,
          "Content-Type": "application/json"
        },
        data: {
          "name": student.name
        }
      }).then(function(resp) {
        // $log.log(resp.data.data);
        cb(resp.data.data);
      }, function(resp) {
        $log.error("ERROR occurred");
      });
    }; 

    return Students;
  }

  angular
    .module('student')
    .factory('StudentSvc', ['$http', '$log', studentSvcFunct]);
})();