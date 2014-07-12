/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Orderline = require('../api/orderline/orderline.model');
var Orderstatus = require('../api/orderstatus/orderstatus.model');
var Order = require('../api/order/order.model');
var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Orderstatus.find({}).remove(function() {
  Orderstatus.create({
    status: 'Initiat'
  }, {
    status: 'Prelucrat'
  }, {
    status: 'Finalizat'
  }, {
    status: 'Anulat'
  }, function() {
    console.log('Finished populating Orderstatuses');
  });
});

Order.find({}).remove(function() {
  Orderstatus.findOne({ status: 'Initiat' }, function(err, orderstatusRes) {
    Order.create({
      restaurant: 'Graffiti',
      orderstatus: orderstatusRes._id
    }, function() {
      console.log('Finished populating Orders');

      Order.findOne(function(err, orderRes) {
        var foodstuff = [{
          name: 'Pork Tandoori',
          price: 18.5 // desi e 18 :(
        }, {
          name: 'Tortellini bianco al forno',
          price: 18
        }];

        Orderline.create({
          order: orderRes._id,
          orderitems: foodstuff
        }, function() {
          console.log('Finished populating Orderlines');
        });
      });
    });
  });
});

Thing.find({}).remove(function() {
  Thing.create({
    name : 'Development Tools',
    info : 'Integration with popular tools such as Bower, Grunt, Karma, Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, Sass, CoffeeScript, and Less.'
  }, {
    name : 'Server and Client integration',
    info : 'Built with a powerful and fun stack: MongoDB, Express, AngularJS, and Node.'
  }, {
    name : 'Smart Build System',
    info : 'Build system ignores `spec` files, allowing you to keep tests alongside code. Automatic injection of scripts and styles into your index.html'
  },  {
    name : 'Modular Structure',
    info : 'Best practice client and server structures allow for more code reusability and maximum scalability'
  },  {
    name : 'Optimized Build',
    info : 'Build process packs up your templates as a single JavaScript payload, minifies your scripts/css/images, and rewrites asset names for caching.'
  },{
    name : 'Deployment Ready',
    info : 'Easily deploy your app to Heroku or Openshift with the heroku and openshift subgenerators'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});