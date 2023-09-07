const data=require('../models/Data.json');

exports.registerController=async(req,res)=>{
    try {
        const {username,email,password}=req.body
        const existingEmail=await data.findOne({email});
                     if(existingEmail){
                        return res.send("Error the email id is already registered please signin");
                     }
                     const user=await data.create({username,email,password});
                     this.sendToken(user,201,res);
    }  catch (error) {
          res.sendToken(error,500);
     }
}
// login controller email,password
exports.loginController=async(req,res)=>{
    try {
        const {email,password}=req.body;
        if(!email||!password){
            return res.send('Please provide email id and password');
        }
        const user =await data.findone({email});
        if(!user){
            return res.send('Invalid credentidals',400);
        }
        const passwordMatch=await user.matchPassword({password});
            if(!passwordMatch){
                return res.send('Invalid credentidals',400);
            }       
            this.sendToken(user,200,res);
    } catch (error) {
        res.sendToken(error,500);
    }
}
