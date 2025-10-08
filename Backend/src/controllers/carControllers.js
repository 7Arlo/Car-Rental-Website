import mongoose from "mongoose";
import cloudinary from "../config/Cloudnary.js";
import Car from "../models/carModel.js";
import Dealer from "../models/dealerModel.js";
import Category from "../models/categoryModel.js";



// @desc     Create car
// @route    POST /api/car/create
// @access   Admin and Dealer

export const createCar = async (req, res) => {
  try {
    const userId = req.user._id;

    // Check if dealer exists and is verified
    const user = await Dealer.findOne({ userId: userId });
    if (!user) {
      return res.status(404).json({
        success: false,
        error: "Unauthorized. Please log in to access this resource",
      });
    }

    if (!user.verified) {
      return res.status(403).json({
        success: false,
        error: "Dealer is not verified. Cannot create cars.",
      });
    }
    // Check if image file is provided in the request
    const file = req.file?.path;
    if (!file) {
        res.status(400)
       .json({
        success:false,
        error:"Image file is required"});
    }

     const { name, brand, category, fuelType, transmission, available } =
      req.body;
     console.log("data",req.body)
    // Validate category ID presence and format
    if (!category || !mongoose.isValidObjectId(category)) {
        res.status(400).json({
          success:false,
          error:"Invalid category Id"
        })
        
    }

   // Upload image to Cloudinary if file provided
    let imageUrl = "";
    if (file) {
        try {
            const uploadedResult = await cloudinary.uploader.upload(file, {
                folder: "easy-drive/cars",
                resource_type: "image",
            });
            console.log("uplodresult",uploadedResult)
            imageUrl = uploadedResult.secure_url;
        } catch (error) {
            res.status(500).json({
              success:false,
              error:"Image upload failed. Please try again."
            })
           
        }
    }

    // Check if the provided category exists in DB
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
        res.status(404).josn({
          success:"false",
          error:"Category not found"
        })
        
    }

    // Validate required fields
    if (!name || !brand || !category || !fuelType || !transmission || !available ) {
      return res.status(400).json({
        success: false,
        error: "Please fill all the required fields.",
      });
    }
    
    // Create new car
    const newCar = await Car.create({
      name,
      brand,
      category,
      fuelType,
      transmission,
      available,
      image:imageUrl || ""
    });
   
    res.status(201).json({
      success: true,
      message: "Car created successfully",
      car: newCar,
    });
  } catch (error) {
    console.error("Error creating car:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};





// @desc     Get all cars
// @route    GET /api/car
// @access   Admin and Dealer

export const getAllCars = async (req, res) => {
  try {
    
    const cars = await Car.find();

    res.status(200).json({
      success: true,
      message: "All cars fetched successfully",
      count:cars.length,
      cars,
    });
  } catch (error) {
    console.error("Error fetching cars:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


// @desc     Get cars by id
// @route    GET /api/car/:id
// @access   Admin and Dealer


export const getSingleCar = async (req, res) => {
  try {
    const carId = req.params.id;

    // Find car by ID
    const car = await Car.findById(carId);

    if (!car) {
      return res.status(404).json({
        success: false,
        error: "Car not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Car fetched successfully",
      car,
    });
  } catch (error) {
    console.error("Error fetching car:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};


// @desc     Update car
// @route    PUT /api/car/:id
// @access   Admin and Dealer

export const updateCar = async (req, res) => {
  try {
    const carId = req.params.id;
    const { name, brand, category, fuelType, transmission, available, image } = req.body;

    // Check if car exists
    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        error: "Car not found",
      });
    }

     let imageUrl = "";
    if (file) {
        try {
            const uploadedResult = await cloudinary.uploader.upload(file, {
                folder: "easy-drive/cars",
                resource_type: "image",
            });
            console.log("uplodresult",uploadedResult)
            imageUrl = uploadedResult.secure_url;
        } catch (error) {
            res.status(500).json({
              success:false,
              error:"Image upload failed. Please try again."
            })
           
        }
    }

    // Update fields if provided
    car.name = name || car.name;
    car.brand = brand || car.brand;
    car.category = category || car.category;
    car.fuelType = fuelType || car.fuelType;
    car.transmission = transmission || car.transmission;
    car.available = available !== undefined ? available : car.available;
    car.image = image || car.image;



    // Save updated car
    const updatedCar = await car.save();

    res.status(200).json({
      success: true,
      message: "Car updated successfully",
      car: updatedCar,
    });
  } catch (error) {
    console.error("Error updating car:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};



// @desc     Delete car
// @route    Delete /api/car/:id
// @access   Admin and Dealer

export const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({
        success: false,
        error: "Car not found",
      });
    }

    await Car.findByIdAndDelete(carId);

    res.status(200).json({
      success: true,
      message: "Car deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting car:", error);
    res.status(500).json({
      success: false,
      error: "Internal Server Error",
    });
  }
};
