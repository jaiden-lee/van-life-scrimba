import {React, useState, useEffect} from "react";
import VansFilter from "../VansPage/VansFilter";
import VansCard from "../VansPage/VansCard";

function Vans() {
    const [vansData, setVansData] = useState([]);
    const [filter, setFilter] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function retrieveData() {
            const response = await fetch("/api/vans");
            const data = await response.json();
            if (!ignore && response.status === 200) {
                setVansData(data.vans);
            }
        }
        
        retrieveData();

        return () => ignore = true;
    }, []);

    const filteredData = vansData.filter((van) => {
        if (filter === null) {
            return true;
        }
        return van.type === filter;
    });

    const vansComponents = filteredData.map((van) => {
        return <VansCard key={van.id} id={van.id} image={van.imageUrl} title={van.name} price={van.price} type={van.type} />
    });

    function applyFilter(filterName) {
        if (filter === filterName) {
            setFilter(null);
        } else {
            setFilter(filterName);
        }
    }

    return (
        <div className="box-border p-6">
            <h1 className="text-2xl font-bold mb-4">Explore our van options</h1>
            <div className="flex gap-4 flex-wrap mb-8">
                <VansFilter text="Simple" handleClick={() => applyFilter("simple")} isSelected={filter==="simple"} />
                <VansFilter text="Luxury" handleClick={() => applyFilter("luxury")} isSelected={filter==="luxury"} />
                <VansFilter text="Rugged" handleClick={() => applyFilter("rugged")} isSelected={filter==="rugged"} />
                <button className="text-dark-gray text-sm underline font-medium underline-offset-2 hover:text-almost-black" onClick={() => setFilter(null)}>Clear Filters</button>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6 md:grid-cols-[repeat(auto-fill,minmax(12.5rem,1fr))]">
                {vansComponents}
            </div>
        </div>
    );
}

export default Vans;