import React from "react";
import "./styles/six-hero.scss";
import { NumberTimeLine, NumberTimeLineMobile } from "../general/index";
import { timeLineDeskData, timeLineMobileData } from "../../Data/timeLine";

const SixHero = () => {
  return (
    <section className="six-hero">
      <div className="six-first-part">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      <div className="six-second-part">
        <div className="desk-no">
          {timeLineDeskData.map((time) => (
            <NumberTimeLine
              key={time.id}
              headOne={time.headOne}
              headTwo={time.headTwo}
              bodyOne={time.bodyOne}
              bodyTwo={time.bodyTwo}
              date={time.date}
              id={time.id}
            />
          ))}
        </div>
        <div className="mobile-no">
          {timeLineMobileData.map((time) => (
            <NumberTimeLineMobile
              key={time.id}
              head={time.head}
              word={time.body}
              date={time.date}
              id={time.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SixHero;
