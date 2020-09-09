const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop.controller');

//shop index ------ in browser: /
router.get('/', shopController.getProducts);

//get all products ------ in browser: /products
router.get('/products', (req,res,next) => {

})

//get one product
router.get('/products/:productId', shopController.getOneProduct);

//go to cart page
router.get('/cart', shopController.getCart);

//post a product on cart ---or add to cart
router.post('/cart', shopController.postCart);

router.post('/cart-delete-item', (req,res,next) => {

});

router.get('/orders',  (req,res,next) => {

});

router.get('/checkout', (req,res,next) => {

});

module.exports = router;
