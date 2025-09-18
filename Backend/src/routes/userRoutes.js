import express, { Router } from "express"
import { deleteUser, me, updateUser } from "../controllers/userControllers.js"



export const userRouter = Router()



// Update a user 
userRouter.put("/:id",updateUser)

// Delete a user 
userRouter.delete("/:id",deleteUser)

// Me
userRouter.get("/me",me)


   





export default userRouter