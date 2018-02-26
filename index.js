var orders = [
  {
    id: 0,
    products: "Doppio cheeseburger",
    status: "ready",
    price: 3,
    user: "Pippo"
  },
  {
    id: 1,
    products: "McChicken",
    status: "new",
    price: 8,
    user: "Pippo"
  },
  {
    id: 2,
    products: "Coca cola light",
    status: "closed",
    price: 2,
    user: "Caio"
  }
]

var counter = 3;


exports.allOrders = function() {
  return orders;
}

exports.allOrdersByStatus = function(status) {
  var filteredOrders = [];
  for(var i=0; i<orders.length; i++) {
    if (orders[i].status === status) {
        filteredOrders.push(orders[i])
    }
  }
  return filteredOrders;
}

exports.createOrder = function(newOrder) {
    newOrder.id = counter++;
    newOrder.status = "new";
    return orders.push(newOrder);
}

exports.deleteOrder = function(id) {
    for(var i=0; i<orders.length; i++) {
      if (orders[i].id === id) {
          return orders.splice(i, 1);
      }
    }
}

exports.setStatus = function(id, status) {
    for(var i=0; i<orders.length; i++) {
      if (orders[i].id === id) {
        orders[i].status = status;
      }
    }
}

exports.getProfit = function() {
    var profit = 0;
    for(var i=0; i<orders.length; i++) {
      profit += orders[i].price;
    }
    return profit;
}

exports.getOrdersByUser = function(user) {
  var filteredOrders = [];
  for(var i=0; i<orders.length; i++) {
    if (orders[i].user === user) {
        filteredOrders.push(orders[i])
    }
  }
  return filteredOrders;
}
