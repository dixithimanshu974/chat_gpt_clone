import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./otpverification.css";

const Otpverfication = ({ confirmObj }) => {
  const [otp, setOtp] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const verifyOtp = async () => {
    try {
      await confirmObj.confirm(otp);
      setError(false);
      navigate("/");

    } catch {
      setError(true);
      console.log("error");
    }
  };
  return (
    <div className="otp-container">
      <div className="otp-wrapper">
        <h2>VERIFY OTP</h2>
        <form>
          <div className="otpnum-container">
            <p>Enter Otp!!!</p>
            <input
              type="text"
              value={otp}
              onChange={(e) => (setOtp(e.target.value), setError(false))}
            />
          </div>
          { error &&
            <p style={{ color: "red" }}>Wrong Otp!!!</p>}
        </form>
        <button className="verotp-btn" onClick={verifyOtp}>
          Verify Otp
        </button>
      </div>
    </div>
  );
};

export default Otpverfication;
