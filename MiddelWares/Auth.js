const jwt = require('jsonwebtoken')
const key = "qwertyuioplkjhgfdsazxcvbnm";
const user = require("../Modules/UserSchema");


const authUser = async(req, res, next) =>{
   const token = req.params.id;

   if(!token){
    return res.send("go to login page; token not found");
   }
   try{
    const userId = jwt.verify(token, key);
    const users = userId.userId;
    const exist = await user.findById(users);
    if(exist){
    req.userId = users;
    // console.log(req.userId);
       next() 
    }else{
        return res.send("user not found");
    }
   }catch(err){
    console.log(err);
    return res.send("invalid token")
   }
}

module.exports = authUser