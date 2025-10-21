import { configureStore, combineReducers } from "@reduxjs/toolkit";
import auth from "./slices/authSlice/authSlice"
import cars from "./slices/carSlice/carSlice"

// Combine all reducers
const appReducer = combineReducers({
    auth,
    cars,

});



const rootReducer = (state, action) => {
  if (action.type === "RESET_ALL_STATE") {
    state = undefined; // clears everything
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});