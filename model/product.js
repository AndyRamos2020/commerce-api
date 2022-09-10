const mongoose = require('mongoose');
const { Schema } = mongoose;

let ProductShema = new Schema({
  name: {
    type: String,
    index: true,
    require: true,
  },
  sku: {
    type: String,
    index: true,
    unique: true,
    require: true,
  },
  category: {
    type: String,
    index: true,
    required: false,
  },
  description: {
    type: String,
    index: true,
    required: false,
  },
  tags: {
    type: [String],
    index: true,
  },
  size: {
    type: String,
    required: false,
  },
  imageURL: {
    type: [String],
    required: false,
    index: false,
  },
  priority: {
    type: Number,
    required: false,
  },
  stock: {
    type: Number,
    required: false,
  },
  isActive: {
    type: Boolean,
    index: true,
    required: true,
    default: true,
  },
  customFields: {
    type: Object,
    required: false,
  },
});

module.exports = mongoose.model("Product", ProductShema);
