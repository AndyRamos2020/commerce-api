const mongoose = require("mongoose");
require('dotenv').config();

const conectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://m001-student:W0obLggB9zcOhH89@sandbox.hfgao.mongodb.net/commerce?retryWrites=true&w=majority",
      {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      }
    );
    console.log("conectDB");
  } catch (error) {
    console.log(error);
    console.log("hubo un error");
  }
};

module.exports = conectDB;
