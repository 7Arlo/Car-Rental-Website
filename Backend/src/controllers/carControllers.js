


// Create car
export const createCar = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Successfully Created"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get all cars
export const getAllCars = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get all cars"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get car ById
export const getCarByID = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get car by id"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Update Car 
export const updateCar = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Successfully updated"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Delete Car 
export const deleteCar = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Successfully Deleted"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}