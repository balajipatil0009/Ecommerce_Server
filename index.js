const express = require('express');
const app = express();

const resister_logRoute = require('./Routers/resister');
const productsRoute = require('./Routers/products');
const cartRoute = require("./Routers/cart")
const ordersRoute = require("./Routers/orders")
const categoryRoute = require("./Routers/category")

require('./Modules/connDB');

const Product = require('./Modules/productSchema')

app.use('/',resister_logRoute);
app.use('/products',productsRoute)
app.use('/cart', cartRoute)
app.use('/orders', ordersRoute)
app.use('/category', categoryRoute)



app.get('/',(req, res)=>{
    res.send("<h4>home page</h4><h4>category: path:/category/:catagary | (method: get) | {we has now only two categories 1.toys, 2.electric }</h4><h4>Products: (method: get)  |  path: /products </h4><h4>orders: (method: get) path: /orders/:idToken >>to addOrder (method: post) | path: /order/:idToken  | {body: raw: {product: (product id)}}</h4><h4>cart: (method: get) | path: /cart/:idToken |>>to addtocart (method: post) | path: /cart/:idToken  | {body: raw: {product: (product id)}}</h4><br><h4>LOGIN path: /login {body: raw: email: email, password: password}</h4> <h4> RESISTER: path: /resister {body: raw: email: email, password: password} method: post");
})
app.listen('3000',()=>{
    // res.send("jay shree ram")
    console.log("connected")
})