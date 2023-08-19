const express = require("express")
const router = express.Router();
const cart = require('../Modules/cartSchema');
const authUser = require('../MiddelWares/Auth')

router.get("/:id",authUser,async(req, res)=>{
const cartItems = await cart.findOne({userId: req.userId}).populate('cartItems')
res.send(cartItems.cartItems);
})

router.post('/:id',async(req, res)=>{
    const userId = req.userId;
    const {product} = req.body;
    const newProduct = await cart.findOneAndUpdate({userId: userId},{$push:{cartItems: product}},{upsert: true, new: true});
    if (newProduct) {
        res.send(newProduct)
    } else {
        res.send("not found")
    }
})

module.exports = router;