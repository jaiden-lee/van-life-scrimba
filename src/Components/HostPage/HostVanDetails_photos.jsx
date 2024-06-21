import React from "react";
import { useOutletContext } from "react-router-dom";

function HostVanDetails_photos() {
    const context = useOutletContext();
    const {imageUrl} = context;

    return (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))]">
            <img className="rounded-md aspect-square object-cover" src={imageUrl} alt="image" />
        </div>
    );
}

export default HostVanDetails_photos;