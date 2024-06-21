import {React, useState, useEffect} from "react";
import HostVanCard from "./HostVanCard";

function HostVans() {
    const [myVans, setMyVans] = useState([]);

    useEffect(() => {
        let ignore = false;
        async function getMyVans() {
            const response = await fetch("/api/host/vans");
            const data = await response.json();
            if (!ignore && response.ok) {
                setMyVans(data.vans);
            }
        }
        getMyVans();
        
        return () => ignore = true;
    }, []);

    const myVansComponents = myVans.map((van) => {
        return <HostVanCard key={van.id} name={van.name} price={van.price} image={van.imageUrl} id={van.id} />
    });

    return (
        <div className="py-8">
            <h1 className="text-2xl font-bold mb-6">Your listed vans</h1>
            <div className="grid grid-cols-1 gap-2 md:grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))] md:gap-3">
                {myVansComponents}
            </div>
        </div>
    );
}

export default HostVans;