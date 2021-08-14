const express = require("express");
const router = express.Router();

const {
  getProducts,
  createProduct,
  getSingleProduct,
} = require("../controllers/productController");
router.route("/products").get(getProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
