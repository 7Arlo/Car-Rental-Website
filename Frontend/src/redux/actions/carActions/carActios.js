import axiosInstance from "../../../api/axiosInstance";
import { carsFail, carsRequest, carsSuccess } from "../../slices/carSlice/carSlice";



export const getCars = async (dispatch)=>{
     dispatch(carsRequest())
     const {data}=await axiosInstance.get("api/v1/car")
     console.log("cars data",data)
     try {
        dispatch(carsSuccess(data))
     } catch (error) {
        console.log("error",error)
        dispatch(carsFail(
            error
        ))
     }
}