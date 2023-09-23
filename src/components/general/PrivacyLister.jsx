import React from "react";
import "./styles/privacy-lister.scss";
import { GreenCeal } from "../icon";

const PrivacyLister = () => {
  return (
    <div className="privacy-lister">
      <span className="indicator">
        <GreenCeal />
      </span>

      <p className="privacy-lister">
        The Standard License grants you a non-exclusive right to navigate and
        register for our event
      </p>
    </div>
  );
};

export default PrivacyLister;
