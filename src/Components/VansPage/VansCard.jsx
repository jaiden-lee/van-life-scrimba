import React from "react";
import { Link } from "react-router-dom";

function VansCard(props) {
    const {image, title, price, type, id} = props;

    let backgroundColor = "bg-dark-orange-1";
    if (type === "rugged") {
        backgroundColor = "bg-dark-green";
    } else if (type === "luxury") {
        backgroundColor = "bg-almost-black";
    }

    return (
        <Link className="flex flex-col items-start text-almost-black transition-transform mb-6 hover:scale-[1.015] active:scale-[.975]" to={`/vans/${id}`}>
                <img src={image} alt={title} className="w-full object-cover aspect-square rounded-md" />
                <div className="flex items-start w-full mt-4">
                    <h3 className="text-lg font-semibold leading-4">{title}</h3>
                    <h3 className="text-lg font-semibold ml-auto text-right leading-4">
                        ${price}
                        <br />
                        <span className="text-sm font">/day</span>
                    </h3>
                </div>
                <h4 className={`text-beige ${backgroundColor} px-3 py-1 rounded-md font-medium capitalize text-sm`}>{type}</h4>
        </Link>
    );
}

export default VansCard;