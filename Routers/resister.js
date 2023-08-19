const express = require('express');
const router = express.Router();
const user = require('../Modules/UserSchema')

const jwt = require('jsonwebtoken');

const key = "qwertyuioplkjhgfdsazxcvbnm"

router.use(express.json());

router.post('/resister',async(req, res)=>{
     const{email, password} = req.body;

     const exist = await user.findOne({email});

    if(exist){
       res.send("user already exist")
    }else{
        const newUser = new user({email, password})

         newUser.save().then((saved)=>{
            res.send("user created")
         }).catch((err)=>{
            console.log(err)
            res.send("unable to save user")
         })
    }
   
})

router.post('/login',async(req, res)=>{
    const {email, password} = req.body;
    try{
        const CheckUser = await user.findOne({email});
        if(CheckUser){
         console.log(CheckUser.id);
         const token = jwt.sign({userId: CheckUser.id}, key , {expiresIn: '1d'});
         res.send(token)

        }else{
            res.send("user not found");
        }   
    }catch(err){
        console.log(err);
    } 
})

router.get('/resister',(req, res)=>{
    res.send("resister page");
})

module.exports = router;