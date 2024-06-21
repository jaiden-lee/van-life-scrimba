import React from "react";
import { Link } from "react-router-dom";

function HostVanCard(props) {
    const {name, price, image, id} = props;
    
    return (
        <Link to={`${id}`} className="box-border p-4 flex gap-4 items-center justify-start bg-white rounded-md md:flex-col md:p-0 md-rounded-lg md:pb-4 md:gap-2 overflow-clip transition-transform hover:scale-[1.015] active:scale-[.985]">
            <img src={image} alt={name} className="aspect-square w-[20%] object-cover rounded-md min-w-12 md:w-full md:rounded-none" />
            <div className="md:px-4 md:text-center">
                <h3 className="text-lg font-semibold text-almost-black">{name}</h3>
                <h4 className="text-sm font-medium text-dark-gray">${price}/day</h4>
            </div>
        </Link>
    );
}

export default HostVanCard;