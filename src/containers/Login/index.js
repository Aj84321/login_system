import React, { useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import OTPInput from "react-otp-input";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);


  const handleMobileNumber = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleSendOtpClick = (e) => {
    e.preventDefault();
    if(mobileNumber.length !==10){
        toast.error('Mobile number must be exactly 10 digits!');
        return;
    }
    console.log("OTP Sent:", otp);
    setOtpSent(true);
    toast.success("OTP has been sent successfully!");
  };
  const handleOtpVerify = (e) => {
    e.preventDefault();
    if(otp.length !==4){
        toast.error('Please Enter OTP');
        return;

    }
    console.log("OTP Verified:", otp);
    toast.success("OTP has been Verfied!");
  };

  return (
    <>
      <h1>Login</h1>
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
            <label>Mobile Number:</label>
            <input
              type="number"
              value={mobileNumber}
              onChange={handleMobileNumber}
            />
            <button onClick={handleSendOtpClick}>Send OTP</button>
            <br />
          </>
        )}

        {otpSent && (
          <>
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
