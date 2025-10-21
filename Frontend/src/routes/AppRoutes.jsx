import { createBrowserRouter } from "react-router-dom";
import Signup from "../pages/authpages/signup/Signup";
import AuthLayout from "../layouts/authLayout/AuthLayout";
import NotFound from "../pages/notfound/NotFound";
import Login from "../pages/authpages/login/Login";
import MainLayout from "../layouts/userLayout/MainLayout";
import Homepage from "../pages/homepage/Homepage";


// ─── Router Setup ─────────────────────────────────────────────────────────
const router = createBrowserRouter([
  // ─── Public & Main User Routes ─────────────────────────────
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "", element: <Homepage /> },
    
    ],
  },


  
  // ─── Auth Routes ────────────────────────────────────────────
  {
    path: "/singup",
    element: <AuthLayout />,
    children: [{ path: "", element: <Signup/> }],
  },
    {
    path: "/login",
    element: <AuthLayout />,
    children: [{ path: "", element: <Login/> }],
  },
 

  // ─── Fallback: 404 Not Found ───────────────────────────────
  { path: "*", element: <NotFound/> },
]);

export default router;