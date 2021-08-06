const Product = require('../models/product');

exports.createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            success: true,
            product
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}

exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.status(200).json({
            success: true,
            products,
            productsCount: products.length
        })
    } catch (error) {
        res.status(400).json({
            success: false,
            error: error.message
        })
    }

}