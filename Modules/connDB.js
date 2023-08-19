const mongoose = require('mongoose');
require('dotenv').config();
const DbLink = process.env.DB


mongoose.connect(DbLink,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err);
})

