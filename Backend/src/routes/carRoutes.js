import express, { Router } from "express";
import { createCar, deleteCar, getAllCars, getCarByID, updateCar } from "../controllers/carControllers.js";





export const carRouter = Router()

// Create Car
carRouter.post("/create",createCar)
// Get All Cars
carRouter.get("/",getAllCars)
// Get Car By Id 
carRouter.get("/:id",getCarByID)
// Update Car
carRouter.put("/:id",updateCar)
// Delete Car
carRouter.delete("/:id",deleteCar)