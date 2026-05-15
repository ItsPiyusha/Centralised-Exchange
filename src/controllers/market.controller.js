const {
  STOCKS,
  ORDERBOOK,
  FILLS,
} = require("../store/memory");

function getStocks(req, res) {
  res.json(STOCKS);
}

function getOrderbook(req, res) {
  const { symbol } = req.params;

  res.json(ORDERBOOK[symbol]);
}

function getFills(req, res) {
  const { symbol } = req.params;

  const trades = FILLS.filter(
    fill => fill.symbol === symbol
  );

  res.json(trades);
}

module.exports = {
  getStocks,
  getOrderbook,
  getFills,
};