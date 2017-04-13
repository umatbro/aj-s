var phonecatApp = angular.module('phonecatApp', []);

//define the PhoneListController controller on the phonecatApp module
phonecatApp.controller('PhoneListController', function PhoneListController($scope, $http) {
  $scope.phones = [
    {
      name: "Nexus S",
      snippet: "Fast just got faster with Nexus S."
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
     snippet: 'The Next, Next Generation tablet.'
    }, {
     name: 'MOTOROLA XOOM™',
     snippet: 'The Next, Next Generation tablet.'
   }
 ];

 $scope.name = "world";
$scope.cityName = "zende";
var getQ = "http://codingchallenge.chathamfinancial.com/api/cities/search?byName=" + $scope.cityName;

   //https://www.w3schools.com/angular/angular_http.asp
   //$http.get("http://codingchallenge.chathamfinancial.com/api/forecast?latitude=50.26489189999999&longitude=1&source=WORLD_WEATHER")
   $http.get(getQ)
   .then(function(response){
     $scope.apiResponse = response.data;
   })
});
