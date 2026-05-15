const express = require("express");

const authRoutes = require("./routes/auth.routes");
const orderRoutes = require("./routes/order.routes");
const marketRoutes = require("./routes/market.routes");
const userRoutes = require("./routes/user.routes");

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/orders", orderRoutes);
app.use("/market", marketRoutes);
app.use("/user", userRoutes);

app.listen(3000, () => {
  console.log("CEX running on :3000");
});