/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /orderlines              ->  index
 * POST    /orderlines              ->  create
 * GET     /orderlines/:id          ->  show
 * PUT     /orderlines/:id          ->  update
 * DELETE  /orderlines/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Orderline = require('./orderline.model');

// Get list of orderlines
exports.index = function(req, res) {
  Orderline.find(function (err, orderlines) {
    if(err) { return handleError(res, err); }
    return res.json(200, orderlines);
  });
};

// Get a single orderline
exports.show = function(req, res) {
  Orderline.findById(req.params.id, function (err, orderline) {
    if(err) { return handleError(res, err); }
    if(!orderline) { return res.send(404); }
    return res.json(orderline);
  });
};

// Get orderlines related to an Order
exports.showByOrder = function(req, res) {
  Orderline.find({ order: req.params.id }).populate('orderitems owner').exec(function(err, orderlines) {
    if(err) {
      return handleError(res, err);
    }

    if(!orderlines) {
      return res.send(404);
    }

    return res.json(orderlines);
  });
}; 

// Creates a new orderline in the DB.
exports.create = function(req, res) {
  Orderline.create(req.body, function(err, orderline) {
    if(err) { return handleError(res, err); }
    return res.json(201, orderline);
  });
};

// Updates an existing orderline in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Orderline.findById(req.params.id, function (err, orderline) {
    if (err) { return handleError(err); }
    if(!orderline) { return res.send(404); }
    var updated = _.merge(orderline, req.body);
    updated.save(function (err) {
      if (err) { return handleError(err); }
      return res.json(200, orderline);
    });
  });
};

// Deletes an orderline from the DB.
exports.destroy = function(req, res) {
  Orderline.findById(req.params.id, function (err, orderline) {
    if(err) { return handleError(res, err); }
    if(!orderline) { return res.send(404); }
    orderline.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}