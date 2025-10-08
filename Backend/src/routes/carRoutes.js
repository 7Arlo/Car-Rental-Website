import express, { Router } from "express";
import { createCar, deleteCar, getAllCars, getSingleCar, updateCar } from "../controllers/carControllers.js";
import { protectRouter } from "../middlewares/protectRouter.js";
import { isDealerOrAdmin } from "../middlewares/checkRole.js";
import { upload } from "../middlewares/multer.js";





export const carRouter = Router()

// Create Car
carRouter.post("/create",protectRouter,isDealerOrAdmin,upload.single("image"),createCar)
// Get All Cars
carRouter.get("/",protectRouter,isDealerOrAdmin,getAllCars)
// Get Car By Id 
carRouter.get("/:id",protectRouter,isDealerOrAdmin,getSingleCar)
// Update Car
carRouter.put("/",protectRouter,isDealerOrAdmin,upload.single("image"),updateCar)
// Delete Car
carRouter.delete("/",protectRouter,isDealerOrAdmin,deleteCar)