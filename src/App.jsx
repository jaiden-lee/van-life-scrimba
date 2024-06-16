import React from "react";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
// Components
// Navigation
import Navbar from "./Components/Navigation/Navbar";
// Pages
import Homepage from "./Components/Pages/Homepage";
import About from "./Components/Pages/About";

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/about" element={<About />} />
                <Route path="/vans" element={<h1>Vans</h1>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App;