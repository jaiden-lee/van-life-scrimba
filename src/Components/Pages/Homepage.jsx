import React from "react";
import { Link } from "react-router-dom";

function Homepage() {
    return (
        <div className="box-border p-6 flex items-center justify-center text-white relative bg-[url('/src/assets/homepage-image.png')] before:bg-[rgb(0,0,0,.325)] before:absolute before:top-0 before:left-0 before:bottom-0 before:right-0 bg-cover z-0 before:z-[-1] min-h-[calc(100dvh-6rem)] md:justify-start md:p-16">
            <div className="flex flex-col justify-center max-w-[30rem]">
                <h1 className="font-extrabold text-3xl mb-4">You got the travel plans, we got the travel vans.</h1>
                <p className="text-sm mb-8">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to="/vans" className="text-center bg-vibrant-orange w-full box-border p-2 rounded-md font-semibold text-sm hover:bg-orange-500 transition-all">Find your van</Link>
            </div>
        </div>
    );
}

export default Homepage;