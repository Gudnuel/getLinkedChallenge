import React from "react";
import "./styles/hero-four-lister.scss";

const HeroFourLister = (props) => {
  const { head, body } = props;
  return (
    <>
      <li className="hero-four-lister">
        <span>{head}:</span>
        {body}
      </li>
    </>
  );
};

export default HeroFourLister;
