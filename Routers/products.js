const express = require('express');
const router = express.Router();
const product = require('../Modules/productSchema')

router.get('/', async(req, res)=>{
    const products = await product.find();
    res.send(products);
})

// router.get('/',(req, res)=>{
//     const products = {title:"balaji4",imgUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEh4nbADFBgGY_nDX_2et_ww2yX5QXvGsEGA&usqp=CAU", datails:"qwertyuiokjhgfdszxvbnm,loirescvbhjknbvfyhbvftyhbvfhcdtyhbvcdrt", price:200,stock:100,category:"electric"}
//    const newProduct = new product(products);
//    newProduct.save().then(()=>{
//     res.send("product saved")
//    }).catch((err)=>{
//     res.send("an error occured");
//    })
// })
module.exports = router;