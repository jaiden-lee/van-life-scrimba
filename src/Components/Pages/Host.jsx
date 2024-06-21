import React from "react";
import { Outlet } from "react-router-dom";
import HostNavbar from "../HostPage/HostNavbar";

function Host() {
    return (
        <div className="box-border p-6">
            <HostNavbar />
            <Outlet />
        </div>
    );
}

export default Host;