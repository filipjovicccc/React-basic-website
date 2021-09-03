import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "";
import "../styles/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">

                <Link to="/menu">
                    <button></button>
                </Link>
            </div>
        </div>
    );
}

export default Home;