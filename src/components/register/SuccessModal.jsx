import React from "react";
import "./styles/success-modal.scss";
import registerSuccess from "../../assets/registerSuccess.svg";
import eyeFace from "../../assets/eyeFAce.svg";

export const SuccessModal = (props) => {
  const { modal, setModal, title, desc } = props;

  return (
    <>
      {modal && (
        <div className="register-success-modal">
          <div className="register-success-overlay">
            <div className="register-card">
              <img src={registerSuccess} alt="success pix" />

              <h1 className="register-success-head">
                Congratulations <br /> you have successfully Registered!
              </h1>

              <span className="register-success-phrase">
                <h6>
                  Yes, it was easy and you did it! check your mail box for next
                  step
                  <img src={eyeFace} alt="eye-face" />
                </h6>
              </span>
              {/* 
              <span className="register-success-close"> */}

              <button onClick={setModal} className="register-close-btn">
                back
              </button>
              {/* </span> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
