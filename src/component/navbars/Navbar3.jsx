import React from "react";
import "./Navbar3.css";
import Logo from "../imag/Logo.png";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Navbar3 = () => {
  return (
    <>
      <div className="Navbar3-container">
        <div className="Navbar3-content">
          <div className="logo-main">
            <img src={Logo} className="logo" alt="" />
          </div>

          <div className="searchbar-main">
            <div className="searchbar-content">
              <SearchIcon style={{ color: "White" }} />
              <ArrowDropDownIcon style={{ color: "White" }} />
            </div>
          </div>

          <div className="Navbar3-pages-main">
            <p>Find Work</p>
            <p className="Navbar3-page2">My Job</p>
            <p>Reports</p>
            <p>Messages</p>
          </div>

          <div className="Navbar3-icons-main">
            <ion-icon name="help-sharp" style={{ fontSize: 25 }} ></ion-icon>
            <ion-icon name="notifications" style={{ fontSize: 20 }}></ion-icon>
            <ion-icon name="paper-plane" style={{ fontSize: 20 }}></ion-icon>
            <ion-icon name="person-circle" style={{fontSize:25}}></ion-icon>
          </div>

        </div>
      </div>
    </>
  );
};

export default Navbar3;
