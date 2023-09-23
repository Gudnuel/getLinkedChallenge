import React from "react";
import "./styles/prize-award.scss";
import reward from "../../assets/RewardsMedalImg.svg";
import prize from "../../assets/prizeImg.svg";
import { TopicComponent } from "../general/index";

const PrizeAward = () => {
  return (
    <div className="prize-main">
      <section className="prize-first-part">
        <div className="prize-first-one">
          <TopicComponent firstTopic="Prizes and" secondTopic="Rewards" />
          <p className="prize-word">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <img src={prize} alt="prize pic" />
      </section>
      <section className="prize-second-part">
        <div className="prize-second-one">
          <TopicComponent firstTopic="Prizes and" secondTopic="Rewards" />
          <p className="prize-word">
            Highlight of the prizes or rewards for winners and for participants.
          </p>
        </div>
        <div className="prize-second-two">
          <img src={reward} alt="reward pic" />
        </div>
      </section>
    </div>
  );
};

export default PrizeAward;
