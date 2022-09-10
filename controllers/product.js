const Product = require("../model/product.js");

const createProduct = async (req, res) => {
  const { ...body } = req.body;

  const product = new Product(body);

  // Guardar DB
  await product.save();

  res.status(201).json(product);
};

const findProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    console.log(error);
  }
};
const productId = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json({ product });
  } catch (error) {
    console.log();
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete();
    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

const update = async (req, res) => {
  try {
    const newproduct = req.body;

    const product = await Product.findOneAndUpdate(
      { _id: req.params._id },
      newproduct,
      { new: true }
    );

    res.json({ product });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createProduct,
  findProduct,
  deleteProduct,
  update,
  productId,
};
