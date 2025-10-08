import mongoose from "mongoose";

const carSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,   //  fixed
      trim: true,
    },
    brand: {
      type: String,
      required: true,   //  fixed
      trim: true,
    },
    category: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric"], //  case-sensitive values
      default: "Petrol",
      required: true,
    },
    transmission: {
      type: String,
      enum: ["Manual", "Automatic"], // case-sensitive
      required: true,   // fixed
    },
    available: {
      type: Boolean,
      default: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Car = mongoose.model("Car", carSchema); //  capitalized model name

export default Car;
