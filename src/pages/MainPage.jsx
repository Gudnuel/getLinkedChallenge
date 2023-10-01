import React from "react";
import "./beautifier/main-page.scss";
import {
  FiveHero,
  FourHero,
  HeroPart,
  PartnerSponsor,
  PrivacyPolicy,
  PrizeAward,
  SecondHero,
  SixHero,
  ThirdHero,
} from "../components/mainPage/index.jsx";

const MainPage = () => {
  return (
    <div className="main-pages-bg">
      <HeroPart />
      <SecondHero />
      <ThirdHero />
      <FourHero />
      <FiveHero />
      <SixHero />
      <PrizeAward />
      <PartnerSponsor />
      <PrivacyPolicy />
    </div>
  );
};

export default MainPage;
