const Product = require("../models/product");
const productAPI = require("../utils/productAPI");

exports.createProduct = async (req, res, next) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getProducts = async (req, res, next) => {
  try {
    //const products = await Product.find();

    const productsApi = new productAPI(Product.find(), req.query).search();
    const products = await productsApi.query;

    res.status(200).json({
      success: true,
      products,
      productsCount: products.length,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

exports.getSingleProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);

    res.status(200).json({
      success: true,
      product,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      message: "Product ID not found",
    });
  }
};
