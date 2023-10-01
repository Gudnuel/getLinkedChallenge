import React from "react";
import "./styles/number-time-line.scss";
import oneIcon from "../../assets/oneIcon.svg";
import twoIcon from "../../assets/twoIcon.svg";
import thirdIcon from "../../assets/thirdIcon.svg";
import fourthIcon from "../../assets/fourthIcon.svg";
import fiveIcon from "../../assets/fiveIcon.svg";
import sixIcon from "../../assets/sixIcon.svg";

const NumberTimeLine = (props) => {
  const { id, date, headOne, headTwo, bodyTwo, bodyOne } = props;
  var imageOne;
  var imageTwo;
  if (id === 1) {
    imageOne = oneIcon;
    imageTwo = twoIcon;
  } else if (id === 2) {
    imageOne = thirdIcon;
    imageTwo = fourthIcon;
  } else {
    imageOne = fiveIcon;
    imageTwo = sixIcon;
  }

  return (
    <>
      <section className="desk-time-line">
        <div className="seg-one">
          <h4 className="seg-one-head">{headOne}</h4>
          <p>{bodyOne}</p>
        </div>
        <div
          className="image-hold"
          style={{ marginTop: id === 1 ? "-3rem" : 0 }}
        >
          <img src={imageOne} alt="first-image" />
        </div>
        <div className="seg-two">
          <h4 className="seg-two-head">{date}</h4>
        </div>
      </section>
      <section className="desk-time-line2">
        <div className="seg-one">
          <h4 className="seg-one-head">{headTwo}</h4>
          <p>{bodyTwo}</p>
        </div>
        <div className="image-hold">
          <img src={imageTwo} alt="second-image" />
        </div>
        <div className="seg-two">
          <h4 className="seg-two-head">{date}</h4>
        </div>
      </section>
    </>
  );
};

export default NumberTimeLine;
