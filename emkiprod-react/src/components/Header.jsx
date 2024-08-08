import React from "react";
import { Link } from "react-router-dom";
import logo from "/assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="header bg-[#101426] flex justify-around shadow-lg">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="flex h-16 gap-3 navbar">
          <div className="flex gap-3 h-12 w-full pt-3 nav">
            <Link to={"/"}>Home</Link>
            <Link to={"/events"}>Events</Link>
            <Link to={"/blogs"}>Blogs</Link>
            <Link to={"/sponsors"}>Sponsors</Link>
            <Link to={"/about"}>About Us</Link>
          </div>
        </div>
        <div className="flex gap-3">
          <select name="" id="select">
            <option value="EN">EN</option>
            <option value="AZ">AZ</option>
            <option value="RU">RU</option>
          </select>
          <div>
            <button className="bg-white text-black">Buy ticket</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
