import React from "react";
import Banner from "../components/Banner"; // Adjust path accordingly
import TopFold from "./TopFold.js";

const HomePage = () => {
    return (
        <div>
            <Banner newsBulletin="Latest news: WebCafe's new AI features are live!" />
            <TopFold />
        </div>
    );
};

export default HomePage;
