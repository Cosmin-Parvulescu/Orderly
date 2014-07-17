'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderlineSchema = new Schema({
  order: { type: Schema.ObjectId, ref: 'Order'},
  owner: { type: Schema.ObjectId, ref: 'User' },
  orderitems: [{
    name: String,
    price: Number
  }]
});

OrderlineSchema.virtual('total').get(function() {
  var total = 0;

  for(var i = 0; i < this.orderitems.length; i++) {
    total += this.orderitems[i].price;
  }

  return total;
});

OrderlineSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Orderline', OrderlineSchema);