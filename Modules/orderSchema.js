const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    orders:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
    ]
})

const order = mongoose.model('Order', orderSchema);

module.exports = order;