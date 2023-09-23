import React from "react";
import "./styles/privacy-policy.scss";
import privacy from "../../assets/PriacyPolicyImg.svg";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-main">
      <section className="privacy-first-part"></section>
      <section className="privacy-second-part">
        <img src={privacy} alt="" />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
