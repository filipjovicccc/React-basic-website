import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/background1.jpg";
import "../css/Home.css";

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer">
                <h1>Sport's equipment</h1>
                <p>SPORTS EQUIPMENT ALL OF SIZE</p>
                <Link to="/menu">
                    <button>ORDER NOW</button>
                </Link>
            </div>
        </div>
    );
}

export default Home;