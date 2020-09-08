const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

exports.getProducts = (req,res,next)=>{
    //fetchAll
    Product.fetchAll(products => {
        res.json(products);
    });
};