import {React, useState, useEffect} from "react";
import LeftArrow from "../../assets/left-arrow.svg";
import { Link, useParams, Outlet } from "react-router-dom";
import NavbarLink from "../Navigation/NavbarLink";

function HostVanDetails() {
    const [currentVan, setCurrentVan] = useState(null);

    const {id} = useParams();

    useEffect(() => {
        let ignore = false;

        async function getVan() {
            const response = await fetch(`/api/host/vans/${id}`);
            const data = await response.json();
            
            if (!ignore && response.ok) {
                setCurrentVan(data.vans[0]);
            }
        }

        getVan();

        return () => ignore = true;
    }, [id]);


    let backgroundColor = "bg-dark-orange-1";
    if (currentVan != null) {
        if (currentVan.type === "rugged") {
            backgroundColor = "bg-dark-green";
        } else if (currentVan.type === "luxury") {
            backgroundColor = "bg-almost-black";
        }
    }

    return (
        <div className="box-border py-6 mb-4">
            {/* by default, react router bases off of route hierarchy; but we can change it the path instead, to let .. go back, even if not the direct parent */}
            <Link to=".." relative="path" className="flex items-center gap-2 underline underline-offset-2 font-medium mb-8 hover:text-dark-gray">
                <img src={LeftArrow} alt="Back to all vans" />
                <span>Back to all vans</span>
            </Link>

            {
            currentVan &&
            <div className="box-border p-4 rounded-md bg-white text-almost-black">
                <div className="flex gap-4 items-center">
                    <img src={currentVan.imageUrl} alt={currentVan.name} className="rounded-md w-[40%] aspect-square object-cover max-w-72" />
                    <div className="flex flex-col items-start gap-1">
                        <h4 className={`text-beige text-sm ${backgroundColor} px-3 py-1 rounded-md font-medium capitalize text-base mb-2`}>{currentVan.type}</h4>
                        <h3 className="text-xl font-bold">{currentVan.name}</h3>
                        <h3><span className="font-semibold">${currentVan.price}</span>/day</h3>
                    </div>
                </div>

                <nav className="font-medium flex gap-6 my-4 text-dark-gray">
                    <NavbarLink to="" end>Details</NavbarLink>
                    <NavbarLink to="pricing" end>Pricing</NavbarLink>
                    <NavbarLink to="photos" end>Photos</NavbarLink>
                </nav>

                {/* To pass info, you muse useContext or useOutletContext; outlet context is easier to use and less set up than context */}
                <Outlet context={currentVan} />
            </div>
            }   
        </div>
    );
}

export default HostVanDetails;