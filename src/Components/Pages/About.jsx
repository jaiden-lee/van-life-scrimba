import React from "react";
import AboutImage from "../../assets/about-image.png";
import { Link } from "react-router-dom";

function About() {
    return (
        <div className="flex flex-col flex-start gap-8 mb-8 md:gap-16 md:mb-16">
            <img src={AboutImage} alt="About VANLIFE" className="max-h-80 w-full object-cover md:max-h-[calc(100dvh-6rem)]"/>

            <div className="box-border px-6 flex flex-col gap-8 md:flex-row md:gap-36 md:px-16">
                <div className="flex flex-col gap-4 md:max-w-[50%] w-full">
                    <h1 className="text-2xl font-bold md:text-3xl">Don’t squeeze in a sedan when you could relax in a van.</h1>
                    <p className="text-sm font-medium md:text-base">
                        Our mission is to enliven your road trip with the perfect travel van rental. 
                        Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                        <br />(Hitch costs extra 😉)
                    </p>
                    <p className="text-sm font-medium md:text-base">Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
                </div>
                

                <div className="box-border p-6 flex flex-col gap-4 bg-light-orange-1 rounded-md md:max-w-[50%] w-full justify-center">
                    <h3 className="text-lg font-bold md:text-xl">Your destination is waiting.
                        <br />Your van is ready.
                    </h3>

                    <Link to="/vans" className="text-white font-medium text-sm bg-black max-w-full w-40 text-center box-border p-3 rounded-lg transition-all hover:scale-[1.015] active:scale-[.985] md:text-base">Explore our vans</Link>
                </div>
            </div>
            
            
        </div>
    );
}

export default About;