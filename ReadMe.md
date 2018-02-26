
## simple fake restaurant orders


## Installation

    npm install fake-restaurant-npm

## fake orders in fake restaurant!

## Usage

```js
var fakeRestaurant = require('fake-restaurant-npm');

console.log(fakeRestaurant.allOrders()); // show all orders
console.log(fakeRestaurant.allOrdersByStatus('new')); // get order by status
fakeRestaurant.createOrder({products:'Coca cola', price: 2, user: 'Pippo'})); // create a new order
fakeRestaurant.deleteOrder(1); // delete order with id 1

fakeRestaurant.setStatus(2, 'ready');

console.log(fakeRestaurant.getProfit()); // sum of price all orders
fakeRestaurant.getOrdersByUser('Pippo'); // get Pippo orders

```
