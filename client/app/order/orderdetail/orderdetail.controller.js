'use strict';

angular.module('orderlyApp')
  .controller('OrderdetailCtrl', function($scope, $http, $routeParams) {
    $scope.order = {};

    var orderId = $routeParams.orderId; 
    var getUrl = '/api/orders/' + orderId;

    /*
    * Not sure if this is how it should be done,
    * for now I am making the request url myself
    * as params {} doesn't seem to GET from the
    * right route action.
    */
    $http.get(getUrl).success(function(order) {
      $scope.order = order;

      console.log($scope.order);
    });
  });