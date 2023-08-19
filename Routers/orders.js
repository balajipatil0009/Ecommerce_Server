const express = require("express")
const router = express.Router();
const order = require('../Modules/orderSchema');
const authUser = require('../MiddelWares/Auth')

router.get("/:id",authUser,async(req, res)=>{
    console.log(req.userId)
const orders = await order.findOne({userId: req.userId}).populate('orders')
console.log(orders.orders);
res.send(orders.orders);
})

router.post('/:id',authUser,async(req, res)=>{
    // console.log(req.userId)
    const userId = req.userId;
    const {product} = req.body;
    const newProduct = await order.findOneAndUpdate({userId: userId},{$push:{orders: product}},{upsert: true, new: true});
    if (newProduct) {
        res.send(newProduct)
    } else {
        res.send("not found")
    }
})

module.exports = router;