import mongoose from "mongoose"



const dealerSchema = new mongoose.Schema({
    
},{timestamps:true}
)


const Dealer = mongoose.model("dealer",dealerSchema)


export default Dealer