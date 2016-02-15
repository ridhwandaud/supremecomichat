
var mainControllers = angular.module('mainControllers', []);

mainControllers.controller('AretisListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('komikdata/aretis.json').success(function(data) {
      $scope.aretis = data;
    });
  }]);

mainControllers.controller('SiriListCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get('komikdata/siri.json').success(function(data) {
      $scope.siri = data;
    });
  }]);

mainControllers.controller('SiriDetailCtrl', ['$scope', '$routeParams', '$http','$log',
  function($scope, $routeParams, $http,$log) 
  {
  	
    $http.get('komikdata/' + $routeParams.namaSiri + '.json').success(function(data) 
    {
      $scope.siriDetail = data;
    });
  }]);

mainControllers.controller('SmsCtrl', ['$scope', '$http',
  function($scope, $http) {
    $http.get("http://apis.lightgearlab.com/terapi/sms").success(function(data) {
      $scope.sms = data;
    });
  }]);
