angular.module('weatherApp', [])
  .controller('place_idController', ['$scope', '$http', function($scope, $http){
    $scope.cityName = "";

    $scope.searchCity = function(cityName){
      $http.get("http://codingchallenge.chathamfinancial.com/api/cities/search?byName=" + cityName)
      .then(function(response){
        $scope.apiResponse = response.data;
      })
    }

    $scope.getCoords = function(place_id){
      $http.get("http://codingchallenge.chathamfinancial.com/api/cities/" + place_id)
      .then(function(response){
        $scope.apiResponse = response.data;
        $scope.lat = $scope.apiResponse.result.geometry.location.lat;
        $scope.lng = $scope.apiResponse.result.geometry.location.lng;
      })
    }

    $scope.setPlaceID = function(place_id){ //set scope.place_id
      $scope.place_id = place_id;
    }
  }]);
