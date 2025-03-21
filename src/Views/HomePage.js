// src/HomePage.js
import React, { useState} from "react";
import './HomePage.css';

import TopFold from "./TopFold.js";

const HomePage = () => {
    return (
        <div className="cafe-homepage">
            <TopFold />
        </div>
    );
};

export default HomePage;