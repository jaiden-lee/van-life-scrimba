import React from "react";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

function Navbar() {
    return (
        <header className="bg-beige min-h-24 flex items-center justify-start box-border p-6">
            <Link to="/" className="text-xl font-extrabold">#VANLIFE</Link>
            <nav className="flex gap-6 ml-auto font-medium text-dark-gray">
                <NavLink text="About" path="/about" />
                <NavLink text="Vans" path="/vans" />
            </nav>
        </header>
    )
}

export default Navbar;