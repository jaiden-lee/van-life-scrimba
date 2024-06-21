import React from "react";
import { Link } from "react-router-dom";
import NavbarLink from "./NavbarLink";

function Navbar() {
    return (
        <header className="bg-beige min-h-24 flex items-center justify-start box-border p-6">
            <Link to="/" className="text-xl font-extrabold">#VANLIFE</Link>
            <nav className="flex gap-4 ml-auto font-medium text-dark-gray">
                <NavbarLink to="host">Host</NavbarLink>
                <NavbarLink to="about">About</NavbarLink>
                <NavbarLink to="vans">Vans</NavbarLink>
            </nav>
        </header>
    )
}

export default Navbar;