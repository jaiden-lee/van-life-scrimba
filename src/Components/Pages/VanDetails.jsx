import {React, useState, useEffect} from "react";
import { useParams, Link } from "react-router-dom";
import LeftArrow from "../../assets/left-arrow.svg";

function VanDetails() {
    const [vanInfo, setVanInfo] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        let ignore = false;
        async function retrieveVanData() {
            const response = await fetch(`/api/vans/${id}`);
            const data = await response.json();
            if (!ignore && response.ok) {
                setVanInfo(data.vans);
                console.log(data.vans);
            } else {
                setVanInfo(null);
            }
        }
        

        retrieveVanData();

        return () => ignore = true;
    }, [id]);
    // this wouldn't happen most likely; it would only happen if we had a link to another van detail id page, so the component wouldn't unmount, then we would need to rerun this; it would just rerender

    let backgroundColor = "bg-dark-orange-1";
    if (vanInfo != null) {
        if (vanInfo.type === "rugged") {
            backgroundColor = "bg-dark-green";
        } else if (vanInfo.type === "luxury") {
            backgroundColor = "bg-almost-black";
        }
    }
    


    return (
        <div className="box-border p-6 text-almost-black mb-8">
            <Link to="/vans" className="flex items-center gap-2 underline underline-offset-2 font-medium mb-8 hover:text-dark-gray">
                <img src={LeftArrow} alt="Back to all vans" />
                <span>Back to all vans</span>
            </Link>
            {
                vanInfo != null &&
                <div className="flex flex-col md:flex-row gap-12">
                    <img src={vanInfo.imageUrl} alt={vanInfo.name} className="rounded-md object-cover aspect-square w-full md:max-w-[50%]" />
                    <div className="flex flex-col items-start md:max-w-[50%] md:justify-center">
                        <h4 className={`text-beige ${backgroundColor} px-3 py-1 rounded-md font-medium capitalize text-base`}>{vanInfo.type}</h4>
                        <h3 className="my-4 text-3xl font-bold">{vanInfo.name}</h3>
                        <h3 className="text-base font-medium"><span className="text-xl font-bold">${vanInfo.price}</span>/day</h3>
                        <p className="mt-4">{vanInfo.description}</p>
                        <button className="orange-button mt-4 text-base">Rent this van</button>
                    </div>
                </div>
            }
        </div>
    );
}

export default VanDetails;