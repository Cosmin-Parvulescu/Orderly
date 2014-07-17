'use strict';

angular.module('orderlyApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/order/orderlist/orderlist.html',
        controller: 'OrderlistCtrl'
      });
  });