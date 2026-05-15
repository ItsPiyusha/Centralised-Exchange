const express = require("express");

const {
  getStocks,
  getOrderbook,
  getFills,
} = require("../controllers/market.controller");

const router = express.Router();

router.get("/stocks", getStocks);
router.get("/orderbook/:symbol", getOrderbook);
router.get("/fills/:symbol", getFills);

module.exports = router;