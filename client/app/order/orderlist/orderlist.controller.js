'use strict';

angular.module('orderlyApp')
  .controller('OrderlistCtrl', function($scope, $http, Auth) {
    $scope.orders = [];

    $http.get('/api/orders').success(function(orders) {
      $scope.orders = orders;
    });

    $scope.addOrder = function() {
      if($scope.orderRestaurant === '')
        return;

      var user = Auth.getCurrentUser();      

      $http
        .post('/api/orders', { 
          restaurant: $scope.orderRestaurant,
          owner: user._id
        })
        .success(function(data, status) {
          $http.get('/api/orders').success(function(orders) {
            $scope.orders = orders;
          });
        });

      $scope.orderRestaurant = '';
    }
  });