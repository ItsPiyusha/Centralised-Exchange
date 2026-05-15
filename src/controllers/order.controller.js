function createOrder(req, res) {
  res.json({
    message: "Order placed",
  });
}

function cancelOrder(req, res) {
  res.json({
    message: "Order cancelled",
  });
}

function getOrders(req, res) {
  res.json([]);
}

module.exports = {
  createOrder,
  cancelOrder,
  getOrders,
};