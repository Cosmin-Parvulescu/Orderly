'use strict';

angular.module('orderlyApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/Order', {
        templateUrl: 'app/order/order.html',
        controller: 'OrderCtrl'
      });
  });