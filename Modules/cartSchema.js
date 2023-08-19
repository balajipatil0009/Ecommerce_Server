const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    cartItems:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
    ]
})

const cart = mongoose.model('cart',cartSchema);

module.exports = cart;