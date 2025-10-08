import { Outlet, useOutlet } from "react-router-dom";

import React from 'react'
import Navbar from "../../components/user/header/NavBar";
import Footer from "../../components/user/footer/Footer";

const MainLayout = () => {
  return (

    <div>
        <Navbar/>
        <main className="min-h-[80vh]">
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default MainLayout