import React from "react";
import "./styles/fifth-hero.scss";
import { HeroFiveLister, TopicComponent } from "../general/index";
import fiveHeroImage from "../../assets/fiveHeroImage.png";
import fiveData from "../../Data/fiveDate";

const FiveHero = () => {
  return (
    <div className="five-hero">
      <section className=" five-hero-second">
        <TopicComponent firstTopic="Frequently Ask" secondTopic="Question" />
        <p className="five-hero-topic-word">
          We got answers to the questions that you might <br />
          want to ask about <span>getlinked Hackathon 1.0</span>
        </p>
        <ul>
          {fiveData.map((ask) => (
            <HeroFiveLister key={ask.id} question={ask.question} />
          ))}
        </ul>
      </section>
      <section className="five-hero-first">
        <img src={fiveHeroImage} alt="five-hero" />
      </section>
    </div>
  );
};

export default FiveHero;
