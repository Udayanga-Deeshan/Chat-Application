import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';

const protectRoute  = async (req,res,next) =>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            res.status(401).json({error:"UnAuthorized= No Token Provided"})
        }

        const decoded =  jwt.verify(token,process.env.JWT_SECRET)
        if(!decoded){
            res.status(401).json({error:"UnAuthorized or Invalid Token"})
        }

        const  user =  await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(400).json({error:"User Not Found"})
        }

        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({error:"Internal Server Error"})
    }
}


export default protectRoute;