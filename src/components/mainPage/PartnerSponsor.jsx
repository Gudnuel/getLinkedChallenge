import React from "react";
import "./styles/partner-sponser.scss";
import partner from "../../assets/PartnerSponsorsSectionImg.svg";

const PartnerSponsor = () => {
  return (
    <div className="partner-main">
      <section className="partner-first-part">
        <h3 className="partner-head">Partners and Sponsors</h3>
        <p className="partner-word">
          Getlinked Hackathon 1.0 is honored to have the following major
          companies as its partners and sponsors
        </p>
      </section>
      <section className="partner-second-part">
        <img src={partner} alt="partner pix" />
      </section>
    </div>
  );
};

export default PartnerSponsor;
