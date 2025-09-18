import express, { Router } from "express";
import { adminLogin, changeRole, getAllDealers, getAllUsers, getUserOrDealer, } from "../controllers/adminControllers.js";



export const adminRouter = Router()




// Admin Login 
adminRouter.post("/login",adminLogin)

// Get All Users 
adminRouter.get("/getallusers",getAllUsers)

// Get User/Dealer ById
adminRouter.get("/:id",getUserOrDealer)

// Change role 
adminRouter.put("/update/:role",changeRole)

// Get All Dealers
adminRouter.get("/",getAllDealers)





