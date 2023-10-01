import React from "react";
import "./styles/privacy-policy.scss";
import privacy from "../../assets/PriacyPolicyImg.png";
import { TopicComponent, PrivacyLister } from "../../components/general/index";
import { privacyData } from "../../Data/data";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-main">
      <section className="privacy-first-part">
        <div className="privacy-first-part-one">
          <TopicComponent firstTopic="Privacy Policy and" secondTopic="Terms" />
          <p className="para-time">Last updated on September 12, 2023</p>
          <p>
            Below are our privacy & policy, which outline a lot of goodies. it’s
            our aim to always take of our participant
          </p>
        </div>
        <div className="privacy-first-part-two">
          <section className="privacy-first-part-two-holder">
            <div className="privacy-case-holder">
              <p className="privacy-word">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.
              </p>
              <span>
                <h6 className="privacy-head-word">
                  <span>
                    Licensing Policy <br />
                  </span>
                  Here are terms of our Standard License:
                </h6>
                {privacyData.map((privacy) => (
                  <PrivacyLister key={privacy.id} body={privacy.body} />
                ))}
              </span>
              <button className="privacy-presser">Read More</button>
            </div>
          </section>
        </div>
      </section>
      <section className="privacy-second-part">
        <img src={privacy} alt="privacy pic" />
      </section>
    </div>
  );
};

export default PrivacyPolicy;
