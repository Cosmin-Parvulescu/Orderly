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

User.find({}).remove(function(err) {
  if (err) return console.error(err);

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
  }, function(err, userRes) { 
  
    if (err) return console.error(err);
 
    Order.find({}).remove(function(err) {
      if (err) return console.error(err);
    });

    Order.create({
      restaurant: 'Grafitti',
      owner: userRes._id,
    }, function(err, orderRes) {
      if (err) return console.error(err);

      var foodstuff = [{
        name: 'Pork Tandoori',
        price: 18.5 // desi e 18 :(
      }, {
        name: 'Tortellini bianco al forno',
        price: 18
      }, {
        name: 'Pizza taraneasca',
        price: 20
      }];
        
      Orderline.create({
        order: orderRes._id,
        orderitems: foodstuff,
        owner: userRes._id,
      }, function(err) {
        if (err) return console.error(err);
        
        console.log('Finished populating Orderlines');
      });
    });

    Order.create({
      restaurant: 'Shaorma Kogalniceanu',
      owner: userRes._id,
    }, function(err, orderRes) {
      if (err) return console.error(err);

      var foodstuff = [{
        name: 'Shaorma mare cu de toate (caini, pisici)',
        price: 5
      }, {
        name: 'Shaorma mica fara carne (de post)',
        price: 3
      }];
        
      Orderline.create({
        order: orderRes._id,
        orderitems: foodstuff,
        owner: userRes._id,
      }, function(err) {
        if (err) return console.error(err);
        
        console.log('Finished populating Orderlines');
      });
    });
  });
});
