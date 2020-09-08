const fs = require('fs');
const path = require('path');

//path to cart.json
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');

module.exports = class Cart{
    //adding product to cart
    static addProduct(id, productPrice){
        //fetching of previous cart
        fs.readFile(p, (err, fileContent)=>{
            let cart = { products: [], totalPrice: 0};
            if(!err){
                cart = JSON.parse(fileContent);
            }
            //analyze product to add and return the index
            const exisitingProductIndex = cart.products.findIndex(prod => prod.id === id);

            const existingProduct = cart.products[exisitingProductIndex];
            
            let updatedProduct;
            if(existingProduct){
                updatedProduct = { ...existingProduct };
                updatedProduct.qty = updatedProduct.qty + 1;
                cart.products = [...cart.products];
                cart.products[exisitingProductIndex] = updatedProduct;
            }else{
                updatedProduct = { id, qty: 1 };
                cart.products  = [...cart.products, updatedProduct];
            }
            cart.totalPrice = cart.totalPrice + parseInt(productPrice); // +productPrice is the same as parseInt(productPrice)
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
}