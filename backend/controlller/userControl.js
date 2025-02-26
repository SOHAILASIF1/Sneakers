import User from '../models/userModel.js'
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'
export const signup=async(req,res)=>{
    try {
        const {name,email,password}=req.body
        console.log(name,email,password);
        const user= await User.findOne({email})
        if (user) {
            return res.status(300).json({
                message:"User Already Exsit",
                success:false,
                error:true
            })
            
            
        }
        const hashedPassword=await bcryptjs.hash(password,10)
        const createUser=new User({
            name,
            email,
            role:"GENERAL",
            password:hashedPassword
        })
        await createUser.save()
        return res.status(200).json({
            message:"User created Successfull",
            success:true,
            error:false

        })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           
            error:true,
            message:error.message || error,
            success:false
        })
        
    }

}
export const login=async(req,res)=>{
    try {
        const {email,password}=req.body
        const user=await User.findOne({email})
        if(!user){
            return res.status(404).json({
                error:true,
                success:false,
                message:"User Not Found"
            })
        }
        const isMatched=await bcryptjs.compare(password,user?.password)
        if (!isMatched) {
            return res.status(401).json({
                error:true,
                success:false,
                message:"Invalid Password"
            })
            
        }
        const tokenData={
            _id:user?._id,
            email:user?.email
        }
        const tokenOpt={
            httpOnly:true,
            secure:true
        }
        const token=await jwt.sign(tokenData,"Sohail",{expiresIn:"7d"})
        return res.cookie("token",token,{
            httpOnly: true,
            secure: false, // true in production
            sameSite: "lax", // Change to "strict" in production
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 دن کے لیے کوکی ایکسپائر سیٹ
        }).status(200).json({
            message:"Login Successfull",
            success:true,
            token

          })
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
           
            error:true,
            message:error.message || error,
            success:false
        })
        
    }
}