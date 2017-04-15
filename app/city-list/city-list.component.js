'use strict';
angular.module('cityList').
  component('cityList', {
    templateUrl: 'city-list/city-list.template.html',
    controller: ['$http',
    function CityListController($http){
      var self = this;

      $http.get('city-list/cities.json')
      .then(function(response){
        self.cities = response.data;
      });
    }
  ]
});
