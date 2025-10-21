import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./routes/AppRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./common/loaders/Loader";


const App = () => {
    const { loading } = useSelector((state) => state.auth);
    const dispatch = useDispatch();

    

    if (loading) {
        return (
            <Loader
                bottomMessage="Finding the best cars and deals for your next ride"
                fullPage={true}
                size={10}
                color="#EC4899"
                message="Welcome to Easy Drive!"
            />
        );
    } else {
        return (
            <div>
                <>
                    <RouterProvider router={router} />
                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                        theme="light"
                    />
                </>
            </div>
        );
    }
};
export default App;