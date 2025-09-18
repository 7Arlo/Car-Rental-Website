import express, { Router } from "express";
import { createDealer, deleteDealer, updateDealer } from "../controllers/dealerControllers.js";







export const dealerRouter = Router()

// Create Dealer
dealerRouter.post("/create",createDealer)

// Update Dealer
dealerRouter.put("/:id",updateDealer)

// Delete Dealer
dealerRouter.delete("/:id",deleteDealer)