const USERS = [];

const STOCKS = [
  { id: 1, title: "AXIS BANK", symbol: "AXIS" },
  { id: 2, title: "HDFC BANK", symbol: "HDFC" },
  { id: 3, title: "TATA Steel", symbol: "TATA" },
];

const ORDERS = [];
const FILLS = [];

const BALANCES = {};

const ORDERBOOK = {
  AXIS: { bids: {}, asks: {} },
  HDFC: { bids: {}, asks: {} },
  TATA: { bids: {}, asks: {} },
};

module.exports = {
  USERS,
  STOCKS,
  ORDERS,
  FILLS,
  BALANCES,
  ORDERBOOK,
};