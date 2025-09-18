


// Create review
export const createReview = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Review Created"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get all reviews
export const getAllReviews = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get all Reviews"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Get review ById
export const getReviewByID = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Get Review by id"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Update review 
export const updateReview = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Review Updated Successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Delete review 
export const deleteReview = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Successfully Review Deleted"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}