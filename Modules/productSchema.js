const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    imgUrl:{
        type: String,
        required: true
    },
    datails:{
        type: String
    },
    price:{
        type: Number
    },
    stock:{
        type: Number
    },
    category:{
        type: String
    }
})

const product = mongoose.model('Product', productSchema);

module.exports = product;