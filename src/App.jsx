import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import "./server";
// Components
// Critical
import Layout from "./Layout";
// Pages
import Homepage from "./Components/Pages/Homepage";
import About from "./Components/Pages/About";
import Vans from "./Components/Pages/Vans";
import VanDetails from "./Components/Pages/VanDetails";
import Host from "./Components/Pages/Host";
// Host Page
import Dashboard from "./Components/HostPage/Dashboard";
import Income from "./Components/HostPage/Income";
import Reviews from "./Components/HostPage/Reviews";
import HostVans from "./Components/HostPage/HostVans";
import HostVanDetails from "./Components/HostPage/HostVanDetails";
import HostVanDetails_details from "./Components/HostPage/HostVanDetails_details";
import HostVanDetails_pricing from "./Components/HostPage/HostVanDetails_pricing";
import HostVanDetails_photos from "./Components/HostPage/HostVanDetails_photos";


function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path="about" element={<About />} />
                    <Route path="vans" element={<Vans />} />
                    <Route path="vans/:id" element={<VanDetails />} />
                    <Route path="host" element={<Host />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVans />} />
                        <Route path="vans/:id" element={<HostVanDetails />}>
                            <Route index element={<HostVanDetails_details />} />
                            <Route path="pricing" element={<HostVanDetails_pricing />} />
                            <Route path="photos" element={<HostVanDetails_photos />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
// Since I use a layout container, I can move things outside of the nested route to not have the navbar displayed at the top; this lets me, for example, have a login page without navbar at the top/if user not logged in, they don't have the navbar on top
// Use App to handle all routes, and that's its purpose
// / in front = absolute; remove it to get absolute

// Replace path="" with index (index allows you to have same path as parent)

export default App;