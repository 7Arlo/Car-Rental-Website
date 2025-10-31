
import axiosInstance from "../../../../api/axiosInstance";
import { adminLoginFail, adminLoginRequest, adminLoginSuccess } from "../../../slices/authSlice/admin/adminLoginSlice";
;


export const adminLogin = (userData) => async (dispatch) => {
    try {
        dispatch(adminLoginRequest());

        const { data } = await axiosInstance.post("api/v1/admin/login",userData);
           sessionStorage.setItem("admin", "true");
        dispatch(adminLoginSuccess(data));
    } catch (error) {
        console.log("Login failed error response:", error.response?.data);
        dispatch(adminLoginFail(error.response?.data?.error || " admin Login failed"));
    }
};
