import { createSlice } from "@reduxjs/toolkit";



const initialState = {
    cars: null,
    loading: false,
    error: null,
    
}


const carsSlice = createSlice({
    name:"cars",
    initialState,
    reducers: {
        carsRequest: (state) =>{
            state.loading =true;
            state.error = null
        },
        carsSuccess: (state,action)=>{
            state.loading=false;
            state.cars = action.payload.cars
        },
        carsFail: (state,action)=>{
            state.loading=false;
            state.error=action.payload.error;

        }
    }
})



export const {
    carsRequest,carsSuccess,carsFail
}=carsSlice.actions

export default carsSlice.reducer