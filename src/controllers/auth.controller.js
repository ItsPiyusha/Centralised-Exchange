const { USERS, BALANCES } = require("../store/memory");

function signup(req, res) {
  const { username, password } = req.body;

  const existingUser = USERS.find(
    user => user.username === username
  );

  if (existingUser) {
    return res.status(400).json({
      message: "Username already exists",
    });
  }

  const newUser = {
    id: USERS.length + 1,
    username,
    password,
  };

  USERS.push(newUser);

  BALANCES[newUser.id] = {
    INR: {
      available: 100000,
      locked: 0,
    },
  };

  res.json({
    message: "Signup successful",
    user: newUser,
  });
}

function login(req, res) {
  res.json({
    message: "Login route",
  });
}

module.exports = {
  signup,
  login,
};