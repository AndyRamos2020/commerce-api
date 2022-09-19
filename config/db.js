const mongoose = require("mongoose");

const conectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_USER, {
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
