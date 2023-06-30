import React, { useState } from "react";
import "./login.css";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import Otpverfication from "../components/Otpverfication";

const Login = () => {
  const [user, setUser] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [showOtpcomp, setShowOtpcomp] = useState(false);
  const [ confirmObj, setConfirmObj ] = useState();
  let number = '+91' + phoneNumber;
  const setRecaptcha = (number) => {
    let recaptcha = new RecaptchaVerifier("recaptcha-container", {}, auth);
    recaptcha.render();
    return signInWithPhoneNumber(auth, number, recaptcha);
  };

  const handleClick = async (e) => {
    e.preventDefault();
    let res = await setRecaptcha(number);
    if (res) {
      setShowOtpcomp(true);
      console.log(res);
      console.log(res.confirmationResult);
      setConfirmObj(res);
    }
  };

  return (
    <div className="login-container">
      <div className="img-container">
        <img src="images/ChatGPT_logo.svg.png" alt="" />
      </div>
      <div className="login-wrapper">
        {showOtpcomp === true ? (
          <Otpverfication confirmObj = {confirmObj} />
        ) : (
          <>
            <h2>WELCOME</h2>
            <div className="username-container">
              <input
                type="text"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              />
              <p>Enter user name</p>
            </div>
            <form>
              <div className="pnumber-container">
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <p>Enter phone number</p>

              </div>
            </form>
            <div id="recaptcha-container" style={{ marginTop: "25px" }}></div>
            <button className="login-btn" onClick={handleClick}>
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Login;
