import React from "react";
import "./beautifier/main-page.scss";
import {
  FiveHero,
  FourHero,
  HeroPart,
  SecondHero,
  ThirdHero,
} from "../components/mainPage/index.jsx";

const MainPage = () => {
  return (
    <>
      <HeroPart />
      <SecondHero />
      <ThirdHero />
      <FourHero />
      <FiveHero />
    </>
  );
};

export default MainPage;
