import React, { useState, useEffect } from "react";
import axios from "axios";
import "./beautifier/register-page.scss";
import registerGuySeat from "../assets/registerGuySeatImg.svg";
import movementImg from "../assets/movementImg.svg";
import { baseUrl } from "../Confij";
import { DownwardArrowIcon } from "../components/icon/index.jsx";
import { option } from "../Data/option";
import { SuccessModal } from "../components/register/index";

const RegisterPage = () => {
  const [teamName, setTeamName] = useState("");
  const [projectTopic, setProjectTopic] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [category, setCategory] = useState(1);
  const [groupSize, setGroupSize] = useState(1);
  const [privacy, setPrivacy] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState("Select your category");
  const [modal, setModal] = useState(false);
  const [error, setError] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };
  const handleGroupSize = (e) => {
    setGroupSize(e.target.value);
  };
  const handlePrivacy = () => {
    setPrivacy(!privacy);
  };
  const toggler = () => {
    setIsOpen(!isOpen);
    if (selected === "MOBILE") {
      setCategory(1);
    }
    if (selected === "DEV") {
      setCategory(2);
    }
    if (selected === "UI/UX") {
      setCategory(3);
    }
  };
  const reset = () => {
    setCategory("");
    setEmail("");
    setGroupSize("");
    setPhone("");
    setProjectTopic("");
    setPrivacy("");
    setTeamName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const data = {
      email: email,
      team_name: teamName,
      phone_number: phone,
      project_topic: projectTopic,
      group_size: groupSize,
      privacy_policy_accepted: privacy,
      category: category,
    };
    console.log(data);
    const response = await axios.post(
      `${baseUrl}/hackathon/registration`,
      data
    );
    const report = response.data;
    if (report) {
      console.log(report);
      setIsLoading(false);
      setModal(true);
      reset();
    } else {
      setIsLoading(false);
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  return (
    <div className="register-main">
      <section className="register-first-part">
        <img src={registerGuySeat} alt="register pix" />
      </section>
      <section className="register-second-part">
        <div className="register-form-holder">
          <span className="register-topic-control">
            <h4>Register</h4>
            <p>
              Be part of this movement!
              <span>
                <img src={movementImg} alt="we-move" />
              </span>
            </p>
            <h6 className="head-point">CREATE YOUR ACCOUNT</h6>
          </span>

          <form onSubmit={handleSubmit}>
            <section className="input-director">
              <span className="input-case-holder">
                <label>Team's Name</label>
                <input
                  type="text"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  required
                  placeholder="Enter the name of your group"
                />
              </span>

              <span className="input-case-holder">
                <label>Phone</label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  pattern="[0-9]{11}"
                  placeholder="Enter your phone number"
                />
              </span>
            </section>
            <section className="input-director">
              <span className="input-case-holder">
                <label>Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="Enter your email address"
                />
              </span>

              <span className="input-case-holder">
                <label>Project Topic</label>
                <input
                  type="text"
                  value={projectTopic}
                  onChange={(e) => setProjectTopic(e.target.value)}
                  required
                  placeholder="What is your group project topic"
                />
              </span>
            </section>
            <section id="input-director">
              <span className="input-case-holder">
                <label className="cat">Category</label>
                <div className="general-dropdown">
                  <div className="general-dropdown-btn" onClick={toggler}>
                    {selected}
                    <span>
                      <DownwardArrowIcon />
                    </span>
                  </div>
                  {isOpen && (
                    <div className="general-dropdown-content">
                      {option.map((option) => (
                        <div
                          key={option.id}
                          onClick={() => {
                            setSelected(option.name);
                            setIsOpen(false);
                          }}
                          className="general-dropdown-item"
                        >
                          {option.name}
                        </div>
                      ))}
                    </div>
                  )}
                  <div />
                </div>
              </span>
              <span className="input-case-holder">
                <label className="group-size">Group Size</label>
                <input
                  className="select"
                  id="option-small"
                  type="number"
                  value={groupSize}
                  onChange={handleGroupSize}
                  required
                  min="0"
                  max="100"
                  step="2"
                />
              </span>
            </section>
            <span className="bottom-register-option">
              {!error && (
                <p>Please review your registration details before submitting</p>
              )}
              {error && (
                <p>Please review your registration details before submitting</p>
              )}

              <p className="check-privacy">
                <input
                  type="checkbox"
                  required
                  value={privacy}
                  onChange={handlePrivacy}
                />
                I agreed with the event terms and conditions and privacy policy
              </p>
              {!isLoading && (
                <button className="register-submit-btn">Register Now</button>
              )}
              {isLoading && (
                <button className="register-submit-btn" disabled>
                  SENDING...
                </button>
              )}
            </span>
          </form>
        </div>
      </section>
      <SuccessModal modal={modal} setModal={handleModal} />
    </div>
  );
};

export default RegisterPage;
