const mongoose = require("mongoose");
const {config} = require("../config/config.js")

const conectDB = async () => {
  try {
    await mongoose.connect(config.database, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectDB");
  } catch (error) {
    console.log(error);
    console.log("hubo un error");
  }
};

module.exports = { conectDB };
