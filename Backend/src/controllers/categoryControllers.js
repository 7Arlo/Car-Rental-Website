


// Create car
export const createCategory = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Category Created Successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get all cars
export const getAllCategories = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get all Categories"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get car ById
export const getCategory = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get Category"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Update Car 
export const updateCategory = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Category Updated"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Delete Car 
export const deleteCategory = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Category Deleted"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}