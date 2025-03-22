import React from "react";
import './Banner.css';

const Banner = ({ newsBulletin }) => {
    return (
        <div className="banner" onClick={() => window.open('https://bumpups.com/', '_blank')}>
            <div className="news-ticker-wrapper">
                <span className="news-ticker">{newsBulletin}</span>
            </div>
        </div>
    );
};

export default Banner;
