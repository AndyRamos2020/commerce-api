const mongoose = require("mongoose");
const { Schema } = mongoose;
let authctSchema = new Schema({
  email: { type: String, index: true, unique: true },
  password: { type: String, index: false },
  type: {
    type: String,
    admin: true,
    index: false,
    username: true
  },
});

module.exports = mongoose.model("Auth", authctSchema);
