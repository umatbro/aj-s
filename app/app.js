var weatherApp = angular.module('weather2App', []);

//define the PhoneListController controller on the phonecatApp module
weatherApp.controller('PhoneListController', function PhoneListController($scope, $http) {
$scope.name = "world";
$scope.cityName = "kato";
var getQ = "http://codingchallenge.chathamfinancial.com/api/cities/search?byName=" + $scope.cityName;

   //https://www.w3schools.com/angular/angular_http.asp
   //$http.get("http://codingchallenge.chathamfinancial.com/api/forecast?latitude=50.26489189999999&longitude=1&source=WORLD_WEATHER")
   $http.get(getQ)
   .then(function(response){
     $scope.apiResponse = response.data;
   })
});
