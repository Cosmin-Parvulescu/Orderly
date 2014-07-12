'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  restaurant: String,
  date: { type: Date, default: Date.now },
  orderStatus: { type: Schema.ObjectId, ref: 'OrderStatus' },
  owner: { type: Schema.ObjectId, ref: 'User' },
  orderlines: [{ type: Schema.ObjectId, ref: 'Orderline'}]
});

module.exports = mongoose.model('Order', OrderSchema);