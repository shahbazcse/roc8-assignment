import React from "react";
import logo from "../assets/logo.png";
import { BiLinkExternal } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";

const NavBar = () => {
    return (
        <div className="nav">
            <div className="nav_left">
                <img src={logo} alt="logo" className="app_logo" />
                <div className="app_name">
                    <div className="app_name_main">Appointr</div>
                    <div className="app_slogan">Your Appointment Buddy</div>
                </div>
            </div>
            <div className="nav_right">
                <div className="nav_link">
                    <div>Menu</div>
                    <FaChevronDown className="menu_icon" />
                </div>
                <div className="nav_link">
                    <div>Contact Us</div>
                </div>
                <div className="nav_link share_btn">
                    <BiLinkExternal className="share_icon" />
                    <div>Share Link</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
