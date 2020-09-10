const express = require('express');
const router = express.Router();

const adminController = require('../controllers/admin.controller');

router.get('/add-product', adminController.getAddProduct);

router.post('/add-product', adminController.postAddProduct);

router.get('/products', (req,res,next) => {

});

router.get('/edit-product/:productId', (req,res,next) => {

});

router.post('/edit-product', (req,res,next) => {

});

router.post('/delete-product', (req,res,next) => {

});

module.exports = router;