'use strict';

angular.module('orderlyApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/Order', {
        templateUrl: 'app/order/orderlist/orderlist.html',
        controller: 'OrderlistCtrl'
      })
      .when('/Order/:orderId', {
      	templateUrl: 'app/order/orderdetail/orderdetail.html',
      	controller: 'OrderdetailCtrl'
      })
      .otherwise({
      	redirectTo: '/Order'
      });
  });