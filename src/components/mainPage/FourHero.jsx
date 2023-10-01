import React from "react";
import fourthHeroImage from "../../assets/fourthHeroDeskImg.png";
import "./styles/fourth-hero.scss";
import { TopicComponent, HeroFourLister } from "../general/index.jsx";
import { heroFourData } from "../../Data/data";

const FourHero = () => {
  // const {her}
  return (
    <div className="four-hero">
      <section className="four-hero-first">
        <img src={fourthHeroImage} alt="fourthImage" />
      </section>
      <section className="four-hero-second">
        <TopicComponent
          firstTopic="Judging Criteria"
          secondTopic="Key attributes"
        />
        <div className="four-hero-body">
          <ul>
            {heroFourData.map((list) => (
              <HeroFourLister key={list.id} head={list.head} body={list.body} />
            ))}
          </ul>
          <button className="four-btn">Read More</button>
        </div>
      </section>
    </div>
  );
};

export default FourHero;
