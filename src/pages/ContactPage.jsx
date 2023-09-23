import React, { useState } from "react";
import "./beautifier/contact-page.scss";
import axios from "axios";
import { baseUrl } from "../Data/baseUrl";

import {
  InstagramIcon,
  TwitterIcon,
  Facebook,
  LinkdlinIcon,
} from "../components/icon/index";
import { InputComponent } from "../components/register/index.jsx";

const ContactPage = () => {
  const [teamName, setTeamName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const reset = () => {
    setTeamName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email: email,
      first_name: teamName,
      phone_number: phone,
      message: message,
    };
    console.log(data);
    await axios
      .post(`${baseUrl}/hackathon/contact-form`, data)

      .then(function (response) {
        console.log(response);
        setIsLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 5000);
        reset();
      })
      .catch(function (error) {
        console.log(error);
        setIsLoading(false);
        reset();
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 5000);
      });
  };

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
            {success ? (
              <h2 style={{ color: "greenyellow" }}>MESSAGE SENT!</h2>
            ) : null}
          </span>

          <form onSubmit={handleSubmit}>
            <InputComponent
              type="text"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              required
              placeholder="Full Name"
            />
            <InputComponent
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              pattern="[0-9]{11} || 0-9]{13} "
              required
              placeholder="Phone Number"
            />
            <InputComponent
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
            <section className="text-component">
              <div className="text-component-holder">
                <textarea
                  className="text-field"
                  type="text"
                  value={message}
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

            {!isLoading && (
              <button className="contact-submit-btn">Submit</button>
            )}
            {isLoading && (
              <button className="contact-submit-btn">SENDING...</button>
            )}
            {error ? <h6 style={{ color: "red" }}>Try Again</h6> : null}
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
