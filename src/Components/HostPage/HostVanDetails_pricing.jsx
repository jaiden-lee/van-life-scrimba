import React from "react";
import { useOutletContext } from "react-router-dom";


function HostVanDetails_pricing() {
    const context = useOutletContext();
    const {price} = context;
    
    return (
        <h4 className="text-xl font-semibold">${price}<span className="text-sm font-medium">/day</span></h4>
    );
}

export default HostVanDetails_pricing;