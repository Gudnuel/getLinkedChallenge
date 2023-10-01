import React from "react";
import "./styles/number-time-line-mobile.scss";
import {
  TimeIconFive,
  TimeIconFour,
  TimeIconOne,
  TimeIconSix,
  TimeIconThree,
  TimeIconTwo,
} from "../icon";

const NumberTimeLineMobile = (props) => {
  const { id, head, date, word } = props;
  var icon;
  if (id === 1) {
    icon = <TimeIconOne />;
  } else if (id === 2) {
    icon = <TimeIconTwo />;
  } else if (id === 3) {
    icon = <TimeIconThree />;
  } else if (id === 4) {
    icon = <TimeIconFour />;
  } else if (id === 2) {
    icon = <TimeIconFive />;
  } else {
    icon = <TimeIconSix />;
  }
  return (
    <section className="mobile-timeline-main">
      <div className="mobile-timeline-first">{icon}</div>
      <div className="mobile-timeline-second">
        <h4 className="mobile-timeline-head">{head}</h4>
        <p className="mobile-timeline-word">{word}</p>
        <h5 className="mobile-timeline-date">{date}</h5>
      </div>
    </section>
  );
};

export default NumberTimeLineMobile;
