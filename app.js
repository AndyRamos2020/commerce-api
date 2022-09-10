const express = require("express");
const cors = require("cors");
const conectDB = require("./config/db.js");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 3000;

app.use("/product", require("./router/products.js"));
app.use("/auth", require("./router/auth.js"));

conectDB();

app.listen(PORT, () => {
  console.log(`running in the PORT: ${PORT}`);
});
