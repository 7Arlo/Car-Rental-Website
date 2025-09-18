



// Update User
export const updateUser = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"updated successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Delete user 
export const deleteUser = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Me 

export const me = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Me"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}