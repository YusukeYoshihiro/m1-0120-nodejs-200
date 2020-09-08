const express = require('express');
const router = express.Router();

const shopController = require('../controllers/shop.controller');

//shop index
router.get('/', shopController.getProducts);

router.get('/products', (req,res,next) => {

})

router.get('/products/:productId', (req,res,next)=> {

});

router.get('/cart', (req,res,next) => {

});

router.post('/cart', (req,res,next)=> {

});

router.post('/cart-delete-item', (req,res,next) => {

});

router.get('/orders',  (req,res,next) => {

});

router.get('/checkout', (req,res,next) => {

});

module.exports = router;
