import React from "react";
import Banner from "../components/Banner"; // Adjust path accordingly
import TopFold from "./TopFold.js";
import Investment from "./Investment.js";
import Footer from "./Footer.js";

const HomePage = () => {
    return (
        <div>
            <Banner newsBulletin="Latest news: WebCafe's new AI features are live!" />
            <TopFold />
            <Investment />
            <Footer />
        </div>
    );
};

export default HomePage;
