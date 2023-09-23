import React from "react";
import "./styles/hero-five-lister.scss";
// import plus from "../../assets/plus.png";
import { Plus } from "../icon/index";

const HeroFiveLister = (props) => {
  const { question } = props;
  return (
    <section className="hero5-lister-case">
      <li className="hero5-lister">{question}</li>
      <Plus />
    </section>
  );
};

export default HeroFiveLister;
