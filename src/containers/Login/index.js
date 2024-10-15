import React, { useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Redux/authSlice";

export default function Login() {
  const [mobileNumber, setMobileNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [screen, setScreen] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [age, setAge] = useState("");



  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
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
    setScreen(2);
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
    setScreen(3);


  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!name || !email) {
  //     toast.error("Please fill in both Name and Email.");
  //     return;
  //   }
  //   console.log("Name:", name);
  //   console.log("Email:", email);
  //   toast.success("Details have been saved successfully!");
  
  //   // Dispatch login action to update Redux state
  //   dispatch(login());
  
  //   // Navigate to profile after successful submission
  //   navigate("/profile");
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
      toast.error("Please fill in both Name and Email.");
      return;
    }
  
    const userName = name;
    const userEmail = email;
    const userAge = age;
    const userId = id;
      
    console.log("Name:", name);
    console.log("Email:", email);
    toast.success("Details have been saved successfully!");
  
    // Dispatch login with user details
    dispatch(login({
      name: userName,
      email: userEmail,
      age: userAge,
      id: userId,
    }));
  
    navigate("/profile");
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
        {screen === 1 && (
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

        {screen === 2 && (
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

        {screen === 3 && (
          <>
            <h2>Required Details</h2>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />

            <label>Email:</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
                       <label>Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br />

            <label>ID:</label>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
            <br />
            <button className="center-text" onClick={handleSubmit}>
              Save
            </button>
          </>
        )}
      </form>
      <h2>
        <Link to="/">Home</Link>
      </h2>
    </>
  );
}
