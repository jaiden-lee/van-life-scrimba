import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetails_details() {
    const context = useOutletContext();
    const {name, type, description} = context;

    return (
        <div className="text-sm flex flex-col gap-3">
            <h4><span className="font-semibold">Name:</span> {name}</h4>
            <h4 className="capitalize"><span className="font-semibold">Category:</span> {type}</h4>
            <h4><span className="font-semibold">Description:</span> {description}</h4>
            <h4><span className="font-semibold">Visibility:</span> Public</h4>
        </div>
    );
}

export default HostVanDetails_details;