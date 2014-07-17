'use strict';

angular.module('orderlyApp')
  .controller('OrderdetailCtrl', function($scope, $http, $routeParams) {
    var orderId = $routeParams.orderId; 
    var getOrderByIdUrl = '/api/orders/' + orderId;

    /*
    * Not sure if this is how it should be done,
    * for now I am making the request url myself
    * as params {} doesn't seem to GET from the
    * right route action.
    */
    var getOrderById = function(OrderId) {
      $http.get(getOrderByIdUrl).success(function(order) {
        $scope.order = order;

        console.log($scope.order);
      });
    };

    getOrderById();
  });