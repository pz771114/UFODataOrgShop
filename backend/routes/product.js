const express = require("express");
const router = express.Router();
const { isAuthenticatedUser } = require("../middlewares/auth");

const {
  getProducts,
  createProduct,
  getSingleProduct,
} = require("../controllers/productController");
router.route("/products").get(isAuthenticatedUser, getProducts);
router.route("/product/new").post(createProduct);
router.route("/product/:id").get(getSingleProduct);

module.exports = router;
