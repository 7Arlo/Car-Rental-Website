


// Create a dealer
export const createDealer = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Dealer created successfully"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}


// Update Dealer
export const updateDealer = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Dealer Updated"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}
// Delete Dealer
export const deleteDealer = async (req,res) =>{
    try {
        res.status(200).json({
           sucess:true,
           message:"Dealer Deleted"
        })
    } catch (error) {
        res.status(500).json({
            sucess: false,
            error: "Internal Server Error",
        })
    }
}