import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import { generateToken } from "../utils/generateToken.js";




// Signup Controller 

export const signUp = async (req,res) =>{
    try {
        //  Step 1

        const {name,email,password,phone}= req.body || {}
        console.log("1")
        //  Step 2
        if(!name||!email||!password||!phone){
            return res.status(400).json({
                sucess:false,
                error:"All fields (name, email, password, phone) are required."
            })
        }
        
        //  Step 3
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        
        // Step 4
        if(!emailRegex.test(email)){
           return res.status(400).json({
            error:"Invalid E-Mail Address"
           })
        }

        // Step 5
       const existEmail = await User.findOne({email})
       
       // Step 6
       if (existEmail) {
    return res.status(409).json({
        success: false,
        error: "Email already exists. Please use a different email."
    });
   }
   
//    Step 7 Checking password Lenght 
    if (password.length < 6) {
    return res.status(400).json({
        success: false,
        error: "Password must be at least 6 characters long."
    });
}
console.log("7")
// Step 8 Hashing Password
 const salt= await bcrypt.genSalt(10)
 const hashedPassword = await bcrypt.hash(password,salt)

console.log("8",hashedPassword)
//  Step 9 Creating New User
const newUser = await User.create({
    name,
    email,
    password: hashedPassword,
    phone
});
// Step 10 Generate Token 
if(newUser){
    generateToken(newUser._id,newUser.role,res)
}

return res.status(201).json({
    success: true,
    message: "User created successfully",
    user: newUser
});

    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}



// Login Controller 

export const logIn = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Login successful"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Logout Controller 

export const logOut = async (req,res) =>{
    try {
        res.status(200).json({
            sucess:true,
            message:"Logout successful"
        })
    } catch (error) {
        res.status(500).json({
            sucess:false,
            error:"Internal Server Error"
        })
    }
}