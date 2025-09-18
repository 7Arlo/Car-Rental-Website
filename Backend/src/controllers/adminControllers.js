
//Admin Login

export const adminLogin = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Login Successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Change Role 

export const changeRole = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Role Changed"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}






// Get all Users 
export const getAllUsers = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get all users"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Get User By ID 
export const getUserOrDealer = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get User Or Dealer"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Get all Dealer
export const getAllDealers = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get all Dealers"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}

// Get Dealer ById
export const getDealerByID = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get Dealer"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}