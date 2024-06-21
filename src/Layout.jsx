import React from "react";
import { Outlet } from "react-router-dom";
// Navigation
import Navbar from "./Components/Navigation/Navbar";

function Layout() {
    return (
        <div className="min-h-[100vh] flex flex-col">
            <Navbar />
            <Outlet />
            {/* Footer */}
            <footer className="bg-almost-black text-[#AAAAAA] text-center flex justify-center items-center min-h-16 text-xs mt-auto">
                <h4>Ⓒ 2022 #VANLIFE</h4>
            </footer>
        </div>
    );
}

export default Layout;