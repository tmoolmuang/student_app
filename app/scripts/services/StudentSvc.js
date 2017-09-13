(function() {
  function studentSvcFunct($http, $log) {  
    var Students = {};
    var TOKEN = "Token token=MitJ68gojrz_55N3n8MKxg";

    Students.getAllStudents = function(cb) {
      $http({
        url: "https://students-tm.herokuapp.com/api/v1/students",
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
        url: "https://students-tm.herokuapp.com/api/v1/students/" + id,
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

    return Students;
  }

  angular
    .module('student')
    .factory('StudentSvc', ['$http', '$log', studentSvcFunct]);
})();