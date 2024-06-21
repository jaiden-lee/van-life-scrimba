import {React} from "react";
import NavbarLink from "../Navigation/NavbarLink";

function HostNavbar() {
    
    return (
        <nav className="flex gap-6 font-medium text-dark-gray ">
            <NavbarLink to="" end>Dashboard</NavbarLink>
            <NavbarLink to="income" end>Income</NavbarLink>
            <NavbarLink to="vans">Vans</NavbarLink>
            <NavbarLink to="reviews" end>Reviews</NavbarLink>
        </nav>
    );
}

export default HostNavbar;