'use strict';

angular.module('orderlyApp')
  .controller('OrderdetailCtrl', function($scope, $http, $routeParams, Auth) {
    var orderId = $routeParams.orderId;

    var getOrderByIdUrl = '/api/orders/' + orderId;
    var getOrderlinesByOrderIdUrl = '/api/orderlines/order/' + orderId;

    var createOrderlineUrl = 'api/orderlines';

    $scope.orderitems = [];

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

    $scope.addOrderitem = function() {
      $scope.orderitems.push({
        name: $scope.orderitemName,
        price: $scope.orderitemPrice
      });

      $scope.orderitemName = '';
      $scope.orderitemPrice = '';
    };

    $scope.sendOrderline = function() {
      var user = Auth.getCurrentUser();

      var orderline = {
        order: orderId,
        owner: user._id,
        orderitems: $scope.orderitems
      };

      $http.post(createOrderlineUrl, orderline).success(function(orderline) {
        getOrderlinesForOrder();
      });
    };

    $scope.isAuthenticated = function() {
      return Auth.isLoggedIn();
    }

    $scope.hasOrderline = function() {
      return $scope.orderitems.length > 0;
    }

    getOrder();
    getOrderlinesForOrder();
  });