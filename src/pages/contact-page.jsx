import React, { useState } from "react";
import "./beautifier/contact-page.scss";
import {
  InstagramIcon,
  TwitterIcon,
  Facebook,
  LinkdlinIcon,
} from "../components/icon/index";
import { InputComponent } from "../components/register/index.jsx";

const ContactPage = () => {
  const [teamName, setTeamName] = useState("");
  const [topic, setTopic] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="contact-main">
      <section className="contact-first-part">
        <h3>Get in touch</h3>

        <p>
          Contact
          <br />
          Information
        </p>
        <p>
          27,Alara Street <br /> Yaba 100012 <br /> Lagos State
        </p>
        <p>Call Us : 07067981819</p>
        <p>
          we are open from Monday-Friday <br /> 08:00am - 05:00pm
        </p>
        <span className="social-connect">
          <h5>Share on</h5>
          <span className="social-case">
            <InstagramIcon />
            <LinkdlinIcon />
            <Facebook />
            <TwitterIcon />
          </span>
        </span>
      </section>
      <section className="contact-second-part">
        <div className="contact-form-holder">
          <span className="contact-topic-control">
            <h4>Questions or need assistance? Let us know about it!</h4>
            <h5>Email us below to any question related to our event</h5>
          </span>

          <form>
            <InputComponent
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              // title="Team's Name"
              placeholder="Team's Name"
            />
            <InputComponent
              type="text"
              value={topic}
              onChange={(e) => setTeamName(e.target.value)}
              // title="Team's Name"
              placeholder="Topic"
            />
            <InputComponent
              type="text"
              value={email}
              onChange={(e) => setTeamName(e.target.value)}
              // title="Team's Name"
              placeholder="Email"
            />
            <section className="text-component">
              <div className="text-component-holder">
                <textarea
                  className="text-field"
                  type="text"
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  cols="30"
                  rows="6"
                  minlength="5"
                  maxlength="200"
                  placeholder="Message?"
                ></textarea>
              </div>
            </section>
            <button className="contact-submit-btn">Submit</button>
          </form>

          <span className="social-connect mobile">
            <h5>Share on</h5>
            <span className="social-case">
              <InstagramIcon />
              <LinkdlinIcon />
              <Facebook />
              <TwitterIcon />
            </span>
          </span>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
