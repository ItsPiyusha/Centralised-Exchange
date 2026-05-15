const { BALANCES } = require("../store/memory");

function getBalance(req, res) {
  const userId = 1;

  res.json(BALANCES[userId]);
}

module.exports = {
  getBalance,
};