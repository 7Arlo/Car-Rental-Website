import express, { Router } from "express";
import { createCategory, deleteCategory, getAllCategories, getCategory, updateCategory } from "../controllers/categoryControllers.js";






export const categoryRouter = Router()

// Create Category
categoryRouter.post("/create",createCategory)
// Get All Categorys
categoryRouter.get("/",getAllCategories)
// Get Category By Id 
categoryRouter.get("/:id",getCategory)
// Update Category
categoryRouter.put("/:id",updateCategory)
// Delete Category
categoryRouter.delete("/:id",deleteCategory)