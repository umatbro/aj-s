angular.module('weatherApp', [])
  .controller('mainController', ['$scope', '$http', function($scope, $http){
    $scope.cityName = "";
    $scope.citySelected = "Kraków";
    $scope.lat = 50.06465009999999;
    $scope.lng = 19.9449799;

    $scope.sources = [ "FORECAST_IO", "WORLD_WEATHER"];
    $scope.sourceSelected = $scope.sources[0];

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

    $scope.setPlaceID = function(place_id,description){ //set scope.place_id
      $scope.place_id = place_id;
      $scope.citySelected = description;
    }

    $scope.setCitySelected = function(citySelected){
      $scope.citySelected = citySelected;
    }

    $scope.getWeekForecast = function(lat,lng,source){
      var apiAdress = "http://codingchallenge.chathamfinancial.com/api/forecast?";
      var query = "latitude=" + lat + "&longitude=" + lng + "&source=" + source;
      console.log(query);
      query = apiAdress + query;
      // query = "https://api.darksky.net/forecast/8dabfe815233a9733881c391720ab8e3/50.06465009999999,19.9449799?exclude=minutely,hourly&lang=pl"
      $http.get(query)
      .then(function(response){
        $scope.apiResponse = response.data;

      })
    }
  }]);
