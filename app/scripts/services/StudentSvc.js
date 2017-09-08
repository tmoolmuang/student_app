(function() {
  function studentSvcFunct($http, $log) {  
    var Students = {};

    Students.getAllStudents = function(cb) {
      $http({
        url: "https://students-tm.herokuapp.com/api/v1/students",
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
   	  	
    return Students;
  }

  angular
    .module('student')
    .factory('StudentSvc', ['$http', '$log', studentSvcFunct]);
})();