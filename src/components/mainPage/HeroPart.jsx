import React from "react";
import "./styles/hero-part.scss";
import creative from "../../assets/Creative-icon.svg";
import chain from "../../assets/chain-icon.svg";
import dynamite from "../../assets/dynamite-icon.svg";
import { BottomBar } from "../icon/index";

const HeroPart = () => {
  return (
    <div className="main-holder">
      <div className="hero-first">
        <h4 className="top-word">
          <span className="igniting-fix">
            Igniting a Revolution in
            <span className="bottom-bar">
              <span>HR Innovation</span>
              <BottomBar />
            </span>
          </span>
        </h4>
      </div>
      <div className="company-name">
        <section className="company-word">
          <h1>
            <span className="vertical-fix">
              <span className="company-top-word">
                <>getlinked Te</>
                <span className="creative-icon">
                  <>ch</>
                  <img className="creative" src={creative} alt="creative " />
                </span>
              </span>
            </span>
            <br />
            <span className="company-bottom-word">
              Hackathon <span className="version-point">1.0</span>
              <span>
                <img src={chain} alt="chain " />
              </span>
              <span>
                <img src={dynamite} alt="dynamite " />
              </span>
            </span>
          </h1>
          <p>
            Participate in getlinked tech Hackathon 2023 stand a chance to win a
            Big prize
          </p>

          <div className="company-btn">
            <button className="hero-part-btn" to="/register">
              Register
            </button>
          </div>

          <h3>
            00<small>H</small> 00<small>M</small> 00<small>S</small>
          </h3>
        </section>
      </div>
    </div>
  );
};

export default HeroPart;
