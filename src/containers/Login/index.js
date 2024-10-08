import React, { useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const navigate = useNavigate();
  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendOtpClick = (e) => {
    e.preventDefault();
    if (mobileNumber.length !== 10) {
      toast.error("Mobile number must be exactly 10 digits!");
      return;
    }
    console.log("OTP Sent:", otp);
    setOtpSent(true);
    toast.success("OTP has been sent successfully!");
  };
  const handleOtpVerify = (e) => {
    e.preventDefault();
    if (otp.length !== 4) {
      toast.error("Please Enter OTP");
      return;
    }
    if (otp !== "1234") {
      toast.error("Invalid OTP. Please try again.");
      return;
    }

    console.log("OTP Verified:", otp);
    toast.success("OTP has been verified successfully!");
    navigate("/"); 
  };

  return (
    <>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            border: "1px solid #713200",
            padding: "16px",
            color: "#713200",
          },
        }}
      />

      <form>
        {!otpSent && (
          <>
            <h2>Log in or Sign Up</h2>

            <label>Mobile Number:</label>
            <input
              type="number"
              value={mobileNumber}
              onChange={handleMobileNumber}
            />
            <br />

            <button onClick={handleSendOtpClick}>Send OTP</button>
            <br />
          </>
        )}

        {otpSent && (
          <>
            <h2>OTP Verification</h2>

            <label>Otp:</label>
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={4}
              renderSeparator={<span>-</span>}
              renderInput={(props) => <input {...props} />}
            />

            <button onClick={handleOtpVerify}>Verify OTP</button>
          </>
        )}
      </form>
    </>
  );
}
