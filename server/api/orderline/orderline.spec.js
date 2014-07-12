'use strict';

var should = require('should');
var app = require('../../app');
var request = require('supertest');

var Orderline = require('./orderline.model');

var orderline;

describe('GET /api/orderlines', function() {
  it('should respond with JSON array', function(done) {
    request(app)
      .get('/api/orderlines')
      .expect(200)
      .expect('Content-Type', /json/)
      .end(function(err, res) {
        if (err) return done(err);
        res.body.should.be.instanceof(Array);
        done();
      });
  });
});

describe('Orderline Model', function() {
  before(function(done) {
    orderline = new Orderline();
    orderline.orderitems = [{
      name: 'Pork Tandoori',
        price: 18.5
      }, {
        name: 'Tortellini Bianco al Forno',
        price: 18
      }];

      done();
  });

  it('should give out the total', function(done) {
    (orderline.total).should.be.exactly(36.5).and.be.a.Number;
    done();
  });
})