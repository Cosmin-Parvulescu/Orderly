'use strict';

angular.module('orderlyApp')
  .controller('OrderdetailCtrl', function($scope, $http, $routeParams) {
    var orderId = $routeParams.orderId;

    var getOrderByIdUrl = '/api/orders/' + orderId;
    var getOrderlinesByOrderIdUrl = '/api/orderlines/order/' + orderId;

    /*
    * Not sure if this is how it should be done,
    * for now I am making the request url myself
    * as params {} doesn't seem to GET from the
    * right route action.
    */
    var getOrder = function() {
      $http.get(getOrderByIdUrl).success(function(order) {
        $scope.order = order;

        console.log("Finished loading order");
        console.log(order);
      });
    };

    var getOrderlinesForOrder = function() {
      $http.get(getOrderlinesByOrderIdUrl).success(function(orderlines) {
        $scope.orderlines = orderlines;

        console.log("Finished loading orderlines");
        console.log(orderlines);
      });
    };

    getOrder();
    getOrderlinesForOrder();
  });