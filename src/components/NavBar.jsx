import React from "react";
import logo from "../assets/logo.png";
import { BiLinkExternal } from "react-icons/bi";
import { FaChevronDown } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
    return (
        <div className="flex justify-between items-center gap-5 border-b shadow-sm w-full px-[4vw] py-[28px] sticky top-0 backdrop-blur-[8px] z-[999]">
            <div className="flex justify-center items-center gap-2.5">
                <img src={logo} alt="logo" className="h-14 w-14" />
                <div className="flex flex-col justify-center align-start font-bold gap-[2px]">
                    <div className="text-2xl tracking-wide">Appointr</div>
                    <div className="text-[0.8rem]">Your Appointment Buddy</div>
                </div>
            </div>
            <RxHamburgerMenu
                onClick={() => { }}
                className="flex h-9 w-9 mr-2 md:hidden"
            />
            <div className="md:flex justify-center items-center gap-6 hidden">
                <div className="flex justify-center items-center gap-2.5 text-lg font-bold cursor-pointer text-[#0a1d56]">
                    <div>Menu</div>
                    <FaChevronDown className="text-[#378760]" />
                </div>
                <div className="flex justify-center items-center gap-2.5 text-lg font-bold cursor-pointer text-[#0a1d56]">
                    <div>Contact Us</div>
                </div>
                <div className="flex justify-center items-center gap-2.5 text-lg font-bold cursor-pointer text-[#378760] border border-[#378760] px-5 py-2 rounded-full hover:text-white hover:bg-[#378760] duration-700">
                    <BiLinkExternal className="h-5 w-5" />
                    <div>Share Link</div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
