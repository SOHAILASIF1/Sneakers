import jwt from "jsonwebtoken"
export const authToken=async(req,res,next)=>{
    try {
        const token = req?.cookies?.token
        if (!token) {
            return res.status(401).json({
                message:"Login First",
                success:false,
                error:true
            })
            
        }
        jwt.verify(token,"Sohail",(err,decoded)=>{
            if (err) {
                return res.status(300).json({
                    message:"Invalid or Expire token",
                    success:false
                })
                
            }
            req.userId=decoded?._id
            next()
        })

        
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message:error.message || error,
            success:false
        })
        
    }
}