import express, { Router } from "express";
import { createReview, deleteReview, getAllReviews, getReviewByID, updateReview } from "../controllers/reviewControllers.js";






export const reviewRouter = Router()

// Create Review
reviewRouter.post("/create",createReview)
// Get All Reviews
reviewRouter.get("/",getAllReviews)
// Get Review By Id 
reviewRouter.get("/:id",getReviewByID)
// Update Review
reviewRouter.put("/:id",updateReview)
// Delete Review
reviewRouter.delete("/:id",deleteReview)