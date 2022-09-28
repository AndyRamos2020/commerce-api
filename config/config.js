require("dotenv").config();

const config = {
  port: process.env.PORT || 5000,
  database: process.env.DB_USER,
  jwt: process.env.JWT_SECRET,
};

module.exports = { config };
