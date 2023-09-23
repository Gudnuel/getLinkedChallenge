import React, { useState } from "react";
import "./NavBar.scss";
import { NavLink } from "react-router-dom";
import logo from "../../assets/getlinked.svg";
import sandwich from "../../assets/sandwich.svg";
import sleeper from "../../assets/sleeper.svg";
// import { useState } from "react";

const NavBar = () => {
  const [wake, setWake] = useState("");
  // const wake = false;
  return (
    <div className="header">
      <section className="head">
        <div className="con">
          <aside className="aside">
            <img src={logo} alt="logo " className="logo" />
          </aside>
          <span className="sandwich" onClick={() => setWake("2px")}>
            <img src={sandwich} alt="logo " className="logo" />
          </span>
          <aside
            className="navi_cover"
            // style={{display:"block"}}
            style={{ right: wake }}
          >
            <nav className="me-auto">
              <p className="sleep" onClick={() => setWake("200rem")}>
                <img src={sleeper} alt="sleeper " />
              </p>
              <NavLink className="navi_link" to="/">
                Timeline
              </NavLink>
              <NavLink className="navi_link" to="/">
                Overview
              </NavLink>
              <NavLink className="navi_link" to="/">
                FAQs
              </NavLink>
              <NavLink className="navi_link" to="/contact">
                Contact
              </NavLink>
            </nav>
            <span className="control-active">
              <NavLink className="presser" to="/register">
                Register
              </NavLink>
            </span>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default NavBar;
