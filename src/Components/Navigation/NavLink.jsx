import React from "react";
import { Link } from "react-router-dom";

function NavLink(props) {
    const {text, path} = props;
    return (
        <Link to={path}
        className="hover:text-almost-black text-sm">
            {text}
        </Link>
    );
}

export default NavLink;