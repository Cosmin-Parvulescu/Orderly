'use strict';

angular.module('orderlyApp')
  .controller('OrderCtrl', function($scope, $http) {
    $scope.orders = [];

    $http.get('/api/orders').success(function(orders) {
      $scope.orders = orders;
    });

    $scope.addOrder = function() {
      if($scope.orderRestaurant === '')
        return;

      $http
        .post('/api/orders', { restaurant: $scope.orderRestaurant })
        .success(function(data, status) {
          console.log(data);
          console.log(status);

          $http.get('/api/orders').success(function(orders) {
            $scope.orders = orders;
          });
        });

      $scope.orderRestaurant = '';
    }
  });