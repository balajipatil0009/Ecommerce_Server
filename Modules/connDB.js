const mongoose = require('mongoose');

const DbLink = 'mongodb+srv://balajipatil2003:balajipatil20033@cluster0.fcrhl1j.mongodb.net/?retryWrites=true&w=majority'


mongoose.connect(DbLink,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err);
})

