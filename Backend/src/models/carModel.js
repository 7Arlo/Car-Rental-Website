import mongoose from "mongoose"




const carSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            requried:true,
            trim:true
        },
        brand:{
            type:String,
            requried:true,
            trim:true
        },
        category:{
            type:String,
            
            required: true,
        },
        fuelType:{
            type:String,
            enum:["Petrol","Diesel","Electric"],
            default:"Petrol",
            required: true
        },
        transmission:{
            type:String,
            enum:["Manual", "Automatic"],
            requried:true
        },
        available:{
            type:Boolean,
            default:true
        },
        image:{
            type:String
        }
    },
    {timestamps:true}
)



const Car = mongoose.model("car",carSchema)

export default Car