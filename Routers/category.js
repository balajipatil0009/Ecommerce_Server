const express = require("express");
const router = express.Router();
const product = require('../Modules/productSchema');

router.get('/:category',async(req, res)=>{
    const category = req.params.category;
    console.log(category);
    const products = await product.find({category: category});
    res.send(products)
})

module.exports = router;