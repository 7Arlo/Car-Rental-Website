import jwt from 'jsonwebtoken'




export const generateToken = (userId,role,res)=>{
    const token = jwt.sign({
        userId,role
    },process.env.JWT_SECRET_KEY,{expiresIn:"10d"})

    res.cookie("token",token,{
        maxAge: 15 * 24 * 60 * 1000,
        httpOnly: true, // Prevents JavaScript access to the cookie
        secure: process.env.NODE_ENV === "production", // HTTPS in production
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"

    })
}

