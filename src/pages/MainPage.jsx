import React from "react";
import "./beautifier/main-page.scss";
import {
  FiveHero,
  FourHero,
  HeroPart,
  PartnerSponsor,
  PrizeAward,
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
      <PrizeAward />
      <PartnerSponsor />
    </>
  );
};

export default MainPage;
