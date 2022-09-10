const express = require("express");
const {
  createProduct,
  findProduct,
  deleteProduct,
  update,
  productId,
} = require("../controllers/product");
const router = express();

router.get("/", findProduct);

router.get("/:id", productId)

router.post("/save", createProduct);

router.delete("/delete/:id", deleteProduct);

router.put("/update/:id", update);

module.exports = router;
