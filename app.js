const express = require("express");
const cors = require("cors");
const { conectDB } = require("./db/database.js");
const { config } = require("./config/config.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

const PORT = config.port;

app.use("/product", require("./router/products.js"));
app.use("/auth", require("./router/auth.js"));

conectDB();

app.listen(PORT, () => {
  console.log(`running in the PORT: ${PORT}`);
});
