import React from "react";
import { AiFillAndroid } from "react-icons/ai";
import { AiFillAmazonCircle } from "react-icons/ai";
import { AiFillBug } from "react-icons/ai";
import { AiFillApple } from "react-icons/ai";
import "../css/Footer.css";


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <AiFillAndroid /> < AiFillAmazonCircle /> <AiFillApple /> < AiFillBug />
            </div>
            <p> &copy; 2021 Sports </p>
        </div>
    );
}

export default Footer;