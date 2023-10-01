import React from "react";
import "./styles/privacy-lister.scss";
import { GreenCeal } from "../icon";

const PrivacyLister = (props) => {
  const { body } = props;
  return (
    <div className="privacy-lister">
      <span className="indicator">
        <GreenCeal />
      </span>
      <p className="privacy-lister-word">{body}</p>
    </div>
  );
};

export default PrivacyLister;
