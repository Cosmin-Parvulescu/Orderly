/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /orders              ->  index
 */

'use strict';

var _ = require('lodash');
var Orderstatus = require('./orderstatus.model');

// Get list of orders
exports.index = function(req, res) {
  Orderstatus.find(function (err, orders) {
    if(err) { return handleError(res, err); }
    return res.json(200, orders);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}