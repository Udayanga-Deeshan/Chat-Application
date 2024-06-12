import jwt from 'jsonwebtoken'

const genereateTokenAndSetCookie = (userId,res) =>{
    const token =  jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000 ,// in miliseconds
        httpOnly:true, //prevent  XSS attacks  cross site scripting  attacks
        sameSite:"strict" // cross site  request  forgery attacks
    })


}

export default  genereateTokenAndSetCookie;