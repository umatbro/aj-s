angular.module('weatherApp', [])
  .controller('mainController', ['$scope', '$http', function($scope, $http){
    //default values
    $scope.cityName = "";
    $scope.message = "Wybierz miasto";
    $scope.lat = 50.06465009999999;
    $scope.lng = 19.9449799;

    // weather forecast sources
    $scope.sources = [ "FORECAST_IO", "WORLD_WEATHER"];
    $scope.sourceSelected = $scope.sources[0];

    $scope.displayForecast = "hidden";
    $scope.forecastWeek = [];

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
        $scope.setCoords(
          $scope.apiResponse.result.geometry.location.lat,
          $scope.apiResponse.result.geometry.location.lng
        );
        // $scope.lat = $scope.apiResponse.result.geometry.location.lat;
        // $scope.lng = $scope.apiResponse.result.geometry.location.lng;
      })
    }

    $scope.setCoords = function(lat,lng){
      $scope.lat = lat;
      $scope.lng = lng;
    }

    $scope.setPlaceID = function(place_id,description){ //set scope.place_id
      $scope.place_id = place_id;
      $scope.citySelected = description;
    }

    $scope.setCitySelected = function(citySelected){
      $scope.citySelected = citySelected;
    }
    $scope.setMessage = function(message){
      // set message
      $scope.message = message;
      // clear previous forecasts
      $scope.forecastCurrent = null;
      $scope.forecastWeek = [];
      $scope.displayForecast = "hidden";
    }

    $scope.getWeekForecast = function(lat,lng,source){
      $scope.message = $scope.citySelected;
      $scope.displayForecast = "visible";

      var apiAdress = "http://codingchallenge.chathamfinancial.com/api/forecast";
      var query = "?latitude=" + lat + "&longitude=" + lng + "&source=" + source;
      console.log(query);
      query = apiAdress + query;
      $http.get(query)
      .then(function(response){
        $scope.apiResponse = response.data;
        var current = $scope.apiResponse.currently;

        //get current weather
        $scope.forecastCurrent = new Forecast(
          farToCel(current.temperature)+" \xB0C",
          farToCel(current.apparentTemperature)+" \xB0C",
          current.date,
          current.humidity * 100,
          current.pressure,
          current.cloudCover
        );
        var week = $scope.apiResponse.futureForecasts;

        // grab forecast for whole week
        for(day = 0; day < week.length; day++){
          $scope.forecastWeek.push(new Forecast(
            null,
            null,
            week[day].date,
            week[day].humidity * 100,
            week[day].pressure,
            week[day].cloudCover,
            farToCel(week[day].temperatureMin) + "\xB0C",
            farToCel(week[day].temperatureMax) + "\xB0C",
            farToCel(week[day].apparentTemperatureMin) + "\xB0C",
            farToCel(week[day].apparentTemperatureMax) + "\xB0C"
          ));
        }
      })
    }
  }]);
