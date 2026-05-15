const express = require("express");

const {
  createOrder,
  cancelOrder,
  getOrders,
} = require("../controllers/order.controller");

const router = express.Router();

router.post("/", createOrder);
router.delete("/:orderId", cancelOrder);
router.get("/", getOrders);

module.exports = router;