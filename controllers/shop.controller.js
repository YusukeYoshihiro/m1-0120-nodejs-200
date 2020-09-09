const Cart = require('../models/cart.model');
const Product = require('../models/product.model');

//getting all products
exports.getProducts = (req,res,next)=>{
    //fetchAll
    Product.fetchAll(products => {
        // res.json(products);
        res.render('shops/product-list', {
            pageTitle: 'All Products',
            products: products,
            path: '/' //for navigation bar's active button
        });
    });
};

//getting one product
exports.getOneProduct = (req,res,next) => {
    const prodId = req.params.productId;
    Product.findById(prodId, product => {
        console.log('product: ',product)
        res.render('shops/product-detail', {
            pageTitle: product.title,
            product: product,
            path: '/products' //for navigation bar's active button
        })
    })
};

exports.getCart = (req,res,next) => {
    Cart.getCart(cart => {
        Product.fetchAll(products => {
            const cartProducts = [];
            for(product of products){
                const cartProductData = cart.products.find(
                    prod => prod.id === product.id
                );
                if(cartProductData){
                    cartProducts.push({
                        productData: product,
                        qty: cartProductData.qty
                    });
                }
            }
            res.render('shops/cart', {
                pageTitle: 'Your cart',
                products: cartProducts,
                path: '/cart'
            });
        })
    })
}

exports.postCart = (req,res,next) => {
    const prodId = req.body.productId;
    Product.findById(prodId, product => {
        Cart.addProduct(prodId, product.price);
        res.redirect('/cart');
    });
};