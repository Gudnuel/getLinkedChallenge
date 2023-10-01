import React from "react";
import "./styles/third-hero.scss";
import thridHeroImage from "../../assets/thirdHeroDeskImg.png";
import { TopicComponent } from "../general/index.jsx";

const ThirdHero = () => {
  return (
    <div className="third-hero">
      <section className="third-hero-second">
        <TopicComponent firstTopic="Rules and" secondTopic="Guidelines" />

        <p className="third-hero-body">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </p>
      </section>
      <section className="third-hero-first">
        <img src={thridHeroImage} alt="third-hero" />
      </section>
    </div>
  );
};

export default ThirdHero;
