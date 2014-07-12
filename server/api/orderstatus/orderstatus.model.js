'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderstatusSchema = new Schema({
	status: String
});

module.exports = mongoose.model('Orderstatus', OrderstatusSchema);