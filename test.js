var assert = require('assert');
var fakeRestaurant = require('./index')

describe('Orders', function() {
    it('get all orders', function() {
          assert.equal(fakeRestaurant.allOrders().length, 3);
    });

    it('get all orders by status', function() {
          assert.equal(fakeRestaurant.allOrdersByStatus('new').length, 1);
          assert.equal(fakeRestaurant.allOrdersByStatus('closed').length, 1);
          assert.equal(fakeRestaurant.allOrdersByStatus('ready').length, 1);
    });

    it('create new order', function() {
        var order = { products: "Pizza Margherita", price: 2, user: "Pippo"};
        fakeRestaurant.createOrder(order);
        assert.equal(fakeRestaurant.allOrders().length, 4);
        assert.equal(fakeRestaurant.allOrders()[3].id, 3);
        assert.equal(fakeRestaurant.allOrders()[3].status, 'new');
    });

    it('delete order', function() {
        fakeRestaurant.deleteOrder(1);
        assert.equal(fakeRestaurant.allOrders().length, 3);
        assert.equal(fakeRestaurant.allOrders()[2].id, 3);
        assert.equal(fakeRestaurant.allOrders()[2].status, 'new');
    });

    it('setStatus order', function() {
        fakeRestaurant.setStatus(3, 'ready');
        assert.equal(fakeRestaurant.allOrdersByStatus('new').length, 0);
        assert.equal(fakeRestaurant.allOrdersByStatus('closed').length, 1);
        assert.equal(fakeRestaurant.allOrdersByStatus('ready').length, 2);
    });

    it('get profit', function() {
        assert.equal(fakeRestaurant.getProfit(), 7);
    });

    it('get orders by Users', function() {
        assert.equal(fakeRestaurant.getOrdersByUser('Pippo').length, 2);
        assert.equal(fakeRestaurant.getOrdersByUser('Caio').length, 1);
        assert.equal(fakeRestaurant.getOrdersByUser('Sempronio').length, 0);
    });
});
