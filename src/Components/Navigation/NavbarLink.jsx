import React from "react";
import { NavLink } from "react-router-dom";

function NavbarLink(props) {
    const {children, to, end} = props;

    function handleSelected(obj) {
        let className = "nav-link ";
        const {isActive} = obj;
        if (isActive) {
            className = className + "text-almost-black underline underline-offset-2";
        }
        return className;
    }

    return (
        <NavLink end={end} to={to}
        className={handleSelected}>
            {children}
        </NavLink>
    );
}
// Apparently, when you use "index" for route, it is always active
// Have to use end={true} for it to work - you are telling react router to exclude the index
// basically, by default, react router treats extended paths as same path for navlink, so you have to tell it to end if you don't want it to work for descendants

export default NavbarLink;