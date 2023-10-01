import React from "react";
import theBigDeal from "../../assets/theBigDeal.png";
import starFix from "../../assets/starFix.svg";

import "./styles/second-hero.scss";
import { TopicComponent } from "../general/index.jsx";

const SecondHero = () => {
  return (
    <>
      <div className="second-hero">
        <section className="second-hero-first">
          <img src={theBigDeal} alt="the-big-deal" />
        </section>
        <section className="second-hero-second">
          <span className="second-hero-topic">
            <TopicComponent
              firstTopic="Introduction to getlinked"
              secondTopic="tech Hackathon 1.0"
            />
            <img className="second-hero-fix" src={starFix} alt="star" />
          </span>

          <p className="second-hero-body">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </p>
        </section>
      </div>
    </>
  );
};

export default SecondHero;
